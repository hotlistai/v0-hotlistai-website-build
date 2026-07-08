import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { glossaryEntries } from "@/lib/seo-taxonomy"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Real Estate CRM Follow-Up Glossary",
  description: "Definitions for follow-up gaps, next actions, lead routing, speed to lead, CRM reactivation, and nurture discipline.",
  path: "/glossary",
  keywords: ["real estate CRM glossary", "follow-up gap", "speed to lead", "CRM reactivation"],
})

export default function GlossaryIndexPage() {
  const sorted = [...glossaryEntries].sort((a, b) => a.term.localeCompare(b.term))
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Glossary</p>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">Real Estate CRM Follow-Up Glossary</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">Plain-language definitions for the terms that decide whether leads keep moving or disappear inside the CRM.</p>
          </header>
          <section className="grid md:grid-cols-2 gap-4">
            {sorted.map((entry) => (
              <Link key={entry.slug} href={`/glossary/${entry.slug}`} className="rounded-xl border border-border/30 bg-muted/20 p-5 hover:border-foreground/30 transition-colors">
                <h2 className="text-lg font-semibold mb-2">{entry.term}</h2>
                <p className="text-sm text-muted-foreground">{entry.shortDefinition}</p>
              </Link>
            ))}
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
