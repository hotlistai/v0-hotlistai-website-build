import type { Metadata } from "next"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions about Hotlist's Lead Follow-Up Audit, Tech Concierge support, sample audit report, and follow-up implementation for real estate teams.",
  alternates: { canonical: "/faq" },
}

const faqs = [
  {
    question: "What does Hotlist do?",
    answer:
      "Hotlist is the Agent Tech Concierge for real estate teams. We audit your follow-up, fix what is broken inside the CRM you already use, and manage it ongoing so warm leads stop slipping away.",
  },
  {
    question: "What is a Lead Follow-Up Audit?",
    answer:
      "A free diagnostic that reviews how leads enter your system, who owns them, what follow-up actually happens, and where opportunities are being missed. You leave with a Follow-Up Scorecard and 30-Day Fix Plan.",
  },
  {
    question: "What do we get from the audit?",
    answer:
      "A Follow-Up Scorecard, a prioritized 30-Day Fix Plan, and an implementation roadmap if the gaps are worth fixing. A sample report is available so you know exactly what to expect before you book.",
  },
  {
    question: "What is a Tech Concierge?",
    answer:
      "Your Tech Concierge is the person who keeps your follow-up system working — fixing what breaks, updating reminders and lists, and handling the tech so you can focus on closings.",
  },
  {
    question: "Is Hotlist another CRM?",
    answer:
      "No. We make the CRM you already have easier to run. No rip-and-replace required.",
  },
  {
    question: "Do I need to be technical to work with Hotlist?",
    answer:
      "No. Everything is explained in plain language. If you can describe where follow-up feels weakest, we can help.",
  },
  {
    question: "Who is this best for?",
    answer:
      "5–25 agent residential teams or boutique brokerages with active lead flow, an existing CRM, and old opportunities sitting untouched.",
  },
  {
    question: "Is this only for Follow Up Boss?",
    answer:
      "No — but we know Follow Up Boss deeply. The audit works with any CRM your team actively uses.",
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
            <h1 className="text-5xl md:text-6xl font-serif tracking-tight">Follow-up questions, answered plainly.</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Practical answers for real estate teams deciding whether to fix follow-up before buying more leads or
              software.
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
              Ready to see where follow-up is breaking?
            </h2>
            <p className="text-background/75 mb-8">
              The Lead Follow-Up Audit is free. Tell us your bottleneck and we will show you what to fix first.
            </p>
            <CalBookingButton size="lg" className="bg-background text-foreground hover:bg-background/90">
              Book Your Lead Follow-Up Audit
            </CalBookingButton>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}