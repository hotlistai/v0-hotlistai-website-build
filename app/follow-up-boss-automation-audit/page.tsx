import type { Metadata } from "next"
import Link from "next/link"
import { BotOff, ListChecks, Route, ShieldCheck } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Follow Up Boss Automation Audit",
  description:
    "Audit Follow Up Boss action plans, smart lists, routing rules, and follow-up gaps that are not working the way your real-estate team thinks they are.",
  alternates: { canonical: "/follow-up-boss-automation-audit" },
  openGraph: {
    title: "Follow Up Boss Audit | HotlistAI",
    description:
      "Audit Follow Up Boss action plans, smart lists, routing rules, and follow-up gaps that are not working the way your real-estate team thinks they are.",
    url: "https://hotlistai.com/follow-up-boss-automation-audit",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "HotlistAI follow-up leak audit" }],
  },
  twitter: {
    title: "Follow Up Boss Audit | HotlistAI",
    description:
      "Audit Follow Up Boss action plans, smart lists, routing rules, and follow-up gaps that are not working the way your real-estate team thinks they are.",
    images: ["/twitter-image"],
  },
}

const inspectItems = [
  "action plans and nurture cadence",
  "smart lists and saved views",
  "lead source routing and ownership",
  "task creation and overdue work",
  "agent adoption and accountability",
  "handoff points where humans should take over",
]

const faqItems = [
  {
    question: "Is this affiliated with Follow Up Boss?",
    answer:
      "No. HotlistAI is independent and is not affiliated with, sponsored by, or endorsed by Follow Up Boss. We audit the workflow your team already runs.",
  },
  {
    question: "What does the audit cost?",
    answer:
      "The Follow-Up Leak Audit is free. You get a clear read on where your follow-up is leaking, with no obligation to work with us afterward.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most audits are turned around within a few business days, depending on the size of your database and how your Follow Up Boss account is set up.",
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
              Follow Up Boss Automation Audit
            </p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.95] max-w-4xl mb-8">
              Follow Up Boss Audit
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Find the automations your team thinks are working.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
              A Follow Up Boss audit checks the action plans, smart lists, routing rules, and follow-up tasks that look
              fine but quietly stop firing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
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
              <h2 className="text-3xl font-serif mb-4">What a Follow Up Boss audit finds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Plans exist, but the team does not always know when they trigger, who owns the next action, or which
                leads have fallen out of cadence. A Follow Up Boss audit makes those gaps visible before they cost you
                deals.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-muted/20 p-6">
              <Route className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-4">What you get from the audit</h2>
              <p className="text-muted-foreground leading-relaxed">
                You get a Follow-Up Leak Scorecard, a CRM Execution Report with a 30-Day Fix Plan, and a prioritized
                install map. See a redacted example in our{" "}
                <Link href="/sample-leak-report" className="text-foreground underline underline-offset-4">
                  Sample Leak Report
                </Link>
                .
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

        <section className="py-20 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-4xl mx-auto rounded-2xl border border-border/40 bg-background p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed">
              If the audit finds messy data underneath, the next step is a{" "}
              <Link href="/follow-up-boss-cleanup" className="text-foreground underline underline-offset-4">
                Follow Up Boss Cleanup
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-10">Follow Up Boss audit FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-border/40 bg-muted/20 p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
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
