import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hotlistai.com"

  const routes = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/lab", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/hotlist-funnels", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/ethos", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/faq", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/press", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/developers", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/legal", priority: 0.3, changeFreq: "yearly" as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }))
}
