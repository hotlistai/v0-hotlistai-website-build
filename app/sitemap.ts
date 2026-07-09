import type { MetadataRoute } from "next"
import { getAllPosts, getAllCategories, slugifyCategory } from "@/lib/blog"
import { getSeoProgrammaticUrls } from "@/lib/seo-taxonomy"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  const now = new Date().toISOString()

  const staticRoutes = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/follow-up-leak-audit", priority: 0.95, changeFreq: "weekly" as const },
    { path: "/how-it-works", priority: 0.85, changeFreq: "monthly" as const },
    { path: "/sample-leak-report", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/follow-up-boss-automation-audit", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/follow-up-boss-cleanup", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/company", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/resources", priority: 0.75, changeFreq: "weekly" as const },
    { path: "/learn", priority: 0.75, changeFreq: "weekly" as const },
    { path: "/use-cases", priority: 0.75, changeFreq: "weekly" as const },
    { path: "/industries", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/compare", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/glossary", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/governance", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/faq", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/privacy", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/legal", priority: 0.3, changeFreq: "yearly" as const },
  ]

  const programmaticRoutes = getSeoProgrammaticUrls()
    .filter((path) => !staticRoutes.some((route) => route.path === path))
    .map((path) => ({ path, priority: 0.65, changeFreq: "weekly" as const }))

  const staticEntries: MetadataRoute.Sitemap = [...staticRoutes, ...programmaticRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }))

  const posts = getAllPosts()
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.9 : 0.8,
  }))

  const categories = getAllCategories()
  const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/blog/category/${slugifyCategory(category)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries, ...categoryEntries]
}
