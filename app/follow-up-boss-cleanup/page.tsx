import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArchiveRestore, DatabaseZap, Tags, UsersRound } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Follow Up Boss Cleanup for Real Estate Teams",
  description:
    "Clean up Follow Up Boss duplicates, tags, stages, daily lists, and old contacts — so your team can trust one clear list of who needs attention today.",
  alternates: { canonical: "/follow-up-boss-cleanup" },
  openGraph: {
    title: "Follow Up Boss Cleanup for Real Estate Teams | Hotlist",
    description:
      "Real CRM cleanup for Follow Up Boss teams — not cosmetic tidying. Fix the data so follow-up actually works.",
    url: "https://www.hotlistengine.com/follow-up-boss-cleanup",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hotlist Lead Follow-Up Audit" }],
  },
  twitter: {
    title: "Follow Up Boss Cleanup for Real Estate Teams | Hotlist",
    description:
      "Real CRM cleanup for Follow Up Boss teams — not cosmetic tidying. Fix the data so follow-up actually works.",
    images: ["/twitter-image"],
  },
}

const priorities = [
  "Duplicate and confusing contact records",
  "Tags and stages that no longer match how your team sells",
  "Old contacts worth re-engaging vs. true dead records",
  "Knowing which lead source each contact came from",
  "Overdue follow-up and leads with no clear owner",
  "Daily lists that show what matters today — not everything at once",
]

export default function FollowUpBossCleanupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        <section className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">
              Follow Up Boss · Cleanup
            </p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.95] max-w-4xl mb-8">
              Clean up Follow Up Boss so your team can trust it again.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Duplicates, messy tags, confusing stages, and overdue follow-up decide whether agents work from one trusted
              list — or guess from memory. Cleanup is often the first step after a{" "}
              <Link href="/follow-up-leak-audit" className="text-foreground underline underline-offset-4">
                Lead Follow-Up Audit
              </Link>
              .
            </p>
            <CalBookingButton size="lg">Book Your Lead Follow-Up Audit</CalBookingButton>
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
              <h2 className="text-3xl font-serif mb-4">Re-engaging old contacts</h2>
              <p className="text-muted-foreground leading-relaxed">
                We sort old leads into practical groups — who deserves a call today, who belongs in longer nurture, and who
                should be archived. Most databases are holding deals that only need the right touch at the right time.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <Tags className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">What cleanup includes</h2>
              <p className="text-muted-foreground leading-relaxed">
                This is not cosmetic tidying. We fix the duplicates, tags, stages, and lists that pull your team in
                different directions — so every agent works from one clear picture of what matters today.
              </p>
            </div>
            <div className="lg:col-span-3 rounded-2xl border border-border/40 bg-background p-6">
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
                Real cleanup, not a quick tidy-up
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When the data is clean, fast response, consistent follow-up, and clear ownership all get easier. Your team
                stops fighting the CRM and starts working it.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <UsersRound className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">Independent guidance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hotlist is not affiliated with, sponsored by, or endorsed by Follow Up Boss. We help teams make their
                current CRM easier to trust and use every day.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-2xl border border-border/40 bg-muted/20 p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              See what cleanup surfaces in our{" "}
              <Link href="/sample-leak-report" className="text-foreground underline underline-offset-4">
                Sample Audit Report
              </Link>
              , or start with a{" "}
              <Link href="/follow-up-leak-audit" className="text-foreground underline underline-offset-4">
                Lead Follow-Up Audit
              </Link>
              . If automations look fine but still miss, try the{" "}
              <Link href="/follow-up-boss-automation-audit" className="text-foreground underline underline-offset-4">
                Follow Up Boss Automation Audit
              </Link>
              .
            </p>
            <CalBookingButton size="lg">Book Your Lead Follow-Up Audit</CalBookingButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}