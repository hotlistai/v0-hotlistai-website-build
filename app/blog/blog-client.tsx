"use client"

import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Search, Rss, Clock } from "lucide-react"
import { useState, useMemo } from "react"
import type { BlogPost } from "@/lib/blog"

export default function BlogPageClient({
  posts,
  categories,
  featuredPost,
}: {
  posts: BlogPost[]
  categories: string[]
  featuredPost?: BlogPost
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = useMemo(() => {
    let filtered = posts.filter((p) => p.slug !== featuredPost?.slug)

    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      )
    }

    return filtered
  }, [posts, featuredPost, activeCategory, searchQuery])

  const totalPosts = posts.length

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-20 md:py-32 px-4 md:px-6" aria-label="Blog">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight">
                  Blog
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  Thoughts on building AI systems, lead generation, and the future of business
                  automation.
                </p>
                <p className="text-sm text-muted-foreground">
                  {totalPosts} articles across {categories.length} topics
                </p>
              </div>
              <a
                href="/feed.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
                title="Subscribe to RSS Feed"
              >
                <Rss className="w-4 h-4" />
                RSS Feed
              </a>
            </div>

            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search articles by title, topic, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted/30 border border-border/40 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/30 focus:bg-muted/50 transition-all"
              />
            </div>

            {/* Featured post - only show when not searching */}
            {featuredPost && !searchQuery.trim() && activeCategory === "All" && (
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block mb-12 p-8 md:p-12 rounded-2xl border border-border/40 bg-card hover:border-border/60 hover:bg-muted/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground bg-foreground/10 px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                  <Link
                    href={`/blog/category/${featuredPost.category.toLowerCase()}`}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {featuredPost.category}
                  </Link>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-serif mb-4 group-hover:text-foreground transition-colors text-balance">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                  {featuredPost.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{featuredPost.author}</span>
                    <span>{"/"}</span>
                    <time dateTime={featuredPost.date}>
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/20">
                  {featuredPost.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            )}

            {/* Category filter */}
            <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                  activeCategory === "All"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Post grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-6 md:p-8 rounded-2xl border border-border/40 bg-card hover:border-border/60 hover:bg-muted/20 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-serif mb-3 group-hover:text-foreground transition-colors text-balance">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <time dateTime={post.date} className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-2">
                  {searchQuery.trim()
                    ? `No articles matching "${searchQuery}"`
                    : "No posts in this category yet."}
                </p>
                {searchQuery.trim() && (
                  <button
                    onClick={() => {
                      setSearchQuery("")
                      setActiveCategory("All")
                    }}
                    className="text-sm text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
                  >
                    Clear search
                  </button>
                )}
              </div>
            )}

            {/* Category browse section */}
            <div className="mt-20 pt-12 border-t border-border/40">
              <h2 className="text-2xl font-serif mb-8">Browse by Topic</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((cat) => {
                  const count = posts.filter((p) => p.category === cat).length
                  return (
                    <Link
                      key={cat}
                      href={`/blog/category/${cat.toLowerCase()}`}
                      className="group p-5 rounded-xl border border-border/40 hover:border-border/60 hover:bg-muted/20 transition-all"
                    >
                      <h3 className="text-lg font-serif group-hover:text-foreground transition-colors">
                        {cat}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {count} {count === 1 ? "article" : "articles"}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
