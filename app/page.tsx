"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, Database, Radar, Route, ShieldCheck, Users } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { useScrollAnimations } from "@/lib/scroll-animations"

const painPoints = [
  "New internet leads wait too long for a real response.",
  "Old conversations sit in the CRM with no next action.",
  "Agents work from memory instead of one source of truth.",
  "Team leads cannot see which opportunities are quietly slipping.",
]

const installs = [
  {
    icon: Radar,
    title: "Lead leak visibility",
    description: "A clear view of where response, routing, nurture, and ownership break inside the current CRM.",
  },
  {
    icon: Route,
    title: "Routing and accountability",
    description: "Rules, reminders, and escalation paths so every lead gets a next action and a responsible owner.",
  },
  {
    icon: Database,
    title: "Stale lead recovery",
    description: "Segments and reactivation workflows for the contacts your team already paid to acquire.",
  },
  {
    icon: ShieldCheck,
    title: "Human handoff controls",
    description: "Automation for busy work, with clear moments where an agent should step in personally.",
  },
]

const steps = [
  "We inspect your lead sources, CRM stages, tags, smart lists, tasks, and follow-up cadence.",
  "You receive a Follow-Up Leak Scorecard and CRM Execution Report + 30-Day Fix Plan.",
  "If the leak is worth fixing, HotlistAI installs the execution layer around your current CRM.",
]

