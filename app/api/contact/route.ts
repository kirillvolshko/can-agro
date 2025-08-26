import xmlrpc from "xmlrpc";

const OdooServer = process.env.ODOO_SERVER;
const OdooDbName = process.env.ODOO_DB_NAME;
const OdooDbUsr = process.env.ODOO_DB_USR;
const OdooApikey = process.env.ODOO_API_KEY;


const common = xmlrpc.createClient({
  url: `${OdooServer}/xmlrpc/2/common`,
});
const models = xmlrpc.createClient({
  url: `${OdooServer}/xmlrpc/2/object`,
});


function authenticate() {
  return new Promise((resolve, reject) => {
    common.methodCall(
      "authenticate",
      [OdooDbName, OdooDbUsr, OdooApikey, {}],
      (err, uid) => {
        if (err) return reject(err);
        resolve(uid);
      }
    );
  });
}


function execute_kw(uid, model, method, params) {
  return new Promise((resolve, reject) => {
    models.methodCall(
      "execute_kw",
      [OdooDbName, uid, OdooApikey, model, method, params],
      (err, value) => {
        if (err) return reject(err);
        resolve(value);
      }
    );
  });
}

const requestTimes = new Map<string, number>();

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") || req.headers.get("host") || "unknown";

  const now = Date.now();
  const lastRequestTime = requestTimes.get(ip) || 0;

  if (now - lastRequestTime < 100) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Too many requests. Wait 1 minute.",
      }),
      { status: 429 }
    );
  }

  requestTimes.set(ip, now);

  const { recaptchaToken, ...formData } = await req.json();

  if (!recaptchaToken) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Captcha token missing",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
    { method: "POST" }
  );

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return new Response(
      JSON.stringify({ success: false, error: "Captcha verification failed" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const uid = await authenticate();

    const leadId = await execute_kw(uid, "crm.lead", "create", [
      {
        contact_name: formData.name || "John Doe",
        email_from: formData.email || "contact@example.com",
        mobile: formData.phone || "+1 (204) 325-1234",
        name: `Subject from ${formData.name}`,
        description: formData.message || "blablabla",
      },
    ]);

    return new Response(
      JSON.stringify({ success: true, leadId }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Odoo error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Odoo request failed" }),
      { status: 500 }
    );
  }
}
