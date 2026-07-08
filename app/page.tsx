"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ClipboardList, Clock, Headphones, Users, Wrench } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import {
  HumanHandoffIcon,
  LeadLeakVisibilityIcon,
  RoutingAccountabilityIcon,
  StaleLeadRecoveryIcon,
} from "@/components/hotlist-icons"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { useScrollAnimations } from "@/lib/scroll-animations"

const painPoints = [
  "New leads sit too long before someone responds.",
  "Old conversations pile up with no clear next step.",
  "Agents follow up from memory, not one trusted list.",
  "You find out a deal went cold only after it is gone.",
]

const conciergeSteps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Lead Follow-Up Audit",
    description:
      "We review how leads enter your system, who owns them, what follow-up actually happens, and where warm opportunities are being missed. You get a clear scorecard and a 30-day fix plan.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Fix & Install",
    description:
      "If the gaps are worth fixing, we set up the reminders, lists, and simple processes so your team can run follow-up without guessing.",
  },
  {
    icon: Headphones,
    step: "03",
    title: "Tech Concierge",
    description:
      "We stay with you monthly — tuning systems, fixing what breaks, and keeping tech from becoming your problem again.",
  },
]

const outcomes = [
  {
    icon: LeadLeakVisibilityIcon,
    title: "See where leads slip",
    description: "A clear picture of where response, ownership, and follow-up break down.",
  },
  {
    icon: RoutingAccountabilityIcon,
    title: "Clear ownership",
    description: "Every lead has someone responsible and a reminder when action is due.",
  },
  {
    icon: StaleLeadRecoveryIcon,
    title: "Re-engage old contacts",
    description: "The people you already paid to reach get sorted into a practical recovery list.",
  },
  {
    icon: HumanHandoffIcon,
    title: "Real people, right moments",
    description: "Automation handles busy work. Your agents step in when it actually matters.",
  },
]

const auditSteps = [
  "We review your lead sources, CRM stages, tasks, and follow-up habits.",
  "You receive a Follow-Up Scorecard and a 30-Day Fix Plan.",
  "If it is worth fixing, we implement the system and stay on as your Tech Concierge.",
]

const platformLogos = [
  { name: "Follow Up Boss", src: "/integrations/follow-up-boss.png" },
  { name: "Lofty", src: "/integrations/lofty.png" },
  { name: "BoldTrail", src: "/integrations/boldtrail.png" },
  { name: "CINC", src: "/integrations/cinc.png" },
  { name: "Ylopo", src: "/integrations/ylopo.png" },
  { name: "HubSpot", src: "/integrations/hubspot.png" },
  { name: "Pipedrive", src: "/integrations/pipedrive.png" },
  { name: "Sierra Interactive", src: "/integrations/sierra-interactive.png" },
  { name: "Slack", src: "/integrations/slack.png" },
  { name: "Zoho CRM", src: "/integrations/zoho-crm.png" },
]

const brokerageLogos = [
  { name: "Keller Williams", src: "/brokerages/keller-williams.png" },
  { name: "Monument Realty", src: "/brokerages/monument-realty.png" },
  { name: "Compass", src: "/brokerages/compass.png" },
  { name: "Berkshire Hathaway HomeServices", src: "/brokerages/berkshire-hathaway-homeservices.png" },
]

const brokerageLogoLoop = [...brokerageLogos, ...brokerageLogos]

