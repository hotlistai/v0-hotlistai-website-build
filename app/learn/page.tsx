import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { hubEntries } from "@/lib/seo-taxonomy"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "AI Workforce Topic Hubs",
  description: "Pillar pages covering digital workforce infrastructure, AI operations systems, deployment, governance, and executive execution.",
  path: "/learn",
  keywords: ["AI workforce infrastructure", "AI deployment framework", "AI governance controls"],
})

export default function LearnIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Pillar Pages</p>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">AI Workforce Topic Hubs</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">Start with a hub to understand the model, then move into tactical pages for use cases, industries, comparisons, and glossary definitions.</p>
          </header>
          <section className="space-y-4">
            {hubEntries.map((hub) => (
              <Link key={hub.slug} href={`/learn/${hub.slug}`} className="block rounded-xl border border-border/30 bg-muted/20 p-6 hover:border-foreground/30 transition-colors">
                <h2 className="text-2xl font-semibold mb-2">{hub.title}</h2>
                <p className="text-sm text-muted-foreground mb-3">{hub.summary}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Intent: {hub.searchIntent}</p>
              </Link>
            ))}
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
