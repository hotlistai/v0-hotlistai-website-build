import type { Metadata } from "next"
import { BotOff, ListChecks, Route, ShieldCheck } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Follow Up Boss Automation Audit",
  description:
    "Audit Follow Up Boss action plans, smart lists, routing rules, and follow-up gaps that are not working the way your real-estate team thinks they are.",
  alternates: { canonical: "/follow-up-boss-automation-audit" },
}

const inspectItems = [
  "action plans and nurture cadence",
  "smart lists and saved views",
  "lead source routing and ownership",
  "task creation and overdue work",
  "agent adoption and accountability",
  "handoff points where humans should take over",
]

export default function FollowUpBossAutomationAuditPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        <section className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">
              Follow Up Boss Automation Audit
            </p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.95] max-w-4xl mb-8">
              Find the automations your team thinks are working.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Find the automations, action plans, smart lists, routing rules, and follow-up gaps that are not working the
              way your team thinks they are.
            </p>
            <CalBookingButton size="lg">Book a Follow-Up Leak Audit</CalBookingButton>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">What We Inspect</p>
            <div className="grid md:grid-cols-3 gap-4">
              {inspectItems.map((item) => (
                <div key={item} className="rounded-xl border border-border/40 bg-background p-5">
                  <ListChecks className="h-5 w-5 mb-4" strokeWidth={1.5} />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <BotOff className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">What breaks most often</h2>
              <p className="text-muted-foreground leading-relaxed">
                Plans exist, but the team does not know when they trigger, who owns the next action, or which leads have
                fallen out of cadence.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <Route className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">What you get</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Follow-Up Leak Scorecard, CRM Execution Report + 30-Day Fix Plan, and prioritized install map.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <ShieldCheck className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">Independent review</h2>
              <p className="text-muted-foreground leading-relaxed">
                HotlistAI is not affiliated with, sponsored by, or endorsed by Follow Up Boss. We audit the workflow your
                team already operates.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
