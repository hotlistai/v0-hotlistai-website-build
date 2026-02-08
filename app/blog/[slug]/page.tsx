import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/blog"

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
    keywords: [post.category, "Hotlist AI", "AI blog", post.title],
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} | Hotlist AI Blog`,
      description: post.description,
      url: `https://hotlistai.com/blog/${post.slug}`,
      siteName: "Hotlist AI",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
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

  // Convert markdown-style headings and paragraphs to HTML
  const contentHtml = post.content
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        return `<h2 class="text-2xl md:text-3xl font-serif mt-12 mb-4">${block.slice(3)}</h2>`
      }
      if (block.startsWith("**") && block.endsWith("**")) {
        return `<p class="text-lg font-semibold mt-6 mb-2">${block.slice(2, -2)}</p>`
      }
      if (block.startsWith("**")) {
        // Bold lead paragraphs like "**The Asset Agent** tracks..."
        const formatted = block.replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="text-foreground">$1</strong>'
        )
        return `<p class="text-muted-foreground leading-relaxed mb-4">${formatted}</p>`
      }
      return `<p class="text-muted-foreground leading-relaxed mb-4">${block}</p>`
    })
    .join("")

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
      url: "https://hotlistai.com/company",
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
    wordCount: post.content.split(/\s+/).length,
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
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-border/50 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight mb-6 text-balance">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
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
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </header>

            {/* Content */}
            <div
              className="prose-hotlist"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Post navigation */}
            <nav className="mt-16 pt-8 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group p-5 rounded-xl border border-border/40 hover:border-border/60 hover:bg-muted/30 transition-all"
                >
                  <span className="text-xs text-muted-foreground">Previous</span>
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
                  <span className="text-xs text-muted-foreground">Next</span>
                  <p className="text-sm font-medium mt-1 group-hover:text-foreground transition-colors">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </nav>

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
