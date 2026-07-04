import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Database } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { ExecutionReportIcon, InstallPrioritiesIcon, LeakScorecardIcon } from "@/components/hotlist-icons"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Follow-Up Leak Audit",
  description:
    "Book a Follow-Up Leak Audit for your real-estate team. HotlistAI finds where response, routing, nurture, stale-lead recovery, and accountability break inside your current CRM.",
  alternates: { canonical: "/follow-up-leak-audit" },
}

const auditReviews = [
  "lead sources and speed-to-lead expectations",
  "CRM stages, tags, lists, smart lists, and saved views",
  "new lead routing and agent ownership",
  "task completion, overdue activity, and dead zones",
  "stale database segments and recovery opportunities",
  "team lead visibility and accountability checkpoints",
]

const outputs = [
  {
    icon: LeakScorecardIcon,
    title: "Follow-Up Leak Scorecard",
    description: "A plain-language score showing where the current CRM workflow is leaking opportunity.",
  },
  {
    icon: ExecutionReportIcon,
    title: "CRM Execution Report + 30-Day Fix Plan",
    description: "The practical next steps, ordered by impact, complexity, and speed to recovery.",
  },
  {
    icon: InstallPrioritiesIcon,
    title: "Install priorities",
    description: "What HotlistAI would fix first if the leak is worth turning into an implementation.",
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
                Follow-Up Leak Audit
              </p>
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.95] max-w-4xl mb-8">
                Find where warm leads are leaking before you buy more.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
                We find where response, routing, nurture, stale-lead recovery, and agent accountability break inside your
                current CRM, then show the first fixes that would make the system actually execute.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CalBookingButton size="lg">Book a Follow-Up Leak Audit</CalBookingButton>
                <Link
                  href="/sample-leak-report"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 px-10 py-5 text-lg font-medium hover:border-foreground/40 transition-colors"
                >
                  See a Sample Leak Report <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/40 bg-foreground shadow-2xl shadow-foreground/10">
              <Image
                src="/visuals/follow-up-leak-audit-scorecard.png"
                alt="Abstract Follow-Up Leak Scorecard report"
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
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">Audit Reviews</p>
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
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">Deliverable</p>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
                You leave with a Follow-Up Leak Scorecard.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The scorecard anchors a CRM Execution Report + 30-Day Fix Plan showing where the current process is
                breaking, where lead spend is leaking, and what HotlistAI would install first to make the CRM act like a
                working sales system.
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

        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl border border-border/40 bg-muted/20 p-8 md:p-12 text-center">
            <Database className="h-8 w-8 mx-auto mb-6 text-muted-foreground" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
              Bring the CRM you already have.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Follow Up Boss is the first beachhead, but the audit is built around the real operating question: who
              needs attention, what should be said next, and which opportunities are being missed.
            </p>
            <CalBookingButton size="lg">Book a Follow-Up Leak Audit</CalBookingButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
