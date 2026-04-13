import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { RelatedLinks } from "@/components/seo/related-links"
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo"
import { getGlossaryBySlug, glossaryEntries } from "@/lib/seo-taxonomy"

export function generateStaticParams() {
  return glossaryEntries.map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const entry = getGlossaryBySlug(slug)
  if (!entry) return {}
  return buildMetadata({ title: `${entry.term} Definition`, description: entry.shortDefinition, path: `/glossary/${entry.slug}`, keywords: [entry.term, "AI glossary", "operations definition"] })
}

export default async function GlossaryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getGlossaryBySlug(slug)
  if (!entry) notFound()

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Glossary", href: "/glossary" },
    { name: entry.term, href: `/glossary/${entry.slug}` },
  ])

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }, { name: "Glossary", href: "/glossary" }, { name: entry.term }]} />
          <header className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Glossary Term</p>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">{entry.term}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{entry.shortDefinition}</p>
          </header>
          <section className="rounded-xl border border-border/30 bg-muted/20 p-6">
            <h2 className="text-xl font-semibold mb-3">In Practice</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{entry.deeperExplanation}</p>
          </section>
          <section className="rounded-xl border border-border/30 bg-muted/20 p-6">
            <h2 className="text-xl font-semibold mb-3">Related Terms</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">{entry.relatedTerms.map((term) => <li key={term}>• {term}</li>)}</ul>
          </section>
          <RelatedLinks title="Continue Learning" links={entry.nextLinks} />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteFooter />
    </div>
  )
}
