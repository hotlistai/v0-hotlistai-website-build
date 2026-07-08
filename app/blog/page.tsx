import type { Metadata } from "next"
import BlogPageClient from "./blog-client"
import { getAllPosts, getFeaturedPost, getAllCategories } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog — Real Estate Follow-Up Gaps, CRM Discipline & Stale Lead Recovery",
  description:
    "Practical articles on follow-up gaps, stale lead recovery, speed to lead, nurture discipline, and team accountability from your Agent Tech Concierge at Hotlist.",
  keywords: [
    "real estate CRM follow up",
    "Lead Follow-Up Audit",
    "stale lead recovery",
    "speed to lead",
    "Follow Up Boss cleanup",
    "real estate nurture",
  ],
  openGraph: {
    title: "Blog | Hotlist — Real Estate Follow-Up Systems",
    description:
      "Practical articles on follow-up gaps, stale lead recovery, and real-estate team accountability.",
    url: "https://hotlistengine.com/blog",
    siteName: "Hotlist",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotlist Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Hotlist",
    description:
      "Practical articles on follow-up gaps, stale lead recovery, and real-estate team accountability.",
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
    "@id": "https://hotlistengine.com/blog",
    name: "Hotlist Blog",
    description:
      "Practical articles on follow-up gaps, stale lead recovery, speed to lead, nurture discipline, and team accountability.",
    url: "https://hotlistengine.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Hotlist",
      url: "https://hotlistengine.com",
      logo: {
        "@type": "ImageObject",
        url: "https://hotlistengine.com/logo-light.png",
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `https://hotlistengine.com/blog/${post.slug}`,
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
