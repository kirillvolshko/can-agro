import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
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
