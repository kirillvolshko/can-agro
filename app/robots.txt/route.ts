import { NextResponse } from "next/server";

export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://can-agro.com/sitemap.xml
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
