import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  const urls = [
    "https://can-agro.com/",
    "https://can-agro.com/about",
    "https://can-agro.com/contact",
  ];

  const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
      (url) => `<url>
  <loc>${url}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>`
    )
    .join("\n")}
</urlset>`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}