import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Database } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { ExecutionReportIcon, InstallPrioritiesIcon, LeakScorecardIcon } from "@/components/hotlist-icons"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Lead Follow-Up Audit",
  description:
    "Find where your real estate team is losing warm leads — and get a clear 30-day plan to fix it. Works with the CRM you already use.",
  alternates: { canonical: "/follow-up-leak-audit" },
}

const auditReviews = [
  "Where leads come from and how fast your team should respond",
  "How contacts are organized and what agents see each morning",
  "Who is responsible when a new lead arrives",
  "What is sitting untouched with no next step",
  "Who in your database still deserves attention",
  "Whether you can see problems before deals go cold",
]

const outputs = [
  {
    icon: LeakScorecardIcon,
    title: "Follow-Up Scorecard",
    description:
      "A plain-language score showing where your current system is losing opportunity — no jargon required to understand it.",
  },
  {
    icon: ExecutionReportIcon,
    title: "30-Day Fix Plan",
    description:
      "Prioritized steps ordered by impact and ease. What to fix this week, what can wait, and what needs a human vs. automation.",
  },
  {
    icon: InstallPrioritiesIcon,
    title: "Implementation roadmap",
    description:
      "If the gaps are worth fixing, we show exactly what HotlistAI would set up first — and what ongoing Tech Concierge support would look like.",
  },
]

const faqItems = [
  {
    question: "Is this another CRM?",
    answer: "No. We make the one you have easier to run.",
  },
  {
    question: "How long does it take?",
    answer: "Most audits are ready within a few business days.",
  },
  {
    question: "What does it cost?",
    answer:
      "The audit is free. Implementation and ongoing Tech Concierge support are scoped after we see your system.",
  },
  {
    question: "Is this only for Follow Up Boss?",
    answer: "No — but we know Follow Up Boss deeply. The audit works with any CRM your team actively uses.",
  },
]

export default function FollowUpLeakAuditPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        <section className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
            <div>
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">
                Lead Follow-Up Audit
              </p>
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.95] max-w-4xl mb-8">
                Find out where warm leads are slipping — before you buy more.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
                We review how your team actually follows up today: who responds, who owns each lead, what gets
                forgotten, and what old contacts are still worth saving. You leave with a clear scorecard and a
                practical fix plan — not another software pitch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CalBookingButton size="lg">Book Your Lead Follow-Up Audit</CalBookingButton>
                <Link
                  href="/sample-leak-report"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 px-10 py-5 text-lg font-medium hover:border-foreground/40 transition-colors"
                >
                  See a Sample Audit Report <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/40 bg-foreground shadow-2xl shadow-foreground/10">
              <Image
                src="/visuals/follow-up-leak-audit-scorecard.png"
                alt="Sample Follow-Up Scorecard from a Lead Follow-Up Audit"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <div>
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">What We Review</p>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight">The places follow-up usually breaks.</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {auditReviews.map((item) => (
                <div key={item} className="rounded-xl border border-border/40 bg-background p-5">
                  <CheckCircle2 className="h-5 w-5 mb-4" strokeWidth={1.5} />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">What You Receive</p>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">What you walk away with.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Everything is written in plain language so your whole team — not just the tech person — can understand
                where follow-up is breaking and what to do about it.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {outputs.map((item) => (
                <div key={item.title} className="rounded-xl border border-border/40 bg-muted/20 p-6">
                  <item.icon className="h-7 w-7 mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-4xl mx-auto rounded-3xl border border-border/40 bg-background p-8 md:p-12 text-center">
            <Database className="h-8 w-8 mx-auto mb-6 text-muted-foreground" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">Bring the CRM you already have.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Follow Up Boss is where many teams start, but the audit is not about the software — it is about three
              questions: who needs attention right now, what should happen next, and which opportunities are being
              missed?
            </p>
            <CalBookingButton size="lg">Book Your Lead Follow-Up Audit</CalBookingButton>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 md:p-8">
              <h2 className="text-3xl font-serif tracking-tight mb-5">If the gaps are small</h2>
              <p className="text-muted-foreground leading-relaxed">
                You get a clear plan and can run it yourself. No pressure to hire us for anything more.
              </p>
            </div>
            <div className="rounded-2xl border border-foreground/20 bg-foreground text-background p-6 md:p-8">
              <h2 className="text-3xl font-serif tracking-tight mb-5">If the gaps are costing you deals</h2>
              <p className="text-background/80 leading-relaxed mb-6">
                We fix the system, install the simple processes, and stay on monthly as your Tech Concierge — so
                follow-up keeps working without you managing the tech.
              </p>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-sm font-medium text-background hover:text-background/80 transition-colors"
              >
                See how Tech Concierge works <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-10">Common questions</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-border/40 bg-muted/20 p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <CalBookingButton size="lg">Book Your Lead Follow-Up Audit</CalBookingButton>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}