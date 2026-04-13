import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { industryEntries } from "@/lib/seo-taxonomy"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Industry Playbooks",
  description: "Industry-specific AI operations pages for real estate, B2B SaaS, agencies, consulting, and professional services teams.",
  path: "/industries",
  keywords: ["AI industry playbooks", "AI operations by industry", "workflow automation by vertical"],
})

export default function IndustriesIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Industry Library</p>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">Industry Playbooks</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">Vertical pages mapping recurring operational constraints to practical deployment patterns.</p>
          </header>
          <section className="grid md:grid-cols-2 gap-5">
            {industryEntries.map((entry) => (
              <Link key={entry.slug} href={`/industries/${entry.slug}`} className="rounded-xl border border-border/30 bg-muted/20 p-6 hover:border-foreground/30 transition-colors">
                <h2 className="text-xl font-semibold mb-2">{entry.title}</h2>
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
