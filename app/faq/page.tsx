import type { Metadata } from "next"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions about HotlistAI's Follow-Up Leak Audit, sample report, CRM Execution Report, and real-estate follow-up implementation process.",
  alternates: { canonical: "/faq" },
}

const faqs = [
  {
    question: "What does HotlistAI do?",
    answer:
      "HotlistAI finds and fixes follow-up leaks inside the real-estate CRM your team already uses. We focus on response, routing, nurture, stale-lead recovery, and accountability.",
  },
  {
    question: "What is a Follow-Up Leak Audit?",
    answer:
      "It is a diagnostic that reviews how leads enter your CRM, who owns them, what follow-up happens, where stale opportunities sit, and which repairs should happen first.",
  },
  {
    question: "What do we get from the audit?",
    answer:
      "You receive a Follow-Up Leak Scorecard, a CRM Execution Report, and a 30-Day Fix Plan. A sample report is available so the deliverable is clear before you book.",
  },
  {
    question: "Is HotlistAI another CRM?",
    answer:
      "No. The point is to make your current CRM easier to execute from before you buy another tool or more leads.",
  },
  {
    question: "Who is this best for?",
    answer:
      "The first fit is a 5-25 agent residential team or 1-3 office boutique brokerage with active lead flow, an existing CRM, and old opportunities sitting underworked.",
  },
  {
    question: "Is this only for Follow Up Boss?",
    answer:
      "Follow Up Boss is the first beachhead because many teams use it and need cleanup or automation audits. The broader system can apply to other established real-estate CRMs.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="space-y-5">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">FAQ</p>
            <h1 className="text-5xl md:text-6xl font-serif tracking-tight">Follow-up leak questions, answered.</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Practical answers for real-estate teams deciding whether to repair follow-up before buying more leads.
            </p>
          </header>
          <section className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-border/40 bg-muted/20 p-6">
                <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </section>
          <div className="rounded-3xl border border-border/40 bg-foreground text-background p-8 md:p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">
              Want to see where your CRM is leaking?
            </h2>
            <p className="text-background/75 mb-8">
              Bring the current bottleneck. We will help you turn it into a practical audit.
            </p>
            <CalBookingButton size="lg" className="bg-background text-foreground hover:bg-background/90">
              Book a Follow-Up Leak Audit
            </CalBookingButton>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
