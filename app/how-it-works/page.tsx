import Link from "next/link"
import { ArrowRight, ClipboardList, Headphones, Wrench } from "lucide-react"
import type { Metadata } from "next"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "How Your Tech Concierge Works",
  description:
    "Audit your follow-up, fix what is broken, and stay supported monthly. HotlistAI's three-step Agent Tech Concierge path for real estate teams.",
  path: "/how-it-works",
  keywords: [
    "agent tech concierge",
    "lead follow-up audit",
    "real estate CRM support",
    "follow-up system implementation",
  ],
})

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Lead Follow-Up Audit",
    summary: "We find where warm leads are slipping before you spend more on software or lead spend.",
    details: [
      "Review how leads enter your system and who owns them",
      "Check what follow-up actually happens vs. what you think happens",
      "Identify old contacts worth re-engaging",
      "Deliver a Follow-Up Scorecard and 30-Day Fix Plan",
    ],
    timeline: "A few business days",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Fix & Install",
    summary: "If the gaps are costing you deals, we set up the simple system your team can actually run.",
    details: [
      "Set up reminders, daily work lists, and clear ownership rules",
      "Fix broken automations and overdue follow-up habits",
      "Sort old contacts into practical recovery segments",
      "Train the team on what to do each day — without CRM jargon",
    ],
    timeline: "Scoped after the audit",
  },
  {
    number: "03",
    icon: Headphones,
    title: "Tech Concierge",
    summary: "We stay with you monthly so follow-up keeps working without you managing the tech.",
    details: [
      "Tune systems as your team and lead flow change",
      "Fix what breaks before it costs you a deal",
      "Update lists, reminders, and processes as needed",
      "Be the person your team calls when the CRM feels overwhelming",
    ],
    timeline: "Ongoing monthly support",
  },
]

const differences = [
  {
    title: "Not another CRM",
    description: "We work inside the system you already pay for. No rip-and-replace required.",
  },
  {
    title: "Not a one-time project",
    description: "Systems drift. Your Tech Concierge keeps follow-up running after the initial fix.",
  },
  {
    title: "Not built for tech people",
    description: "Plain language, practical steps, and support your whole team can understand.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        <section className="py-20 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">How It Works</p>
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">How Your Tech Concierge Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Audit your follow-up, fix what is broken, and stay supported monthly. Three steps. One trusted partner.
            </p>
          </div>
        </section>

        <section className="py-24 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-5xl mx-auto space-y-16">
            {steps.map((step) => (
              <div key={step.title} className="grid lg:grid-cols-[0.35fr_0.65fr] gap-8 items-start">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-foreground text-background flex items-center justify-center rounded-xl flex-shrink-0 text-xl font-serif">
                    {step.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5" strokeWidth={1.5} />
                      <h2 className="text-2xl md:text-3xl font-serif tracking-tight">{step.title}</h2>
                    </div>
                    <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">{step.timeline}</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 md:p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{step.summary}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="text-muted-foreground leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">What makes this different</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                You get a partner who understands both real estate follow-up and the tech behind it.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {differences.map((item) => (
                <div key={item.title} className="rounded-xl border border-border/40 bg-background p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">Start with the audit.</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              The Lead Follow-Up Audit is free. You will see exactly where follow-up is breaking before deciding on
              implementation or Tech Concierge support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <CalBookingButton size="lg">Book Your Lead Follow-Up Audit</CalBookingButton>
              <Link
                href="/sample-leak-report"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 px-8 py-4 text-sm font-medium hover:border-foreground/40 transition-colors"
              >
                See a Sample Audit Report <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}