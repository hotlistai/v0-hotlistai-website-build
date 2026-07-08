import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, ClipboardList, FileText, Gauge, TimerReset } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Sample Audit Report",
  description:
    "Preview the Follow-Up Scorecard and 30-Day Fix Plan from a Lead Follow-Up Audit — before you decide on implementation or Tech Concierge support.",
  alternates: { canonical: "/sample-leak-report" },
}

const reportSections = [
  "Overall follow-up score",
  "Missed conversations or deals at risk",
  "Where leads stop moving forward",
  "Response time by lead source",
  "Actual touches vs. what was planned",
  "Old contacts worth re-engaging",
  "Redacted screenshots showing what is broken",
  "Top five quick wins",
  "30-day fix plan",
]

const quickWins = [
  "One clear place for every new internet lead.",
  "Assign overdue follow-up before contacts go cold.",
  "Separate dead leads from people worth calling today.",
  "Escalate unworked hot leads before day two.",
  "Give team leads weekly visibility, not quarterly surprises.",
]

export default function SampleLeakReportPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        <section className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div>
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">Sample Audit Report</p>
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.95] mb-8 max-w-4xl">
                See what the audit actually gives you.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
                A plain-language report that shows where follow-up is breaking — who is slipping, what is overdue, and
                what to fix first. This is what you receive before deciding on implementation or Tech Concierge support.
              </p>
              <CalBookingButton size="lg">Book Your Lead Follow-Up Audit</CalBookingButton>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-border/40 bg-muted/20 shadow-2xl shadow-foreground/10">
              <Image
                src="/visuals/sample-leak-report-document-stack.png"
                alt="Sample Follow-Up Scorecard and 30-Day Fix Plan"
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
              <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">Follow-Up Scorecard</p>
              <div className="text-7xl font-serif tracking-tight mb-4">62</div>
              <p className="text-muted-foreground leading-relaxed">
                Example score only. The goal is to show where follow-up is breaking — not invent fake ROI claims.
              </p>
            </div>
            <div className="rounded-3xl border border-border/40 bg-background p-8">
              <FileText className="h-8 w-8 mb-8 text-muted-foreground" strokeWidth={1.5} />
              <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">30-Day Fix Plan</p>
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
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-8">Small repairs before a big rebuild.</h2>
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
                If the gaps are costing you deals, HotlistAI fixes the system, installs simple processes, and stays on
                monthly as your Tech Concierge — so follow-up keeps working without you managing the tech.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CalBookingButton size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Book Your Lead Follow-Up Audit
                </CalBookingButton>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-6 py-4 text-sm font-medium text-background hover:bg-background hover:text-foreground transition-colors"
                >
                  How Tech Concierge works <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <BarChart3 className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">Redacted system callouts</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use screenshots or mock examples to show broken tasks, missing owners, and automations not firing —
                without exposing private client data.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <ClipboardList className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">Prioritized repair list</h2>
              <p className="text-muted-foreground leading-relaxed">
                Each recommendation is ordered by urgency and likely impact — so you know what to fix this week vs. what
                can wait.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}