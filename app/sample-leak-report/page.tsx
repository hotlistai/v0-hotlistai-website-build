import type { Metadata } from "next"
import Image from "next/image"
import { BarChart3, ClipboardList, FileText, Gauge, TimerReset } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Sample Leak Report",
  description:
    "Preview the Follow-Up Leak Scorecard, CRM Execution Report, and 30-Day Fix Plan HotlistAI gives real-estate teams after an audit.",
  alternates: { canonical: "/sample-leak-report" },
}

const reportSections = [
  "Headline leak score",
  "Missed conversations or opportunity-at-risk estimate",
  "Funnel drop-off by stage",
  "Speed-to-lead by source and agent/team",
  "Actual touches versus intended cadence",
  "Stale-lead opportunity segments",
  "CRM screenshot or redacted mock callouts",
  "Top five quick wins",
  "30-day fix plan",
]

const quickWins = [
  "Create one source of truth for every new internet lead.",
  "Assign overdue follow-up before stale nurture begins.",
  "Separate dead leads from revive-now conversations.",
  "Escalate unworked hot leads before day two.",
  "Make team lead visibility weekly, not quarterly.",
]

export default function SampleLeakReportPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        <section className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div>
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">Sample Leak Report</p>
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.95] mb-8 max-w-4xl">
                See what the audit actually gives you.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
                The report is designed to make Response, routing, nurture, stale-lead recovery, and accountability visible
                enough to fix.
              </p>
              <CalBookingButton size="lg">Book a Follow-Up Leak Audit</CalBookingButton>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-border/40 bg-muted/20 shadow-2xl shadow-foreground/10">
              <Image
                src="/visuals/sample-leak-report-document-stack.png"
                alt="Abstract CRM Execution Report document stack"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
            <div className="rounded-3xl border border-border/40 bg-background p-8">
              <Gauge className="h-8 w-8 mb-8 text-muted-foreground" strokeWidth={1.5} />
              <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Follow-Up Leak Scorecard
              </p>
              <div className="text-7xl font-serif tracking-tight mb-4">62</div>
              <p className="text-muted-foreground leading-relaxed">
                Example score only. The goal is to show where the leak is coming from, not invent fake ROI claims.
              </p>
            </div>
            <div className="rounded-3xl border border-border/40 bg-background p-8">
              <FileText className="h-8 w-8 mb-8 text-muted-foreground" strokeWidth={1.5} />
              <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
                CRM Execution Report + 30-Day Fix Plan
              </p>
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-5">What the report shows</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {reportSections.map((section) => (
                  <div key={section} className="rounded-xl border border-border/40 bg-muted/20 p-4 text-sm">
                    {section}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">Top Five Quick Wins</p>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-8">
                Small repairs before a big rebuild.
              </h2>
              <div className="space-y-3">
                {quickWins.map((win, index) => (
                  <div key={win} className="flex gap-4 rounded-xl border border-border/40 bg-muted/20 p-4">
                    <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                    <p className="text-muted-foreground">{win}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-foreground/20 bg-foreground p-8 text-background">
              <TimerReset className="h-8 w-8 mb-8 text-background/70" strokeWidth={1.5} />
              <h3 className="text-3xl md:text-4xl font-serif tracking-tight mb-5">What happens after the audit</h3>
              <p className="text-background/75 leading-relaxed mb-8">
                If the leak is worth fixing, HotlistAI turns the report into an implementation plan for routing,
                reminders, stale-lead recovery, smart lists, team visibility, and human handoff moments.
              </p>
              <CalBookingButton size="lg" className="bg-background text-foreground hover:bg-background/90">
                Book a Follow-Up Leak Audit
              </CalBookingButton>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <BarChart3 className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">Redacted CRM callouts</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use screenshots or mock callouts to show broken tasks, missing owners, stale statuses, and automations
                not firing, without exposing private client data.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <ClipboardList className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">Prioritized repair list</h2>
              <p className="text-muted-foreground leading-relaxed">
                Each recommendation is ordered by urgency, likely impact, and whether the fix belongs to automation,
                agent behavior, or team lead accountability.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
