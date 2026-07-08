import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Eye, Shield } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Our Standards",
  description:
    "How Hotlist keeps real-estate follow-up respectful, human-aware, and visible — without blasting databases or removing agents from the relationship.",
  alternates: { canonical: "/governance" },
}

const principles = [
  "Automation handles busy work. Humans keep the relationship.",
  "Every lead should have a clear owner and a visible next step.",
  "We respect opt-outs, lead source context, and message quality.",
  "Team leads see problems before deals go cold — not after.",
  "We never blast your whole database. Recovery is targeted and thoughtful.",
  "If agents cannot run it daily, the system does not count.",
]

export default function GovernancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          <header className="space-y-5 text-center">
            <Shield className="h-10 w-10 mx-auto text-muted-foreground" strokeWidth={1.5} />
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Our Standards</p>
            <h1 className="text-5xl md:text-6xl font-serif tracking-tight">Follow-up that stays human.</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The goal is not to blast a database or replace your agents. The goal is to make follow-up clearer, more
              respectful, and easier for real people to run every day.
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
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-5">Visibility keeps everyone honest.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our Lead Follow-Up Audit looks for the moments where leads lose an owner, tasks go overdue, old contacts
              disappear, or automation keeps running without a useful handoff to a real person. The fix plan keeps the
              system practical and accountable — not overwhelming.
            </p>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
            >
              See how your Tech Concierge works <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
          <section className="rounded-3xl border border-foreground/20 bg-foreground text-background p-8 md:p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">See how we work in practice.</h2>
            <p className="text-background/75 mb-8 max-w-xl mx-auto">
              Start with a free Lead Follow-Up Audit. We will show you where follow-up is breaking — in plain language.
            </p>
            <CalBookingButton size="lg" className="bg-background text-foreground hover:bg-background/90">
              Book Your Lead Follow-Up Audit
            </CalBookingButton>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}