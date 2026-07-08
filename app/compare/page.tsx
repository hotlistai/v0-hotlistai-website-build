import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { compareEntries } from "@/lib/seo-taxonomy"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Comparison Guides",
  description: "Comparison pages evaluating Hotlist against buying more leads, CRM automation, ISA hiring, and database reactivation options.",
  path: "/compare",
  keywords: ["Hotlist alternatives", "real estate CRM comparison", "AI ISA vs human ISA"],
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
            <p className="text-lg text-muted-foreground max-w-3xl">Neutral comparison pages for teams deciding whether to buy more leads, hire follow-up labor, or start with a Lead Follow-Up Audit first.</p>
          </header>
          <section className="space-y-4">
            {compareEntries.map((entry) => (
              <Link key={entry.slug} href={`/compare/${entry.slug}`} className="block rounded-xl border border-border/30 bg-muted/20 p-6 hover:border-foreground/30 transition-colors">
                <h2 className="text-2xl font-semibold mb-2">{entry.title}</h2>
                <p className="text-sm text-muted-foreground">{entry.summary}</p>
              </Link>
            ))}
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
