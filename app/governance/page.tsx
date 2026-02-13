"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CalBookingButton } from "@/components/cal-booking-button"
import { Shield, Lock, Eye, FileCheck, AlertTriangle, CheckCircle2 } from "lucide-react"
import { useScrollAnimations } from "@/lib/scroll-animations"

export default function GovernancePage() {
  useScrollAnimations()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        {/* Hero */}
        <section className="py-20 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground text-background rounded-xl mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">
              Governance & Security
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Governed systems. Measured outcomes. Security and governance are features, not add-ons. Every deployment
              includes controls, approvals, audit trails, and operating boundaries.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-24 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Governance Principles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built for operators who demand control, transparency, and uptime.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Uptime Over Hype",
                  description:
                    "We do not ship vibes. We ship stability. If it cannot be governed, monitored, and trusted, it does not go live.",
                },
                {
                  title: "ROI is the Only Metric",
                  description:
                    "We sell throughput, cycle time reduction, and margin. If it does not move a real metric, it is noise.",
                },
                {
                  title: "Ownership of Outcomes",
                  description:
                    "A Counterpart is accountable. It has a job. It has boundaries. It produces.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`scroll-animate delay-${(index + 1) * 100} p-6 border border-border/30 rounded-lg bg-card`}
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Framework */}
        <section className="py-24 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-12 scroll-animate">
              <div className="w-12 h-12 bg-muted/50 border border-border/50 flex items-center justify-center rounded-lg flex-shrink-0">
                <Lock className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Data Security & Privacy</h2>
                <p className="text-muted-foreground text-lg">
                  Your data stays yours. We follow zero-trust principles and industry-standard encryption.
                </p>
              </div>
            </div>

            <div className="space-y-8 ml-[72px]">
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Data Handling</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border border-border/30 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      What We Do
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• End-to-end encryption for data in transit and at rest</li>
                      <li>• Role-based access control (RBAC) for all systems</li>
                      <li>• Data minimization - only access what's needed</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• SOC 2 Type II compliance (in progress)</li>
                    </ul>
                  </div>
                  <div className="p-6 border border-border/30 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-600" />
                      What We Don't Do
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Train models on your proprietary data</li>
                      <li>• Share data across customer deployments</li>
                      <li>• Store sensitive data longer than necessary</li>
                      <li>• Access systems without explicit permission</li>
                      <li>• Sell or monetize customer data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Infrastructure Security</h3>
                <div className="p-6 border border-border/30 rounded-lg">
                  <ul className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Deployed on enterprise-grade cloud infrastructure (AWS/GCP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Isolated customer environments with network segmentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Automated security patching and vulnerability management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>DDoS protection and rate limiting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>24/7 infrastructure monitoring and incident response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Disaster recovery and business continuity planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approval & Control Gates */}
        <section className="py-24 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-12 scroll-animate">
              <div className="w-12 h-12 bg-muted/50 border border-border/50 flex items-center justify-center rounded-lg flex-shrink-0">
                <FileCheck className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Approvals & Control Gates</h2>
                <p className="text-muted-foreground text-lg">
                  Every action requires explicit approval. You define boundaries. The system enforces them.
                </p>
              </div>
            </div>

            <div className="space-y-8 ml-[72px]">
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Pre-Action Approval Gates</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Outbound Communication",
                      description:
                        "All emails, messages, and outreach reviewed before send. Tone, accuracy, and compliance validated.",
                    },
                    {
                      title: "Contract Generation",
                      description:
                        "All contracts reviewed for completeness, accuracy, and legal compliance before routing.",
                    },
                    {
                      title: "Delegation & Handoffs",
                      description:
                        "All delegation targets confirmed. Context and expectations documented before handoff.",
                    },
                    {
                      title: "Data Access",
                      description:
                        "All data access requests require explicit permission. No silent background access.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-6 border border-border/30 rounded-lg">
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Operating Boundaries</h3>
                <div className="p-6 border border-border/30 rounded-lg">
                  <p className="text-muted-foreground mb-4">
                    Every Digital Counterpart operates within defined boundaries. You set the rules. The system enforces
                    them.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Messaging tone and vocabulary constraints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Qualification criteria and scoring thresholds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Approval escalation triggers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Volume and rate limits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>ICP fit requirements for progression</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>Time-based operational windows</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Observability & Audit Trails */}
        <section className="py-24 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-12 scroll-animate">
              <div className="w-12 h-12 bg-muted/50 border border-border/50 flex items-center justify-center rounded-lg flex-shrink-0">
                <Eye className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Observability & Audit Trails</h2>
                <p className="text-muted-foreground text-lg">
                  Full transparency. Every action logged, timestamped, and attributed. Real-time monitoring and
                  reporting.
                </p>
              </div>
            </div>

            <div className="space-y-8 ml-[72px]">
              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">What We Log</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border border-border/30 rounded-lg">
                    <h4 className="font-semibold mb-3">Action Logging</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Every action taken by Digital Counterparts</li>
                      <li>• Approval requests and decisions</li>
                      <li>• Data access and system interactions</li>
                      <li>• Workflow progressions and handoffs</li>
                      <li>• Error conditions and exceptions</li>
                    </ul>
                  </div>
                  <div className="p-6 border border-border/30 rounded-lg">
                    <h4 className="font-semibold mb-3">Performance Metrics</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Throughput and volume metrics</li>
                      <li>• Cycle time and velocity tracking</li>
                      <li>• Accuracy and quality scores</li>
                      <li>• Cost per action vs. headcount baseline</li>
                      <li>• SLA compliance and uptime</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="scroll-animate">
                <h3 className="text-xl font-semibold mb-4">Observability Dashboard</h3>
                <div className="p-6 border border-border/30 rounded-lg">
                  <p className="text-muted-foreground mb-4">
                    Real-time monitoring dashboard with full visibility into system health and performance.
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Live activity feed showing all actions and decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Performance metrics dashboard (throughput, cycle time, accuracy)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Approval queue with pending requests and escalations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Alert system for exceptions and threshold breaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Exportable audit logs for compliance and review</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Standards */}
        <section className="py-24 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Compliance & Standards</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We follow industry-standard frameworks and maintain active compliance programs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="scroll-animate">
                <div className="p-6 border border-border/30 rounded-lg h-full">
                  <h3 className="text-xl font-semibold mb-4">Current Compliance</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>GDPR compliant data handling and privacy practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>CCPA compliant data access and deletion processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>HTTPS/TLS 1.3 encryption for all data transmission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>ISO 27001 aligned information security management</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="scroll-animate delay-100">
                <div className="p-6 border border-border/30 rounded-lg h-full">
                  <h3 className="text-xl font-semibold mb-4">In Progress</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">•</span>
                      <span>SOC 2 Type II certification (Q2 2026)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">•</span>
                      <span>HIPAA compliance for healthcare deployments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">•</span>
                      <span>ISO 27001 formal certification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">•</span>
                      <span>Industry-specific compliance frameworks as needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLA & Uptime */}
        <section className="py-24 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">SLA & Uptime Guarantees</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Infrastructure means reliability. We commit to uptime and response SLAs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="scroll-animate">
                <div className="p-6 border border-border/30 rounded-lg text-center">
                  <div className="text-4xl font-serif mb-2">99.9%</div>
                  <div className="text-sm font-semibold mb-2">Uptime SLA</div>
                  <p className="text-sm text-muted-foreground">
                    Monitored 24/7 with automatic failover and incident response
                  </p>
                </div>
              </div>
              <div className="scroll-animate delay-100">
                <div className="p-6 border border-border/30 rounded-lg text-center">
                  <div className="text-4xl font-serif mb-2">&lt;2hr</div>
                  <div className="text-sm font-semibold mb-2">Critical Response</div>
                  <p className="text-sm text-muted-foreground">
                    Critical incidents acknowledged within 2 hours, 24/7
                  </p>
                </div>
              </div>
              <div className="scroll-animate delay-200">
                <div className="p-6 border border-border/30 rounded-lg text-center">
                  <div className="text-4xl font-serif mb-2">&lt;24hr</div>
                  <div className="text-sm font-semibold mb-2">Standard Response</div>
                  <p className="text-sm text-muted-foreground">
                    Standard support requests acknowledged within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center scroll-animate">
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">Questions About Governance?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Schedule a System Audit to discuss your governance requirements, compliance needs, and security controls.
            </p>
            <CalBookingButton size="lg">Request a System Audit</CalBookingButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
