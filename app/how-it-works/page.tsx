"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CalBookingButton } from "@/components/cal-booking-button"
import { Search, FileText, Settings, Activity, CheckCircle, Clock } from "lucide-react"
import { useScrollAnimations } from "@/lib/scroll-animations"

export default function HowItWorksPage() {
  useScrollAnimations()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        {/* Hero */}
        <section className="py-20 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">How Installation Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Audit → Plan → Install → License. Repeatability is the product. Every deployment follows the same
              governed process.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-4 md:px-6 bg-muted/10 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate">
                <h2 className="text-2xl md:text-3xl font-serif tracking-tight mb-6">
                  Infrastructure Means Repeatability
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not experiment. We install production systems using a repeatability model. Every deployment is
                  templated, governed, and measured.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This is not consulting. This is infrastructure deployment—designed for scale, built for uptime,
                  delivered with control.
                </p>
              </div>
              <div className="scroll-animate delay-100">
                <div className="p-8 bg-card border border-border/50 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-semibold">7-14 Days</div>
                        <div className="text-sm text-muted-foreground">From audit to production</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-semibold">Governed Install</div>
                        <div className="text-sm text-muted-foreground">Controls and approvals built in</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-semibold">Measured Outcomes</div>
                        <div className="text-sm text-muted-foreground">Throughput, cycle time, margin</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 4-Step Process */}
        <section className="py-24 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">The Installation Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Four stages. Fixed timeline. Governed execution from day one.
              </p>
            </div>

            <div className="space-y-16">
              {/* Step 1: System Audit */}
              <div className="scroll-animate">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center rounded-xl flex-shrink-0 text-2xl font-serif">
                    01
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Search className="w-6 h-6" />
                      <h3 className="text-2xl font-serif">System Audit</h3>
                    </div>
                    <p className="text-muted-foreground text-lg mb-6">
                      We map workflows, identify bottlenecks, and calculate overhead cost.
                    </p>
                  </div>
                </div>

                <div className="ml-[88px] space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 border border-border/30 rounded-lg">
                      <h4 className="font-semibold mb-3">What We Map</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Current workflow steps and handoffs</li>
                        <li>• Coordination overhead per role</li>
                        <li>• Cycle time and throughput bottlenecks</li>
                        <li>• Manual tasks and approval chains</li>
                        <li>• Data sources and integration points</li>
                      </ul>
                    </div>
                    <div className="p-6 border border-border/30 rounded-lg">
                      <h4 className="font-semibold mb-3">What You Get</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Workflow diagram with pain points</li>
                        <li>• Overhead cost calculation (hours + payroll)</li>
                        <li>• Deployment recommendation (which lane)</li>
                        <li>• ROI projection (capacity vs. headcount)</li>
                        <li>• Risk assessment and governance needs</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-6 bg-muted/10 border border-border/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-semibold">Timeline: 2-3 days</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Includes stakeholder interviews, workflow observation, and systems review.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2: Deployment Plan */}
              <div className="scroll-animate">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center rounded-xl flex-shrink-0 text-2xl font-serif">
                    02
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-6 h-6" />
                      <h3 className="text-2xl font-serif">Deployment Plan</h3>
                    </div>
                    <p className="text-muted-foreground text-lg mb-6">
                      We define roles, workflows, controls, and success metrics. You approve before install.
                    </p>
                  </div>
                </div>

                <div className="ml-[88px] space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 border border-border/30 rounded-lg">
                      <h4 className="font-semibold mb-3">Plan Contents</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Role definition and responsibilities</li>
                        <li>• Workflow steps with approval gates</li>
                        <li>• Integration requirements and data sources</li>
                        <li>• Governance controls and audit trails</li>
                        <li>• Success metrics and KPI targets</li>
                      </ul>
                    </div>
                    <div className="p-6 border border-border/30 rounded-lg">
                      <h4 className="font-semibold mb-3">Approval Points</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Workflow design sign-off</li>
                        <li>• Messaging and tone approval</li>
                        <li>• Integration scope confirmation</li>
                        <li>• Governance controls review</li>
                        <li>• Go-live criteria agreement</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-6 bg-muted/10 border border-border/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-semibold">Timeline: 2-3 days</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Includes plan drafting, stakeholder review, and finalization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Install & Test */}
              <div className="scroll-animate">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center rounded-xl flex-shrink-0 text-2xl font-serif">
                    03
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="w-6 h-6" />
                      <h3 className="text-2xl font-serif">Install & Test</h3>
                    </div>
                    <p className="text-muted-foreground text-lg mb-6">
                      We deploy counterparts, integrate workflows, and validate governance before go-live.
                    </p>
                  </div>
                </div>

                <div className="ml-[88px] space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 border border-border/30 rounded-lg">
                      <h4 className="font-semibold mb-3">Installation Phase</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Deploy Digital Counterpart infrastructure</li>
                        <li>• Configure workflow automation</li>
                        <li>• Integrate CRM, tools, and data sources</li>
                        <li>• Set up approval gates and controls</li>
                        <li>• Configure observability dashboard</li>
                      </ul>
                    </div>
                    <div className="p-6 border border-border/30 rounded-lg">
                      <h4 className="font-semibold mb-3">Testing Phase</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Shadow mode validation (no live actions)</li>
                        <li>• Approval gate verification</li>
                        <li>• Integration testing with live data</li>
                        <li>• Throughput and accuracy benchmarking</li>
                        <li>• Stakeholder UAT and sign-off</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-6 bg-muted/10 border border-border/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-semibold">Timeline: 5-7 days</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Includes technical installation, integration testing, and go-live approval.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4: License & Monitor */}
              <div className="scroll-animate">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center rounded-xl flex-shrink-0 text-2xl font-serif">
                    04
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Activity className="w-6 h-6" />
                      <h3 className="text-2xl font-serif">License & Monitor</h3>
                    </div>
                    <p className="text-muted-foreground text-lg mb-6">
                      Ongoing capacity licensing with observability, iteration, and uptime guarantees.
                    </p>
                  </div>
                </div>

                <div className="ml-[88px] space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 border border-border/30 rounded-lg">
                      <h4 className="font-semibold mb-3">What's Included</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Ongoing licensed capacity</li>
                        <li>• Real-time observability dashboard</li>
                        <li>• Performance monitoring and alerts</li>
                        <li>• Weekly optimization reviews</li>
                        <li>• Governance and audit reporting</li>
                      </ul>
                    </div>
                    <div className="p-6 border border-border/30 rounded-lg">
                      <h4 className="font-semibold mb-3">Support & Iteration</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Workflow refinement and tuning</li>
                        <li>• Integration expansion as needed</li>
                        <li>• Role expansion and new counterparts</li>
                        <li>• Dedicated support channel</li>
                        <li>• Quarterly strategic reviews</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-6 bg-muted/10 border border-border/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-semibold">Timeline: Ongoing</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Monthly or annual licensing. Cancel anytime. Uptime SLA enforced.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes This Different */}
        <section className="py-24 px-4 md:px-6 border-t border-border/40 bg-muted/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">What Makes This Different</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This is not consulting. This is infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Not Consulting",
                  description:
                    "No workshops. No slide decks. We install production systems with SLAs and ongoing uptime guarantees.",
                },
                {
                  title: "Not Software Licenses",
                  description:
                    "You are not buying a tool. You are licensing governed capacity that owns outcomes and produces work.",
                },
                {
                  title: "Not Experimentation",
                  description:
                    "Every deployment follows the same repeatability model. Governed from day one. Measured from go-live.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`scroll-animate delay-${(index + 1) * 100} p-6 border border-border/30 rounded-lg`}
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-6 border-t border-border/40">
          <div className="max-w-3xl mx-auto text-center scroll-animate">
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">Ready to Install Capacity?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Start with a System Audit. We map your workflows and propose a deployment plan. 7-14 days from audit to
              production.
            </p>
            <CalBookingButton size="lg">Request a System Audit</CalBookingButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
