import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getCategoryBySlug, getPostsByCategory, getAllCategories, slugifyCategory } from "@/lib/blog"

const categoryDescriptions: Record<string, string> = {
  "follow-up-gaps": "Where real-estate leads lose momentum inside the CRM and how teams can repair the break.",
  "crm-discipline": "Practical CRM cleanup, smart list, owner, stage, and accountability guidance for real-estate teams.",
  "stale-lead-recovery": "How to segment and revive the leads your team already paid to acquire.",
  "speed-to-lead": "How to improve first response, second touch, routing, and escalation discipline.",
  nurture: "Human-aware nurture systems that automate busy work while preserving the agent relationship.",
  "real-estate-systems": "Operating systems for routing, accountability, CRM trust, and follow-up execution.",
}

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: slugifyCategory(category),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const formattedCategory = getCategoryBySlug(category) || category
  const description =
    categoryDescriptions[category] ||
    `Read the latest ${formattedCategory} articles from Hotlist AI.`

  return {
    title: `${formattedCategory} Articles`,
    description,
    keywords: [
      `${formattedCategory} articles`,
      "Hotlist AI blog",
      "real estate CRM follow-up",
      "Lead Follow-Up Audit",
    ],
    openGraph: {
      title: `${formattedCategory} | Hotlist AI Blog`,
      description,
      url: `https://hotlistai.com/blog/category/${category}`,
      siteName: "Hotlist AI",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedCategory} | Hotlist AI Blog`,
      description,
      creator: "@hotlistai",
    },
    alternates: {
      canonical: `/blog/category/${category}`,
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const formattedCategory = getCategoryBySlug(category) || category
  const posts = getPostsByCategory(formattedCategory)
  const allCategories = getAllCategories()

  if (posts.length === 0 && !allCategories.map((c) => slugifyCategory(c)).includes(category)) {
    notFound()
  }

  const description =
    categoryDescriptions[category] ||
    `Read the latest ${formattedCategory} articles from Hotlist AI.`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${formattedCategory} Articles — Hotlist AI Blog`,
    description,
    url: `https://hotlistai.com/blog/category/${category}`,
    isPartOf: {
      "@type": "Blog",
      name: "Hotlist AI Blog",
      url: "https://hotlistai.com/blog",
    },
    publisher: {
      "@type": "Organization",
      name: "Hotlist AI",
      url: "https://hotlistai.com",
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
        <section className="py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
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
                <li className="text-foreground font-medium">{formattedCategory}</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="space-y-4 mb-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All Posts
              </Link>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight">
                {formattedCategory}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
              <p className="text-sm text-muted-foreground">
                {posts.length} {posts.length === 1 ? "article" : "articles"}
              </p>
            </div>

            {/* Category nav */}
            <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
              <Link
                href="/blog"
                className="px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
              >
                All
              </Link>
              {allCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog/category/${slugifyCategory(cat)}`}
                  className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                    slugifyCategory(cat) === category
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-6 md:p-8 rounded-2xl border border-border/40 bg-card hover:border-border/60 hover:bg-muted/20 transition-all"
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

            {posts.length === 0 && (
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
