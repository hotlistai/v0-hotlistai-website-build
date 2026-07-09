import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BotOff, ListChecks, Route, ShieldCheck } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Follow Up Boss Automation Audit",
  description:
    "Find the Follow Up Boss automations your team thinks are working — action plans, daily lists, routing, and reminders that quietly stopped firing.",
  alternates: { canonical: "/follow-up-boss-automation-audit" },
  openGraph: {
    title: "Follow Up Boss Automation Audit | Hotlist",
    description:
      "A specialized Lead Follow-Up Audit for Follow Up Boss teams. Find broken automations before they cost you deals.",
    url: "https://www.hotlistengine.com/follow-up-boss-automation-audit",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hotlist Lead Follow-Up Audit" }],
  },
  twitter: {
    title: "Follow Up Boss Automation Audit | Hotlist",
    description:
      "A specialized Lead Follow-Up Audit for Follow Up Boss teams. Find broken automations before they cost you deals.",
    images: ["/twitter-image"],
  },
}

const inspectItems = [
  "Stay-in-touch plans and follow-up schedules",
  "Daily work lists and saved views agents actually use",
  "Who gets assigned new leads and who owns the next step",
  "Tasks piling up with no one completing them",
  "Whether agents are actually using the system",
  "When a real person should step in instead of automation",
]

const faqItems = [
  {
    question: "Is this affiliated with Follow Up Boss?",
    answer:
      "No. Hotlist is independent and is not affiliated with, sponsored by, or endorsed by Follow Up Boss. We review the workflow your team already runs.",
  },
  {
    question: "Is this different from the Lead Follow-Up Audit?",
    answer:
      "It is a specialized version focused on Follow Up Boss automations. You still get the same Follow-Up Scorecard and 30-Day Fix Plan.",
  },
  {
    question: "What does the audit cost?",
    answer:
      "The Lead Follow-Up Audit is free. You get a clear read on what is broken, with no obligation to work with us afterward.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most audits are ready within a few business days, depending on your database size and how your Follow Up Boss account is set up.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function FollowUpBossAutomationAuditPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        <section className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">
              Follow Up Boss · Specialized Audit
            </p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.95] max-w-4xl mb-8">
              Find the automations your team thinks are working.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              A Follow Up Boss automation audit checks the action plans, daily lists, routing rules, and reminders that
              look fine on paper but quietly stop doing their job. It is part of our{" "}
              <Link href="/follow-up-leak-audit" className="text-foreground underline underline-offset-4">
                Lead Follow-Up Audit
              </Link>{" "}
              — focused on the tools your team already uses.
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
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">What We Review</p>
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
              <h2 className="text-3xl font-serif mb-4">What this audit finds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Plans exist, but the team does not always know when they fire, who owns the next step, or which leads have
                fallen off track. We make those gaps visible before they cost you deals.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <Route className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">What you receive</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Follow-Up Scorecard, a 30-Day Fix Plan, and a clear roadmap for implementation or ongoing Tech Concierge
                support. See a redacted example in our{" "}
                <Link href="/sample-leak-report" className="text-foreground underline underline-offset-4">
                  Sample Audit Report
                </Link>
                .
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <ShieldCheck className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">Independent review</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hotlist is not affiliated with, sponsored by, or endorsed by Follow Up Boss. We help your team trust
                and actually use the system they already pay for.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-4xl mx-auto rounded-2xl border border-border/40 bg-background p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed">
              If the audit finds messy data underneath, the next step may be a{" "}
              <Link href="/follow-up-boss-cleanup" className="text-foreground underline underline-offset-4">
                Follow Up Boss Cleanup
              </Link>
              . If automations look fine but leads still slip, start with the{" "}
              <Link href="/follow-up-leak-audit" className="text-foreground underline underline-offset-4">
                full Lead Follow-Up Audit
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-10">Common questions</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-border/40 bg-muted/20 p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.question}</h3>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <SiteFooter />
    </div>
  )
}