import type { Metadata } from "next"
import { CheckCircle2, Eye, Shield } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Governance",
  description:
    "How HotlistAI keeps real-estate follow-up systems human-aware, consent-sensitive, visible, and accountable.",
  alternates: { canonical: "/governance" },
}

const principles = [
  "Automation handles busy work. Humans keep the relationship.",
  "Every lead should have a visible owner, stage, and next action.",
  "Follow-up systems should respect opt-outs, source context, and message quality.",
  "Team leads need visibility before opportunities go cold.",
]

export default function GovernancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          <header className="space-y-5 text-center">
            <Shield className="h-10 w-10 mx-auto text-muted-foreground" strokeWidth={1.5} />
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Governance</p>
            <h1 className="text-5xl md:text-6xl font-serif tracking-tight">Human-aware follow-up systems.</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The goal is not to blast a database or remove the agent. The goal is to make the CRM clearer, safer, and
              easier to execute from.
            </p>
          </header>
          <section className="grid md:grid-cols-2 gap-4">
            {principles.map((principle) => (
              <div key={principle} className="rounded-2xl border border-border/40 bg-muted/20 p-6">
                <CheckCircle2 className="h-5 w-5 mb-4" strokeWidth={1.5} />
                <p className="text-muted-foreground leading-relaxed">{principle}</p>
              </div>
            ))}
          </section>
          <section className="rounded-3xl border border-border/40 bg-muted/20 p-8 md:p-10">
            <Eye className="h-8 w-8 mb-6 text-muted-foreground" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-5">Visibility is the control layer.</h2>
            <p className="text-muted-foreground leading-relaxed">
              HotlistAI's audit looks for the moments where leads lose ownership, tasks go overdue, stale opportunities
              disappear, or automation keeps running without a useful human handoff. The repair plan keeps the system
              practical, observable, and accountable.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
