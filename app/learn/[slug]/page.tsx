import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { RelatedLinks } from "@/components/seo/related-links"
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo"
import { getHubBySlug, hubEntries } from "@/lib/seo-taxonomy"

export function generateStaticParams() {
  return hubEntries.map((entry) => ({ slug: entry.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const hub = getHubBySlug(params.slug)
  if (!hub) return {}
  return buildMetadata({
    title: hub.title,
    description: hub.summary,
    path: `/learn/${hub.slug}`,
    keywords: [hub.searchIntent, "AI operations", "deployment framework", "workflow governance"],
  })
}

export default function LearnDetailPage({ params }: { params: { slug: string } }) {
  const hub = getHubBySlug(params.slug)
  if (!hub) notFound()

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Learn", href: "/learn" },
    { name: hub.title, href: `/learn/${hub.slug}` },
  ])

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }, { name: "Learn", href: "/learn" }, { name: hub.title }]} />

          <header className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Topic Hub</p>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">{hub.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{hub.summary}</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Primary intent: {hub.searchIntent}</p>
          </header>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border/30 bg-muted/20 p-6">
              <h2 className="text-xl font-semibold mb-3">Who This Is For</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">{hub.whoItsFor.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
            <div className="rounded-xl border border-border/30 bg-muted/20 p-6">
              <h2 className="text-xl font-semibold mb-3">Core Questions</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">{hub.coreQuestions.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
          </section>

          <RelatedLinks title="Recommended Next Steps" links={hub.nextSteps} />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteFooter />
    </div>
  )
}
