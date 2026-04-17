import type { MetadataRoute } from "next"
import { getAllPosts, getAllCategories } from "@/lib/blog"
import { getSeoProgrammaticUrls } from "@/lib/seo-taxonomy"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hotlistai.com"
  const now = new Date().toISOString()

  // Static routes - all pages in /app directory
  const staticRoutes = [
    // Core pages (highest priority)
    { path: "", priority: 1.0, changeFreq: "daily" as const },
    { path: "/deployments", priority: 0.95, changeFreq: "weekly" as const },
    { path: "/how-it-works", priority: 0.95, changeFreq: "weekly" as const },
    
    // Products
    { path: "/lab", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/labs", priority: 0.85, changeFreq: "weekly" as const },
    { path: "/hotlist-funnels", priority: 0.9, changeFreq: "weekly" as const },
    
    // Content hubs
    { path: "/blog", priority: 0.9, changeFreq: "daily" as const },
    { path: "/resources", priority: 0.85, changeFreq: "weekly" as const },
    
    // Company pages
    { path: "/company", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/ethos", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/governance", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/faq", priority: 0.75, changeFreq: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/press", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/developers", priority: 0.6, changeFreq: "monthly" as const },
    
    // Legal pages (lowest priority)
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

  // Blog post routes
  const posts = getAllPosts()
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.9 : 0.8,
  }))

  // Blog category routes
  const categories = getAllCategories()
  const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.toLowerCase()}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries, ...categoryEntries]
}
