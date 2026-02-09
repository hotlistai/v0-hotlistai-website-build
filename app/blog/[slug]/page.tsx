import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getPostBySlug, getAllSlugs, getAllPosts, getRelatedPosts } from "@/lib/blog"

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: post.title,
    description: post.description,
    keywords: [...post.tags, "Hotlist AI", "AI blog"],
    authors: [{ name: post.author, url: "https://hotlistai.com/company" }],
    openGraph: {
      title: `${post.title} | Hotlist AI Blog`,
      description: post.description,
      url: `https://hotlistai.com/blog/${post.slug}`,
      siteName: "Hotlist AI",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.jpg"],
      creator: "@hotlistai",
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

function extractHeadings(content: string): { id: string; text: string }[] {
  return content
    .split("\n\n")
    .filter((block) => block.startsWith("## "))
    .map((block) => {
      const text = block.slice(3).trim()
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      return { id, text }
    })
}

function renderContent(content: string): string {
  return content
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        const text = block.slice(3).trim()
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")
        return `<h2 id="${id}" class="text-2xl md:text-3xl font-serif mt-12 mb-4 scroll-mt-24">${text}</h2>`
      }
      if (block.startsWith("**") && block.endsWith("**")) {
        return `<p class="text-lg font-semibold mt-6 mb-2">${block.slice(2, -2)}</p>`
      }
      if (block.startsWith("**")) {
        const formatted = block.replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="text-foreground font-semibold">$1</strong>'
        )
        return `<p class="text-muted-foreground leading-relaxed mb-4">${formatted}</p>`
      }
      if (block.startsWith("- ")) {
        const items = block
          .split("\n")
          .filter((line) => line.startsWith("- "))
          .map((line) => {
            const formatted = line
              .slice(2)
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
            return `<li class="text-muted-foreground leading-relaxed">${formatted}</li>`
          })
          .join("")
        return `<ul class="list-disc pl-6 space-y-2 mb-4">${items}</ul>`
      }
      const formatted = block.replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="text-foreground">$1</strong>'
      )
      return `<p class="text-muted-foreground leading-relaxed mb-4">${formatted}</p>`
    })
    .join("")
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug)
  const nextPost = allPosts[currentIndex + 1]
  const prevPost = allPosts[currentIndex - 1]
  const relatedPosts = getRelatedPosts(post.slug, 3)
  const headings = extractHeadings(post.content)
  const contentHtml = renderContent(post.content)
  const wordCount = post.content.split(/\s+/).length

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://hotlistai.com/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
      url: "https://hotlistai.com/company",
      worksFor: {
        "@type": "Organization",
        name: "Hotlist AI",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Hotlist AI",
      url: "https://hotlistai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://hotlistai.com/logo-light.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hotlistai.com/blog/${post.slug}`,
    },
    image: "https://hotlistai.com/og-image.jpg",
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount,
    isAccessibleForFree: true,
    inLanguage: "en-US",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hotlistai.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://hotlistai.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.category,
          item: `https://hotlistai.com/blog/category/${post.category.toLowerCase()}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: post.title,
          item: `https://hotlistai.com/blog/${post.slug}`,
        },
      ],
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article [data-speakable]"],
    },
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        <article className="py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href={`/blog/category/${post.category.toLowerCase()}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {post.category}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground font-medium truncate max-w-[200px]">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              All Posts
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Link
                  href={`/blog/category/${post.category.toLowerCase()}`}
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-border/50 px-2.5 py-1 rounded-full hover:border-foreground/30 transition-colors"
                >
                  {post.category}
                </Link>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight mb-6 text-balance">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8" data-speakable="true">
                {post.description}
              </p>

              <div className="flex items-center gap-3 pb-8 border-b border-border/40">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium">{post.author}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>{"/"}</span>
                    <span>{wordCount.toLocaleString()} words</span>
                  </div>
                </div>
              </div>
            </header>

            {/* Table of Contents */}
            {headings.length > 2 && (
              <nav
                aria-label="Table of contents"
                className="mb-12 p-6 rounded-xl bg-muted/30 border border-border/30"
              >
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  In This Article
                </h2>
                <ol className="space-y-2">
                  {headings.map((heading, i) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-start gap-2"
                      >
                        <span className="text-xs text-muted-foreground/50 mt-0.5 w-4 shrink-0">
                          {i + 1}.
                        </span>
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {/* Content */}
            <div
              className="prose-hotlist"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border/40">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground border border-border/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Post navigation */}
            <nav
              aria-label="Post navigation"
              className="mt-10 pt-8 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group p-5 rounded-xl border border-border/40 hover:border-border/60 hover:bg-muted/30 transition-all"
                >
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3" /> Previous
                  </span>
                  <p className="text-sm font-medium mt-1 group-hover:text-foreground transition-colors">
                    {prevPost.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group p-5 rounded-xl border border-border/40 hover:border-border/60 hover:bg-muted/30 transition-all text-right"
                >
                  <span className="text-xs text-muted-foreground flex items-center justify-end gap-1">
                    Next <ArrowRight className="w-3 h-3" />
                  </span>
                  <p className="text-sm font-medium mt-1 group-hover:text-foreground transition-colors">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </nav>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <section aria-label="Related articles" className="mt-16">
                <h2 className="text-2xl font-serif mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group p-5 rounded-xl border border-border/40 hover:border-border/60 hover:bg-muted/20 transition-all"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {related.category}
                      </span>
                      <h3 className="text-sm font-medium mt-2 group-hover:text-foreground transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <span className="text-xs text-muted-foreground mt-2 block">
                        {related.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="mt-16 p-8 md:p-12 rounded-2xl bg-muted/30 border border-border/40 text-center">
              <h2 className="text-2xl md:text-3xl font-serif mb-3">
                Building Something Meaningful?
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                {"If you're building something that matters, let's talk. We work with founders and operators who value clarity, speed, and systems that actually work."}
              </p>
              <Link
                href="/contact"
                className="inline-flex px-6 py-3 text-sm font-semibold rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
