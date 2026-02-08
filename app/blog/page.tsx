import type { Metadata } from "next"
import BlogPageClient from "./blog-client"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI automation, digital counterparts, lead generation strategy, and the future of business intelligence. Read the latest from Hotlist AI.",
  keywords: [
    "AI blog",
    "AI automation insights",
    "digital counterparts blog",
    "lead generation strategy",
    "business AI articles",
    "AI startup blog",
    "machine learning insights",
  ],
  openGraph: {
    title: "Blog | Hotlist AI",
    description:
      "Insights on AI automation, digital counterparts, and the future of business intelligence.",
    url: "https://hotlistai.com/blog",
    siteName: "Hotlist AI",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotlist AI Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Hotlist AI",
    description:
      "Insights on AI automation, digital counterparts, and the future of business intelligence.",
    images: ["/og-image.jpg"],
    creator: "@hotlistai",
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}
