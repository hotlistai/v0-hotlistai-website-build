import { NextResponse } from "next/server"
import { absoluteSiteUrl } from "@/lib/site"

const imageEntries = [
  {
    path: "/",
    images: [
      {
        src: "/visuals/hotlist-hero-crm-routing-background.png",
        title: "Hotlist CRM routing and follow-up visibility",
      },
      {
        src: "/visuals/before-after-crm-execution-layer.png",
        title: "Before and after CRM execution layer",
      },
      {
        src: "/visuals/final-cta-lead-flow-dark.png",
        title: "Lead flow audit and Tech Concierge support",
      },
    ],
  },
  {
    path: "/follow-up-leak-audit",
    images: [
      {
        src: "/visuals/follow-up-leak-audit-scorecard.png",
        title: "Lead Follow-Up Audit scorecard",
      },
      {
        src: "/visuals/sample-leak-report-document-stack.png",
        title: "Sample follow-up leak report",
      },
    ],
  },
  {
    path: "/sample-leak-report",
    images: [
      {
        src: "/visuals/sample-leak-report-document-stack.png",
        title: "Sample Hotlist audit report document stack",
      },
    ],
  },
  {
    path: "/blog",
    images: [
      {
        src: "/visuals/blog-thumbnail-crm-leak-series.png",
        title: "Real estate CRM follow-up gap article series",
      },
    ],
  },
]

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageEntries
  .map(
    (entry) => `<url>
  <loc>${escapeXml(absoluteSiteUrl(entry.path))}</loc>
${entry.images
  .map(
    (image) => `  <image:image>
    <image:loc>${escapeXml(absoluteSiteUrl(image.src))}</image:loc>
    <image:title>${escapeXml(image.title)}</image:title>
  </image:image>`,
  )
  .join("\n")}
</url>`,
  )
  .join("\n")}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
