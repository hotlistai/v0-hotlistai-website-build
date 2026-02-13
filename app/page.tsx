"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CalBookingButton } from "@/components/cal-booking-button"
import { ArrowRight, Users, Cog, Briefcase, Shield, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import { useScrollAnimations } from "@/lib/scroll-animations"

export default function Home() {
  useScrollAnimations()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background overflow-x-hidden">
      <SiteHeader />

      <main className="flex-1">
        <article>
          {/* Hero Section */}
          <section
            className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6"
            aria-labelledby="hero-heading"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-muted/30 blur-[100px] animate-blob-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-muted/20 blur-[80px] animate-blob-pulse delay-200" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-card mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Production Deployments Active
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.9] text-balance animate-fade-in-up delay-100"
              >
                Digital Workforce <br />
                <span className="text-muted-foreground">Infrastructure.</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                Deploy Digital Counterparts - autonomous role-holders that replace operational headcount across Growth,
                Operations, and Executive Execution.
              </p>

              <div className="flex flex-col gap-3 items-center pt-4 animate-fade-in-up delay-300">
                <CalBookingButton size="lg">Request a System Audit</CalBookingButton>
                <p className="text-sm text-muted-foreground">
                  Scale output without scaling headcount. Measured in throughput, cycle time, and margin.
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500" aria-hidden="true">
              <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5 animate-float">
                <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
              </div>
            </div>
          </section>

          {/* Definition Section */}
          <section className="py-16 border-t border-border/40 bg-muted/10" aria-labelledby="definition-heading">
            <div className="max-w-4xl mx-auto px-4 md:px-6 text-center scroll-animate">
              <p className="text-lg md:text-xl leading-relaxed">
                A <strong>Digital Counterpart</strong> is not a chatbot.
                <br />
                It is an autonomous role-holder that owns outcomes.
              </p>
            </div>
          </section>

          {/* Deployments Section */}
          <section className="py-24 border-t border-border/40" aria-labelledby="deployments-heading">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <header className="text-center mb-16 scroll-animate">
                <h2 id="deployments-heading" className="font-serif text-4xl md:text-5xl mb-4">
                  Deployment Lanes
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Install governed capacity across Growth, Operations, and Executive Execution.
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="group p-8 bg-card border border-border/50 rounded-lg hover:border-foreground/20 transition-all scroll-animate">
                  <div className="w-12 h-12 bg-muted/50 border border-border/50 flex items-center justify-center rounded-lg mb-6 group-hover:bg-muted transition-colors">
                    <TrendingUp className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl mb-3">Growth Deployment</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Acquisition throughput: prospecting, qualification, follow-up, meeting booking, handoff discipline.
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>→ Replaces: SDR headcount</p>
                    <p>→ Measures: Pipeline velocity</p>
                  </div>
                </div>

                <div className="group p-8 bg-card border border-border/50 rounded-lg hover:border-foreground/20 transition-all scroll-animate delay-100">
                  <div className="w-12 h-12 bg-muted/50 border border-border/50 flex items-center justify-center rounded-lg mb-6 group-hover:bg-muted transition-colors">
                    <Cog className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl mb-3">Operations Deployment</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Delivery throughput: workflow execution, coordination removal, status automation, contract handling.
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>→ Replaces: Ops Manager overhead</p>
                    <p>→ Measures: Cycle time reduction</p>
                  </div>
                </div>

                <div className="group p-8 bg-card border border-border/50 rounded-lg hover:border-foreground/20 transition-all scroll-animate delay-200">
                  <div className="w-12 h-12 bg-muted/50 border border-border/50 flex items-center justify-center rounded-lg mb-6 group-hover:bg-muted transition-colors">
                    <Briefcase className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl mb-3">Executive Execution Deployment</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Decision throughput: inbox triage, prioritization, drafting, delegation routing, meeting prep.
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>→ Replaces: Chief of Staff work</p>
                    <p>→ Measures: Decision velocity</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How Installation Works */}
          <section
            className="py-24 border-t border-border/40 bg-muted/10"
            aria-labelledby="installation-heading"
          >
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <header className="text-center mb-16 scroll-animate">
                <h2 id="installation-heading" className="text-3xl md:text-4xl font-serif tracking-tight mb-4">
                  How Installation Works
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Audit → Plan → Install → License. Repeatability is the product.
                </p>
              </header>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    number: "01",
                    title: "System Audit",
                    description: "Map workflows, identify bottlenecks, calculate overhead cost.",
                  },
                  {
                    number: "02",
                    title: "Deployment Plan",
                    description: "Define roles, workflows, controls, and success metrics.",
                  },
                  {
                    number: "03",
                    title: "Install & Test",
                    description: "Deploy counterparts, integrate workflows, validate governance.",
                  },
                  {
                    number: "04",
                    title: "License & Monitor",
                    description: "Ongoing capacity licensing with observability and iteration.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.number}
                    className={`scroll-animate delay-${(index + 1) * 100} space-y-3`}
                  >
                    <div className="text-4xl font-serif text-muted-foreground/30">{step.number}</div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-24 border-t border-border/40" aria-labelledby="values-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <header className="text-center mb-16 scroll-animate">
                <h2 id="values-heading" className="text-3xl md:text-4xl font-serif tracking-tight mb-4">
                  Built for Operators Who Hate Fluff
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Our values are constraints, not posters.
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Uptime over Hype",
                    description: "We ship stability. If it cannot be governed, monitored, and trusted, it does not go live.",
                  },
                  {
                    title: "ROI is the Only Metric",
                    description: "We sell throughput, cycle time reduction, and margin. If it does not move a metric, it is noise.",
                  },
                  {
                    title: "Ownership of Outcomes",
                    description: "A Counterpart is accountable. It has a job. It has boundaries. It produces.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`scroll-animate delay-${(index + 1) * 100} group p-6 md:p-8 rounded-xl bg-muted/30 border border-border/30 hover:border-border/60 hover:bg-muted/50 transition-all duration-300`}
                  >
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trust & Governance */}
          <section className="py-16 border-t border-border/40 bg-muted/10" aria-labelledby="trust-heading">
            <div className="max-w-4xl mx-auto px-4 md:px-6 scroll-animate">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-foreground flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 id="trust-heading" className="text-xl font-semibold mb-2">
                    Governed Systems. Measured Outcomes.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every deployment includes approvals, audit trails, operating boundaries, and observability. Security
                    and governance are features, not add-ons.{" "}
                    <Link href="/governance" className="underline hover:no-underline">
                      View our governance framework
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 px-4 md:px-6 border-t border-border/40" aria-labelledby="cta-heading">
            <div className="max-w-3xl mx-auto text-center scroll-animate">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-serif tracking-tight mb-6">
                Replace Headcount with Licensed Capacity
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Start with a System Audit. We map your workflows, calculate overhead cost, and propose a deployment
                plan.
              </p>
              <CalBookingButton size="lg">Request a System Audit</CalBookingButton>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
