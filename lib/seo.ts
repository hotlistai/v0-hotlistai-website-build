import type { Metadata } from "next"
import { absoluteSiteUrl, SITE_URL, SITE_NAME } from "@/lib/site"

export function absoluteUrl(path: string) {
  return absoluteSiteUrl(path)
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
}): Metadata {
  const url = absoluteUrl(path)
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      type: "article",
      siteName: SITE_NAME,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${title} - ${SITE_NAME}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ["/og-image.jpg"],
      creator: "@hotlistai",
    },
  }
}

export function buildBreadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  }
}
