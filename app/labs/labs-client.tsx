"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Lightbulb, Users, Repeat, CheckCircle2, Rocket, ArrowRight, Building2 } from "lucide-react"
import Link from "next/link"
import { useScrollAnimations } from "@/lib/scroll-animations"

const timeline = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Idea In",
    description:
      "Problem identified. Opportunity captured. Every concept starts with a clear hypothesis worth testing.",
  },
  {
    icon: Users,
    step: "02",
    title: "Boardroom Breakdown",
    description:
      "Digital counterparts analyze from every angle: market viability, technical feasibility, operational complexity, growth potential.",
  },
  {
    icon: Repeat,
    step: "03",
    title: "Rapid Prototype",
    description: "Build fast. Test faster. Working prototypes emerge in days, not months. Speed as validation.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Real Validation",
    description:
      "Pressure-tested with real users, real workflows, real outcomes. If it doesn't survive this stage, it doesn't ship.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Launch",
    description: "Refined, validated, ready. Products graduate from The Lab into The Foundry and out into the world.",
  },
]

export default function LabsPageClient() {
  useScrollAnimations()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <article>
          {/* Hero */}
          <section className="py-20 md:py-32 px-4 md:px-6" aria-label="Introduction">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 animate-fade-in-up">
                <p className="text-sm font-mono text-muted-foreground tracking-wide uppercase">The Lab / Process</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.1] text-balance">
                  From Spark to Ship.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Every Hotlist AI product follows the same path: ideation, validation, refinement, and deployment. No
                  shortcuts. No exceptions.
                </p>
              </div>
            </div>
          </section>

          {/* Process Timeline */}
          <section className="py-16 md:py-24 px-4 md:px-6 border-t border-border/40" aria-label="Process Timeline">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[19px] top-8 bottom-8 w-px bg-border/50" aria-hidden="true" />

                <div className="space-y-8">
                  {timeline.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={item.step} className={`scroll-animate delay-${index * 100} relative flex gap-6`}>
                        {/* Icon circle */}
                        <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border-2 border-border bg-background flex items-center justify-center hover:scale-110 hover:rotate-12 transition-transform">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <div className="flex items-baseline gap-3 mb-2">
                            <span className="text-xs font-mono text-muted-foreground tracking-wider">
                              STEP / {item.step}
                            </span>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Estate Mogul Story */}
          <section
            className="py-16 md:py-24 px-4 md:px-6 bg-muted/20 border-y border-border/40"
            aria-label="Case Study"
          >
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 scroll-animate">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-background border border-border">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Highlight</p>
                    <h2 className="text-2xl md:text-3xl font-serif tracking-tight">The Estate Mogul Story</h2>
                  </div>
                </div>

                <div className="p-8 md:p-10 rounded-2xl bg-background border border-border/40 space-y-6">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Problem:</strong> Real estate professionals drowning in
                      repetitive analysis, market research, and client communication. Hours spent on work that could be
                      systematized.
                    </p>
                    <p>
                      <strong className="text-foreground">Lab Phase:</strong> 4 weeks. Built digital boardroom with
                      specialized counterparts (Analyst, Strategist, Producer, Communications Lead). Tested with 12
                      agents and brokers.
                    </p>
                    <p>
                      <strong className="text-foreground">Outcome:</strong> Estate Mogul graduated from The Lab as a
                      complete intelligence system. Now deployed, saving users 15+ hours per week while improving
                      decision quality.
                    </p>
                    <p className="text-sm pt-2 border-t border-border/40">
                      <strong className="text-foreground">Status:</strong> Active deployment. Available for early
                      access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="py-16 md:py-24 px-4 md:px-6" aria-label="Philosophy">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8 scroll-animate">
                <h2 className="text-2xl md:text-3xl font-serif tracking-tight">The Lab Ethos</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The Lab is where ideas face reality. Not every concept survives. Not every prototype ships. That's
                    by design.
                  </p>
                  <p>
                    We compress timelines without sacrificing rigor. What used to take months now takes weeks. What used
                    to require consultants now happens through specialized digital counterparts working in concert.
                  </p>
                  <p>
                    Every product on this site graduated from here—pressure-tested, refined, and validated with real
                    users before deployment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 px-4 md:px-6 border-t border-border/40" aria-label="Contact">
            <div className="max-w-3xl mx-auto text-center scroll-animate">
              <h2 className="text-2xl md:text-3xl font-serif tracking-tight mb-4">Have an idea worth testing?</h2>
              <p className="text-muted-foreground mb-8">We're always looking for the next problem worth solving.</p>
              <Link
                href="/contact"
                className="px-8 py-4 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all inline-flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
