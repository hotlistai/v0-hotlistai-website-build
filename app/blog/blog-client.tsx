"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowUpRight, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

interface Post {
  title: string
  link: string
  pubDate: string
  contentSnippet: string
  creator: string
}

export default function BlogPageClient() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("/api/substack")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts || [])
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching posts:", err)
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-20 md:py-32 px-4 md:px-6" aria-label="Blog">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 mb-16 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight">Blog</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Thoughts on building, design, and the future of AI-powered work.
              </p>
            </div>

            {loading && (
              <div className="text-center py-16">
                <Loader2 className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
                <p className="text-muted-foreground mt-4">Loading posts...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-16 animate-fade-in">
                <div className="inline-flex p-4 rounded-2xl bg-muted/50 mb-6">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Read on Substack</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Subscribe to Johnny Apple for insights on AI, automation, and building in public.
                </p>
                <a
                  href="https://hotlistai.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
                >
                  Read on Substack
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )}

            {!loading && !error && posts.length > 0 && (
              <div className="space-y-6">
                {posts.map((post, index) => (
                  <a
                    key={post.link}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-in-up block group p-6 md:p-8 rounded-2xl border border-border/40 bg-card hover:border-border/60 hover:bg-muted/30 transition-all hover:scale-[1.01]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="text-xl md:text-2xl font-serif group-hover:text-foreground transition-colors">
                        {post.title}
                      </h2>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
                      {post.contentSnippet}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{post.creator}</span>
                      <span>•</span>
                      <time dateTime={post.pubDate}>{new Date(post.pubDate).toLocaleDateString()}</time>
                    </div>
                  </a>
                ))}

                <div className="text-center pt-8 animate-fade-in delay-500">
                  <a
                    href="https://hotlistai.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium border-b border-border/50 hover:border-foreground transition-colors"
                  >
                    View all posts on Substack <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {!loading && !error && posts.length === 0 && (
              <div className="text-center py-16 animate-fade-in">
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  No posts available at the moment. Please check back later.
                </p>
                <a
                  href="https://hotlistai.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
                >
                  Read on Substack
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
