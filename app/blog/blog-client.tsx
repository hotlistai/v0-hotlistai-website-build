"use client"

import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
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

  const filteredPosts =
    activeCategory === "All"
      ? posts.filter((p) => p.slug !== featuredPost?.slug)
      : posts.filter((p) => p.category === activeCategory && p.slug !== featuredPost?.slug)

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-20 md:py-32 px-4 md:px-6" aria-label="Blog">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="space-y-4 mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight">
                Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Thoughts on building, AI systems, and the future of business automation.
              </p>
            </div>

            {/* Featured post */}
            {featuredPost && (
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block mb-16 p-8 md:p-12 rounded-2xl border border-border/40 bg-card hover:border-border/60 hover:bg-muted/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-border/50 px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-xs text-muted-foreground">{featuredPost.category}</span>
                  <span className="text-xs text-muted-foreground">{featuredPost.readTime}</span>
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
              </Link>
            )}

            {/* Category filter */}
            <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
              {["All", ...categories].map((cat) => (
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
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-6 md:p-8 rounded-2xl border border-border/40 bg-card hover:border-border/60 hover:bg-muted/20 transition-all"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-serif mb-3 group-hover:text-foreground transition-colors text-balance">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <time
                      dateTime={post.date}
                      className="text-xs text-muted-foreground"
                    >
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
                <p className="text-muted-foreground">
                  No posts in this category yet. Check back soon.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
