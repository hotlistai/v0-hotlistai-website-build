"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CalBookingButton } from "@/components/cal-booking-button"
import { TrendingUp, Cog, Briefcase, CheckCircle, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimations } from "@/lib/scroll-animations"

export default function DeploymentsPage() {
  useScrollAnimations()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        {/* Hero */}
        <section className="py-20 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">
              Deployment Lanes
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Install governed capacity across Growth, Operations, and Executive Execution. Replace role-level overhead
              so output scales without hiring.
            </p>
          </div>
        </section>

        {/* Growth Deployment */}
        <section id="growth" className="py-24 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-12 scroll-animate">
              <div className="w-16 h-16 bg-muted/50 border border-border/50 flex items-center justify-center rounded-xl flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Growth Deployment</h2>
                <p className="text-xl text-muted-foreground">
                  Acquisition throughput without SDR headcount.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              {/* The Problem */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">The Operator Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Outbound prospecting requires constant coordination. SDRs need direction, follow-up tracking, handoff
                  discipline, and meeting booking oversight. The moment pipeline slows, you hire more headcount. The
                  moment headcount grows, coordination overhead crushes velocity.
                </p>
              </div>

              {/* What This Replaces */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">What This Replaces</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted/20 border border-border/30 rounded-lg">
                    <h4 className="font-semibold mb-2">❌ Before</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• SDR headcount scaling with volume</li>
                      <li>• Manual prospecting and qualification</li>
                      <li>• Inconsistent follow-up cadence</li>
                      <li>• Handoff errors to AEs</li>
                      <li>• Meeting booking overhead</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-card border border-border/50 rounded-lg">
                    <h4 className="font-semibold mb-2">✓ After</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Licensed capacity replaces SDR roles</li>
                      <li>• Autonomous prospecting & qualification</li>
                      <li>• Governed follow-up with approval gates</li>
                      <li>• Clean handoffs with full context</li>
                      <li>• Automated meeting coordination</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Workflow Ownership */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Workflow Ownership</h3>
                <div className="space-y-3">
                  {[
                    "ICP research and list building",
                    "Outbound sequence execution",
                    "Response triage and qualification",
                    "Meeting booking and calendar sync",
                    "AE handoff with enriched context",
                    "Pipeline velocity tracking",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Metrics */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Success Metrics</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 border border-border/30 rounded-lg">
                    <div className="text-2xl font-serif mb-2">Pipeline Velocity</div>
                    <p className="text-sm text-muted-foreground">Days from prospect → qualified → meeting booked</p>
                  </div>
                  <div className="p-6 border border-border/30 rounded-lg">
                    <div className="text-2xl font-serif mb-2">Qualified Volume</div>
                    <p className="text-sm text-muted-foreground">Meetings booked per week with ICP fit</p>
                  </div>
                  <div className="p-6 border border-border/30 rounded-lg">
                    <div className="text-2xl font-serif mb-2">Cost per Acq.</div>
                    <p className="text-sm text-muted-foreground">Licensed capacity vs. SDR payroll</p>
                  </div>
                </div>
              </div>

              {/* Controls & Approvals */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Controls & Approvals</h3>
                <div className="p-6 bg-muted/10 border border-border/30 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Messaging approval gates:</strong>{" "}
                      <span className="text-muted-foreground">
                        All outbound copy reviewed before send. Tone, ICP fit, and compliance validated.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Qualification thresholds:</strong>{" "}
                      <span className="text-muted-foreground">
                        Only prospects meeting defined criteria advance to AE handoff.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Observability dashboard:</strong>{" "}
                      <span className="text-muted-foreground">
                        Real-time monitoring of sequences, responses, and pipeline health.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operations Deployment */}
        <section id="operations" className="py-24 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-12 scroll-animate">
              <div className="w-16 h-16 bg-muted/50 border border-border/50 flex items-center justify-center rounded-xl flex-shrink-0">
                <Cog className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Operations Deployment</h2>
                <p className="text-xl text-muted-foreground">
                  Delivery throughput without Ops Manager overhead.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              {/* The Problem */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">The Operator Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Operations managers spend most time coordinating, not delivering. Status updates, contract routing,
                  workflow handoffs, and admin reconciliation create invisible drag. Every percentage point of growth
                  requires more coordination headcount. Margin shrinks as complexity compounds.
                </p>
              </div>

              {/* What This Replaces */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">What This Replaces</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted/20 border border-border/30 rounded-lg">
                    <h4 className="font-semibold mb-2">❌ Before</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Ops Manager headcount per 10-15 deals</li>
                      <li>• Manual status tracking and updates</li>
                      <li>• Contract routing and approval chasing</li>
                      <li>• Workflow coordination across teams</li>
                      <li>• Admin reconciliation overhead</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-card border border-border/50 rounded-lg">
                    <h4 className="font-semibold mb-2">✓ After</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Licensed capacity handles 100+ workflows</li>
                      <li>• Autonomous status automation</li>
                      <li>• Governed contract routing with audit trail</li>
                      <li>• Self-coordinating workflow execution</li>
                      <li>• Real-time reconciliation and reporting</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Workflow Ownership */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Workflow Ownership</h3>
                <div className="space-y-3">
                  {[
                    "Deal intake and workflow initialization",
                    "Status tracking and stakeholder updates",
                    "Contract generation and routing",
                    "Approval coordination and follow-up",
                    "Delivery milestone monitoring",
                    "Post-delivery reconciliation",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Metrics */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Success Metrics</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 border border-border/30 rounded-lg">
                    <div className="text-2xl font-serif mb-2">Cycle Time</div>
                    <p className="text-sm text-muted-foreground">Days from deal close → delivery complete</p>
                  </div>
                  <div className="p-6 border border-border/30 rounded-lg">
                    <div className="text-2xl font-serif mb-2">Throughput</div>
                    <p className="text-sm text-muted-foreground">Deals processed per month without headcount add</p>
                  </div>
                  <div className="p-6 border border-border/30 rounded-lg">
                    <div className="text-2xl font-serif mb-2">Coordination Cost</div>
                    <p className="text-sm text-muted-foreground">Hours saved per deal vs. manual ops</p>
                  </div>
                </div>
              </div>

              {/* Controls & Approvals */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Controls & Approvals</h3>
                <div className="p-6 bg-muted/10 border border-border/30 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Contract validation:</strong>{" "}
                      <span className="text-muted-foreground">
                        All contracts reviewed for completeness and accuracy before routing.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Approval workflow gates:</strong>{" "}
                      <span className="text-muted-foreground">
                        Required approvals enforced. No progression without sign-off.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Audit trail logging:</strong>{" "}
                      <span className="text-muted-foreground">
                        Every action timestamped and attributed. Full operational transparency.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Execution Deployment */}
        <section id="executive" className="py-24 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-12 scroll-animate">
              <div className="w-16 h-16 bg-muted/50 border border-border/50 flex items-center justify-center rounded-xl flex-shrink-0">
                <Briefcase className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Executive Execution Deployment</h2>
                <p className="text-xl text-muted-foreground">
                  Decision throughput without Chief of Staff headcount.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              {/* The Problem */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">The Operator Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Executives drown in coordination work. Inbox triage, meeting prep, delegation routing, and
                  prioritization consume the hours that should be spent on strategy. Chiefs of Staff help—but they are
                  expensive, hard to find, and still bottleneck on their own capacity.
                </p>
              </div>

              {/* What This Replaces */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">What This Replaces</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted/20 border border-border/30 rounded-lg">
                    <h4 className="font-semibold mb-2">❌ Before</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 3-4 hours daily on inbox triage</li>
                      <li>• Manual meeting prep and briefing</li>
                      <li>• Delegation bottlenecks and context loss</li>
                      <li>• Reactive prioritization under pressure</li>
                      <li>• Chief of Staff overhead at $150K+</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-card border border-border/50 rounded-lg">
                    <h4 className="font-semibold mb-2">✓ After</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Inbox zero as default state</li>
                      <li>• Autonomous meeting prep with context</li>
                      <li>• Governed delegation with full handoff</li>
                      <li>• Proactive prioritization based on goals</li>
                      <li>• Licensed capacity at fraction of CoS cost</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Workflow Ownership */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Workflow Ownership</h3>
                <div className="space-y-3">
                  {[
                    "Inbox triage and prioritization",
                    "Draft responses for executive review",
                    "Meeting prep and briefing documents",
                    "Delegation routing with context preservation",
                    "Follow-up tracking and escalation",
                    "Strategic initiative monitoring",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Metrics */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Success Metrics</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 border border-border/30 rounded-lg">
                    <div className="text-2xl font-serif mb-2">Decision Velocity</div>
                    <p className="text-sm text-muted-foreground">Hours from request → decision → delegation</p>
                  </div>
                  <div className="p-6 border border-border/30 rounded-lg">
                    <div className="text-2xl font-serif mb-2">Triage Time</div>
                    <p className="text-sm text-muted-foreground">Daily hours saved on inbox and coordination</p>
                  </div>
                  <div className="p-6 border border-border/30 rounded-lg">
                    <div className="text-2xl font-serif mb-2">Strategic Hours</div>
                    <p className="text-sm text-muted-foreground">Weekly hours reclaimed for high-leverage work</p>
                  </div>
                </div>
              </div>

              {/* Controls & Approvals */}
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Controls & Approvals</h3>
                <div className="p-6 bg-muted/10 border border-border/30 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Executive review gates:</strong>{" "}
                      <span className="text-muted-foreground">
                        All outbound communication reviewed before send. Tone and accuracy validated.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Delegation verification:</strong>{" "}
                      <span className="text-muted-foreground">
                        Delegation targets confirmed. Context and expectations documented before handoff.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Priority alignment:</strong>{" "}
                      <span className="text-muted-foreground">
                        Prioritization recommendations surfaced for executive override when needed.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-6 bg-muted/10">
          <div className="max-w-3xl mx-auto text-center scroll-animate">
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">Start with a System Audit</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              We map your workflows, calculate overhead cost, and propose a deployment plan. Install one lane or scale
              across all three.
            </p>
            <CalBookingButton size="lg">Request a System Audit</CalBookingButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
