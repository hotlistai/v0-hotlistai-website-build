import type { Metadata } from "next"
import BlogPageClient from "./blog-client"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AI automation, building products, and the future of work. Read the latest from Hotlist AI.",
  openGraph: {
    title: "Blog | Hotlist AI",
    description: "Insights on AI automation, building products, and the future of work.",
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}
