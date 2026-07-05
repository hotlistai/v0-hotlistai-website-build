import type { Metadata } from "next"
import Link from "next/link"
import { ArchiveRestore, DatabaseZap, Tags, UsersRound } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Follow Up Boss Cleanup for Real Estate Teams",
  description:
    "Clean up Follow Up Boss duplicates, tags, stages, smart lists, stale leads, lead-source visibility, and overdue follow-up before more real-estate leads leak through the CRM.",
  alternates: { canonical: "/follow-up-boss-cleanup" },
  openGraph: {
    title: "Follow Up Boss Cleanup for Real Estate Teams | HotlistAI",
    description:
      "Clean up Follow Up Boss duplicates, tags, stages, smart lists, stale leads, and overdue follow-up before more real-estate leads leak through the CRM.",
    url: "https://hotlistai.com/follow-up-boss-cleanup",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "HotlistAI follow-up leak audit" }],
  },
  twitter: {
    title: "Follow Up Boss Cleanup for Real Estate Teams | HotlistAI",
    description:
      "Clean up Follow Up Boss duplicates, tags, stages, smart lists, stale leads, and overdue follow-up before more real-estate leads leak through the CRM.",
    images: ["/twitter-image"],
  },
}

const priorities = [
  "duplicates and confusing contact records",
  "tags, stages, and smart lists that no longer match how the team sells",
  "stale leads with revival potential",
  "lead-source visibility and attribution gaps",
  "overdue follow-up and missing owners",
  "agent lists that do not show today's highest-value actions",
]

export default function FollowUpBossCleanupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        <section className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">
              Follow Up Boss Cleanup
            </p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.95] max-w-4xl mb-8">
              Follow Up Boss Cleanup for Real Estate Teams
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Clean up the CRM before more leads leak through it.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Duplicates, tags, stages, smart lists, stale leads, lead-source visibility, and overdue follow-up all
              decide whether your team can work from one source of truth.
            </p>
            <CalBookingButton size="lg">Book a Follow-Up Leak Audit</CalBookingButton>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">Cleanup Priorities</p>
            <div className="grid md:grid-cols-3 gap-4">
              {priorities.map((item) => (
                <div key={item} className="rounded-xl border border-border/40 bg-background p-5">
                  <DatabaseZap className="h-5 w-5 mb-4" strokeWidth={1.5} />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <ArchiveRestore className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">Stale lead recovery and reactivation</h2>
              <p className="text-muted-foreground leading-relaxed">
                We sort old leads into practical recovery segments, so your team knows who deserves attention now and
                who belongs in longer nurture. Most databases are holding deals that only need the right touch at the
                right time.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <Tags className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">What a Follow Up Boss cleanup includes</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Follow Up Boss cleanup is not cosmetic. We fix the duplicates, tags, stages, and smart lists that
                pull your team in different directions, so every agent works from one clear list of what matters today.
              </p>
            </div>
            <div className="lg:col-span-3 rounded-2xl border border-border/40 bg-background p-6">
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
                Real estate CRM cleanup, not cosmetic tidying
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A real estate CRM cleanup fixes the duplicates, stale stages, and broken smart lists that make Follow Up
                Boss impossible to trust as one source of truth. When the data is clean, speed to lead, follow-up, and
                accountability all get easier.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <UsersRound className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">Independent guidance</h2>
              <p className="text-muted-foreground leading-relaxed">
                HotlistAI is not affiliated with, sponsored by, or endorsed by Follow Up Boss. We help teams make their
                current CRM easier to trust and execute from.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-4xl mx-auto rounded-2xl border border-border/40 bg-background p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed">
              See what a cleanup surfaces in our{" "}
              <Link href="/sample-leak-report" className="text-foreground underline underline-offset-4">
                Sample Leak Report
              </Link>
              , or start with a{" "}
              <Link href="/follow-up-leak-audit" className="text-foreground underline underline-offset-4">
                Follow-Up Leak Audit
              </Link>
              . If your automations look fine but still miss, start with a{" "}
              <Link href="/follow-up-boss-automation-audit" className="text-foreground underline underline-offset-4">
                Follow Up Boss Automation Audit
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