export default function Home() {
  useScrollAnimations()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background overflow-x-hidden">
      <SiteHeader />

      <main className="flex-1">
        <article>
          <section className="relative min-h-[92vh] flex items-center px-4 md:px-6 pt-20" aria-labelledby="hero-heading">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full border border-border/50 bg-muted/30 blur-3xl" />
              <div className="absolute bottom-10 left-[-8%] h-[420px] w-[420px] rounded-full bg-foreground/[0.04] blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full">
              <div className="max-w-4xl space-y-8">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase animate-fade-in">
                  For 5-25 Agent Real Estate Teams With Active Lead Flow
                </p>
                <h1
                  id="hero-heading"
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.9] text-balance animate-fade-in-up delay-100"
                >
                  Stop warm leads from dying inside your CRM.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed animate-fade-in-up delay-200">
                  HotlistAI audits where follow-up breaks, then installs the execution layer that makes your current
                  real-estate CRM respond faster, route better, revive stale leads, and hold the team accountable.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center pt-2 animate-fade-in-up delay-300">
                  <CalBookingButton size="lg">Book a Follow-Up Leak Audit</CalBookingButton>
                  <Link
                    href="/sample-leak-report"
                    className="inline-flex items-center gap-2 px-5 py-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    See a Sample Leak Report <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground animate-fade-in-up delay-300">
                  Before you buy more leads, find out where your current ones are leaking.
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 border-y border-border/40 bg-muted/10" aria-labelledby="leads-die-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div className="scroll-animate">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">
                  Where Leads Actually Die
                </p>
                <h2 id="leads-die-heading" className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
                  Most CRMs are not empty. They are underworked.
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {painPoints.map((point, index) => (
                  <div
                    key={point}
                    className={`scroll-animate delay-${(index + 1) * 100} rounded-xl border border-border/40 bg-background p-5`}
                  >
                    <CheckCircle2 className="h-5 w-5 mb-4 text-foreground" strokeWidth={1.5} />
                    <p className="text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 border-b border-border/40" aria-labelledby="before-after-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <header className="max-w-3xl mb-12 scroll-animate">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">Before And After</p>
                <h2 id="before-after-heading" className="text-4xl md:text-5xl font-serif tracking-tight">
                  Fix follow-up before you buy more leads.
                </h2>
              </header>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 md:p-8 scroll-animate">
                  <h3 className="text-2xl font-serif mb-6">Before HotlistAI</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>Tasks pile up without a reliable owner.</li>
                    <li>Lead response depends on who happens to be disciplined that day.</li>
                    <li>Old leads turn into a storage problem instead of a recovery list.</li>
                    <li>The team lead sees production after the opportunity is already cold.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-foreground/20 bg-foreground text-background p-6 md:p-8 scroll-animate delay-100">
                  <h3 className="text-2xl font-serif mb-6">After HotlistAI</h3>
                  <ul className="space-y-4 text-background/80">
                    <li>Every lead gets a next action.</li>
                    <li>Fast response happens without sounding robotic.</li>
                    <li>Stale leads are segmented by recovery potential.</li>
                    <li>Team accountability shows up before deals disappear.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 border-b border-border/40 bg-muted/10" aria-labelledby="installs-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <header className="max-w-3xl mb-12 scroll-animate">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">
                  What HotlistAI installs
                </p>
                <h2 id="installs-heading" className="text-4xl md:text-5xl font-serif tracking-tight">
                  Make your current CRM actually execute.
                </h2>
              </header>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {installs.map((item, index) => (
                  <div
                    key={item.title}
                    className={`scroll-animate delay-${(index + 1) * 100} rounded-xl border border-border/40 bg-background p-6`}
                  >
                    <item.icon className="h-7 w-7 mb-6 text-foreground" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 border-b border-border/40" aria-labelledby="audit-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div className="scroll-animate">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">
                  Follow-Up Leak Audit
                </p>
                <h2 id="audit-heading" className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
                  A practical diagnosis before another software pitch.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We find where response, routing, nurture, stale-lead recovery, and agent accountability break inside
                  your current CRM.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <CalBookingButton>Book a Follow-Up Leak Audit</CalBookingButton>
                  <Link
                    href="/follow-up-leak-audit"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 px-8 py-4 text-sm font-medium hover:border-foreground/40 transition-colors"
                  >
                    See the audit <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 md:p-8 scroll-animate delay-100">
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                  <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                    Audit Output
                  </p>
                </div>
                <div className="space-y-5">
                  {steps.map((step, index) => (
                    <div key={step} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-sm">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 border-b border-border/40 bg-muted/10" aria-labelledby="fit-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <h2 id="fit-heading" className="text-4xl md:text-5xl font-serif tracking-tight mb-10 scroll-animate">
                Built for teams with real lead flow.
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border/40 bg-background p-6 md:p-8 scroll-animate">
                  <h3 className="text-2xl font-serif mb-5">This fits if</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>5-25 agent residential teams.</li>
                    <li>1-3 office boutique brokerages.</li>
                    <li>Teams using Follow Up Boss or another established real-estate CRM.</li>
                    <li>Teams with old opportunities sitting untouched.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-border/40 bg-background p-6 md:p-8 scroll-animate delay-100">
                  <h3 className="text-2xl font-serif mb-5">This is not the first fit if</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>You are a brand-new solo agent with a tiny database.</li>
                    <li>You do not have enough lead flow to feel leakage yet.</li>
                    <li>You only want another dashboard.</li>
                    <li>You are trying to replace the human relationship entirely.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-4 md:px-6" aria-labelledby="founder-heading">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
              <div className="scroll-animate">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">Founder Proof</p>
                <h2 id="founder-heading" className="text-4xl md:text-5xl font-serif tracking-tight">
                  Built by Johnny Apple.
                </h2>
              </div>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed scroll-animate delay-100">
                <p>
                  Johnny Apple has spent six years inside lead generation, CRM discipline, AI-assisted follow-up, and
                  nurture systems for real-estate operators.
                </p>
                <p>
                  He has worked with teams from Keller Williams, Monument Realty, Compass, and Berkshire Hathaway,
                  getting close to the process instead of guessing from a generic software playbook.
                </p>
                <p>
                  HotlistAI exists for the team lead who knows there is opportunity buried in the CRM, but needs a
                  cleaner system to surface it, assign it, and keep it moving.
                </p>
              </div>
            </div>
          </section>

          <section className="py-24 px-4 md:px-6 border-t border-border/40 bg-foreground text-background" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto text-center scroll-animate">
              <Users className="h-8 w-8 mx-auto mb-6 text-background/70" strokeWidth={1.5} />
              <h2 id="cta-heading" className="text-4xl md:text-6xl font-serif tracking-tight mb-6">
                Before you spend more money on leads, find out where your current follow-up is leaking.
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <CalBookingButton size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Book a Follow-Up Leak Audit
                </CalBookingButton>
                <Link
                  href="/sample-leak-report"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-10 py-5 text-lg font-medium text-background hover:bg-background hover:text-foreground transition-colors"
                >
                  See a Sample Leak Report
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
