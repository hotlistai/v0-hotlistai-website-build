import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Resource Library",
  description:
    "Search-focused resource center for AI workforce implementation: topic hubs, use cases, industry playbooks, comparisons, and glossary terms.",
  path: "/resources",
  keywords: ["AI resource library", "digital workforce guides", "AI operations playbooks", "automation glossary"],
})

const collections = [
  { title: "Topic Hubs", description: "Pillar pages that explain each core operating concept in plain language.", href: "/learn" },
  { title: "Use Cases", description: "Workflow-level implementation pages for growth, operations, and executive execution.", href: "/use-cases" },
  { title: "Industry Playbooks", description: "Industry-specific pages that map recurring bottlenecks to deployment patterns.", href: "/industries" },
  { title: "Comparisons", description: "Decision pages comparing infrastructure deployment against common alternatives.", href: "/compare" },
  { title: "Glossary", description: "Definitions, terms, and implementation language for AI workforce systems.", href: "/glossary" },
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
              This library is organized for search clarity and implementation depth. Start with the hub that matches your current bottleneck, then branch into use cases, industry pages, comparisons, and definitions.
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
