import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { compareEntries } from "@/lib/seo-taxonomy"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Comparison Guides",
  description: "Comparison pages evaluating Hotlist AI against hiring, manual operations, trigger-only automation, and generic AI agent tools.",
  path: "/compare",
  keywords: ["Hotlist AI alternatives", "AI operations comparison", "manual ops vs AI systems"],
})

export default function CompareIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Decision Layer</p>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">Comparison Guides</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">Neutral comparison pages for buyers evaluating workflow infrastructure against other operating models.</p>
          </header>
          <section className="space-y-4">
            {compareEntries.map((entry) => (
              <Link key={entry.slug} href={`/compare/${entry.slug}`} className="block rounded-xl border border-border/30 bg-muted/20 p-6 hover:border-foreground/30 transition-colors">
                <h2 className="text-2xl font-semibold mb-2">{entry.title}</h2>
                <p className="text-sm text-muted-foreground mb-3">{entry.summary}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Intent: {entry.searchIntent}</p>
              </Link>
            ))}
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
