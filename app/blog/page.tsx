import type { Metadata } from "next"
import BlogPageClient from "./blog-client"
import { getAllPosts, getFeaturedPost, getAllCategories } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog — AI Automation, Digital Counterparts & Lead Generation Insights",
  description:
    "Insights on AI automation, digital counterparts, lead generation strategy, multi-agent systems, and the future of business intelligence. Read the latest from Hotlist AI.",
  keywords: [
    "AI blog",
    "AI automation insights",
    "digital counterparts blog",
    "lead generation strategy",
    "business AI articles",
    "AI startup blog",
    "multi-agent systems",
    "AI for real estate",
    "AI for solar companies",
    "AI for law firms",
    "conversion optimization",
    "AI lead generation",
  ],
  openGraph: {
    title: "Blog | Hotlist AI — AI Automation & Lead Generation Insights",
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
  const posts = getAllPosts()
  const featuredPost = getFeaturedPost()
  const categories = getAllCategories()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://hotlistai.com/blog",
    name: "Hotlist AI Blog",
    description:
      "Insights on AI automation, digital counterparts, lead generation strategy, and the future of business intelligence.",
    url: "https://hotlistai.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Hotlist AI",
      url: "https://hotlistai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://hotlistai.com/logo-light.png",
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `https://hotlistai.com/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: post.author,
      },
      articleSection: post.category,
      keywords: post.tags.join(", "),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPageClient
        posts={posts}
        categories={categories}
        featuredPost={featuredPost}
      />
    </>
  )
}
