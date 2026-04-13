import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { RelatedLinks } from "@/components/seo/related-links"
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo"
import { compareEntries, getCompareBySlug } from "@/lib/seo-taxonomy"

export function generateStaticParams() {
  return compareEntries.map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const entry = getCompareBySlug(slug)
  if (!entry) return {}
  return buildMetadata({ title: entry.title, description: entry.summary, path: `/compare/${entry.slug}`, keywords: [entry.searchIntent, "AI infrastructure comparison", "operations model comparison"] })
}

export default async function CompareDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getCompareBySlug(slug)
  if (!entry) notFound()

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Compare", href: "/compare" },
    { name: entry.title, href: `/compare/${entry.slug}` },
  ])

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }, { name: "Compare", href: "/compare" }, { name: entry.title }]} />
          <header className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Comparison</p>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">{entry.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{entry.summary}</p>
          </header>
          <section className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border/30 bg-muted/20 p-6">
              <h2 className="text-xl font-semibold mb-3">Options Evaluated</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">{entry.evaluatedOptions.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
            <div className="rounded-xl border border-border/30 bg-muted/20 p-6">
              <h2 className="text-xl font-semibold mb-3">When Hotlist AI Fits</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">{entry.whenHotlistFits.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
          </section>
          <RelatedLinks title="Related Deep Dives" links={entry.internalLinks} />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteFooter />
    </div>
  )
}
