import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { RelatedLinks } from "@/components/seo/related-links"
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo"
import { getIndustryBySlug, getUseCaseBySlug, industryEntries } from "@/lib/seo-taxonomy"

export function generateStaticParams() {
  return industryEntries.map((entry) => ({ slug: entry.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = getIndustryBySlug(params.slug)
  if (!entry) return {}
  return buildMetadata({ title: entry.title, description: entry.summary, path: `/industries/${entry.slug}`, keywords: [entry.searchIntent, "industry AI operations", "vertical process automation"] })
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const entry = getIndustryBySlug(params.slug)
  if (!entry) notFound()

  const relatedLinks = entry.relatedUseCaseSlugs
    .map((slug) => {
      const useCase = getUseCaseBySlug(slug)
      return useCase ? { label: useCase.title, href: `/use-cases/${slug}` } : null
    })
    .filter(Boolean) as { label: string; href: string }[]

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Industries", href: "/industries" },
    { name: entry.title, href: `/industries/${entry.slug}` },
  ])

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }, { name: "Industries", href: "/industries" }, { name: entry.title }]} />
          <header className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Industry Playbook</p>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">{entry.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{entry.summary}</p>
          </header>
          <section className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border/30 bg-muted/20 p-6">
              <h2 className="text-xl font-semibold mb-3">Recurring Constraints</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">{entry.recurringPain.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
            <div className="rounded-xl border border-border/30 bg-muted/20 p-6">
              <h2 className="text-xl font-semibold mb-3">Recommended Deployment Lanes</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">{entry.highLeverageDeployments.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
          </section>
          {relatedLinks.length > 0 ? <RelatedLinks title="Related Use Cases" links={relatedLinks} /> : null}
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteFooter />
    </div>
  )
}