export default function Home() {
  useScrollAnimations()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background overflow-x-hidden">
      <SiteHeader />

      <main className="flex-1">
        <article>
          <section className="relative min-h-[92vh] flex items-center px-4 md:px-6 pt-20" aria-labelledby="hero-heading">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                src="/visuals/hotlist-hero-crm-routing-background.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/15" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/80" />
              <div className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full border border-border/50 bg-muted/30 blur-3xl" />
              <div className="absolute bottom-10 left-[-8%] h-[420px] w-[420px] rounded-full bg-foreground/[0.04] blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full">
              <div className="max-w-4xl space-y-8">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase animate-fade-in">
                  For Real Estate Teams With Active Leads (5–25 Agents)
                </p>
                <h1
                  id="hero-heading"
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.9] text-balance animate-fade-in-up delay-100"
                >
                  Your Agent Tech Concierge for follow-up that actually happens.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed animate-fade-in-up delay-200">
                  Hotlist audits where your team is losing warm leads, installs a simple follow-up system inside the
                  CRM you already use, and manages it ongoing — so you close more deals with less tech overwhelm.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center pt-2 animate-fade-in-up delay-300">
                  <CalBookingButton size="lg">Book Your Lead Follow-Up Audit</CalBookingButton>
                  <Link
                    href="/sample-leak-report"
                    className="inline-flex items-center gap-2 px-5 py-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    See a Sample Audit Report <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground animate-fade-in-up delay-300">
                  Before you buy more leads, find out where the ones you already have are slipping away.
                </p>
              </div>
            </div>
          </section>

          <section
            className="border-y border-border/40 bg-background px-4 py-10 md:px-6"
            aria-labelledby="platform-expertise-heading"
          >
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div className="scroll-animate">
                <p
                  id="platform-expertise-heading"
                  className="text-xs font-mono uppercase tracking-[0.28em] text-muted-foreground"
                >
                  Works With Your Current Tools
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Follow Up Boss, Lofty, BoldTrail, HubSpot, and the other systems your team already runs.
                </p>
              </div>
              <div className="grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
                {platformLogos.map((logo, index) => (
                  <div
                    key={logo.name}
                    className={`scroll-animate delay-${(index % 5) * 100} relative h-9 opacity-40 grayscale transition-opacity duration-300 hover:opacity-70`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="(min-width: 1024px) 160px, (min-width: 640px) 30vw, 45vw"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 border-y border-border/40 bg-muted/10" aria-labelledby="leads-die-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div className="scroll-animate">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">Sound Familiar?</p>
                <h2 id="leads-die-heading" className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
                  You are not short on leads. You are short on follow-up.
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

          <section
            className="overflow-hidden border-b border-border/40 bg-background py-12"
            aria-labelledby="brokerage-experience-heading"
          >
            <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-4 px-4 md:px-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="scroll-animate max-w-2xl">
                <p
                  id="brokerage-experience-heading"
                  className="text-xs font-mono uppercase tracking-[0.28em] text-muted-foreground"
                >
                  Real Estate Team Experience
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Experience inside the workflows of real-estate teams affiliated with leading brokerages.
                </p>
              </div>
              <p className="scroll-animate delay-100 max-w-md text-[11px] leading-relaxed text-muted-foreground/65">
                Brokerage logos reference team/operator affiliations and workflow experience, not official corporate
                endorsements or partnerships.
              </p>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
              <div className="brokerage-marquee flex w-max items-center gap-10">
                {brokerageLogoLoop.map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="relative h-16 w-[260px] shrink-0 opacity-50 grayscale transition-opacity duration-300 hover:opacity-80"
                    aria-hidden={index >= brokerageLogos.length}
                  >
                    <Image
                      src={logo.src}
                      alt={index < brokerageLogos.length ? logo.name : ""}
                      fill
                      sizes="260px"
                      className="object-contain"
                    />
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
                  Fix follow-up before you spend more on leads.
                </h2>
              </header>
              <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-3xl border border-border/40 bg-foreground scroll-animate">
                <Image
                  src="/visuals/before-after-crm-execution-layer.png"
                  alt="Before and after follow-up system for real estate teams"
                  fill
                  sizes="(min-width: 1152px) 1152px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 md:p-8 scroll-animate">
                  <h3 className="text-2xl font-serif mb-6">Before Hotlist</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>Tasks pile up with no clear owner.</li>
                    <li>Response depends on who is disciplined that day.</li>
                    <li>Old contacts become clutter instead of opportunity.</li>
                    <li>Problems surface after the deal is already lost.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-foreground/20 bg-foreground text-background p-6 md:p-8 scroll-animate delay-100">
                  <h3 className="text-2xl font-serif mb-6">After Hotlist</h3>
                  <ul className="space-y-4 text-background/80">
                    <li>Every lead has a clear next step and owner.</li>
                    <li>Fast response without sounding robotic.</li>
                    <li>Old contacts are sorted by who is worth re-engaging.</li>
                    <li>You see problems while there is still time to save the deal.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 border-b border-border/40 bg-muted/10" aria-labelledby="concierge-path-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <header className="max-w-3xl mb-12 scroll-animate">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">How It Works</p>
                <h2 id="concierge-path-heading" className="text-4xl md:text-5xl font-serif tracking-tight">
                  Audit. Fix. Stay on top of it.
                </h2>
              </header>
              <div className="grid md:grid-cols-3 gap-4">
                {conciergeSteps.map((item, index) => (
                  <div
                    key={item.title}
                    className={`scroll-animate delay-${(index + 1) * 100} rounded-xl border border-border/40 bg-background p-6`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xs font-mono text-muted-foreground">{item.step}</span>
                      <item.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 scroll-animate">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  See the full concierge process <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          <section className="py-24 border-b border-border/40" aria-labelledby="outcomes-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <header className="max-w-3xl mb-12 scroll-animate">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">What You Get</p>
                <h2 id="outcomes-heading" className="text-4xl md:text-5xl font-serif tracking-tight">
                  Less overwhelm. More closings.
                </h2>
              </header>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {outcomes.map((item, index) => (
                  <div
                    key={item.title}
                    className={`scroll-animate delay-${(index + 1) * 100} rounded-xl border border-border/40 bg-muted/20 p-6`}
                  >
                    <item.icon className="h-7 w-7 mb-6 text-foreground" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 border-b border-border/40 bg-muted/10" aria-labelledby="audit-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div className="scroll-animate">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">Start Here</p>
                <h2 id="audit-heading" className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
                  The Lead Follow-Up Audit
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  A practical diagnosis before another software pitch. We look at your real follow-up — not your
                  dashboard — and show you exactly what to fix first.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <CalBookingButton>Book Your Lead Follow-Up Audit</CalBookingButton>
                  <Link
                    href="/follow-up-leak-audit"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 px-8 py-4 text-sm font-medium hover:border-foreground/40 transition-colors"
                  >
                    See the full audit page <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-border/40 bg-background p-6 md:p-8 scroll-animate delay-100">
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                  <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">How The Audit Works</p>
                </div>
                <div className="space-y-5">
                  {auditSteps.map((step, index) => (
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

          <section className="py-24 border-b border-border/40" aria-labelledby="fit-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <h2 id="fit-heading" className="text-4xl md:text-5xl font-serif tracking-tight mb-10 scroll-animate">
                Built for teams with real lead flow.
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 md:p-8 scroll-animate">
                  <h3 className="text-2xl font-serif mb-5">Good fit</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>5–25 agent residential teams.</li>
                    <li>Boutique brokerages (1–3 offices).</li>
                    <li>Teams using Follow Up Boss or a similar CRM.</li>
                    <li>Old opportunities sitting untouched.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-border/40 bg-muted/20 p-6 md:p-8 scroll-animate delay-100">
                  <h3 className="text-2xl font-serif mb-5">Not the best first fit</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>Brand-new solo agents with tiny databases.</li>
                    <li>Teams without enough lead flow to feel the pain yet.</li>
                    <li>Anyone who only wants another dashboard.</li>
                    <li>Anyone trying to remove the human relationship entirely.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-4 md:px-6 border-b border-border/40" aria-labelledby="founder-heading">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
              <div className="scroll-animate">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">Who Is Behind This</p>
                <h2 id="founder-heading" className="text-4xl md:text-5xl font-serif tracking-tight">
                  Built by Johnny Apple.
                </h2>
              </div>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed scroll-animate delay-100">
                <p>
                  Johnny has spent six years inside lead generation, follow-up systems, and CRM discipline for real estate
                  teams — including work with Keller Williams, Monument Realty, Compass, and Berkshire Hathaway.
                </p>
                <p>
                  Hotlist exists for the team lead who knows there is money sitting in the CRM but needs a trusted
                  partner to make the system simple enough that agents actually use it.
                </p>
              </div>
            </div>
          </section>

          <section
            className="relative overflow-hidden py-24 px-4 md:px-6 border-t border-border/40 bg-foreground text-background"
            aria-labelledby="cta-heading"
          >
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/visuals/final-cta-lead-flow-dark.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-65"
              />
              <div className="absolute inset-0 bg-foreground/55" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto text-center scroll-animate">
              <Users className="h-8 w-8 mx-auto mb-6 text-background/70" strokeWidth={1.5} />
              <h2 id="cta-heading" className="text-4xl md:text-6xl font-serif tracking-tight mb-6">
                Stop losing warm leads to broken follow-up.
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <CalBookingButton size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Book Your Lead Follow-Up Audit
                </CalBookingButton>
                <Link
                  href="/sample-leak-report"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-10 py-5 text-lg font-medium text-background hover:bg-background hover:text-foreground transition-colors"
                >
                  See a Sample Audit Report
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