import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Resource Library",
  description:
    "Guides and resources for real-estate CRM follow-up, stale lead recovery, routing, speed to lead, and nurture discipline.",
  path: "/resources",
  keywords: ["real estate CRM resources", "Lead Follow-Up Audit", "stale lead recovery", "speed to lead"],
})

const collections = [
  { title: "Topic Hubs", description: "Pillar pages for CRM follow-up, stale lead recovery, speed to lead, and reactivation.", href: "/learn" },
  { title: "Use Cases", description: "Workflow-level pages for routing, nurture, cleanup, and accountability.", href: "/use-cases" },
  { title: "Industry Playbooks", description: "Real-estate team and boutique brokerage follow-up patterns.", href: "/industries" },
  { title: "Comparisons", description: "Decision pages comparing audit-first repair against more leads, CRMs, and ISA options.", href: "/compare" },
  { title: "Glossary", description: "Definitions for follow-up gaps, next actions, routing, and CRM reactivation.", href: "/glossary" },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Learning Center</p>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">Resource Library</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Plain-language guides organized around where real-estate teams lose opportunity: response, routing, nurture, stale-lead recovery, and accountability. Start with a free Lead Follow-Up Audit when you are ready.
            </p>
          </header>
          <section className="grid md:grid-cols-2 gap-5">
            {collections.map((collection) => (
              <Link key={collection.href} href={collection.href} className="rounded-xl border border-border/30 bg-muted/20 p-6 hover:border-foreground/30 transition-colors">
                <h2 className="text-2xl font-semibold mb-2">{collection.title}</h2>
                <p className="text-sm text-muted-foreground">{collection.description}</p>
              </Link>
            ))}
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
