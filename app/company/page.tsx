"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CalBookingButton } from "@/components/cal-booking-button"
import { Building2, Users, TrendingUp, Mail, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimations } from "@/lib/scroll-animations"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "HotlistAI is Digital Workforce Infrastructure. We deploy Digital Counterparts - autonomous role-holders that replace operational headcount. Led by an Inc. 5000 operator.",
  keywords: [
    "HotlistAI company",
    "Digital Workforce Infrastructure",
    "about HotlistAI",
    "deployment firm",
    "AI infrastructure company",
    "Inc 5000 AI company",
    "operational efficiency company",
    "workforce automation company",
  ],
  openGraph: {
    title: "About | HotlistAI",
    description:
      "Digital Workforce Infrastructure. We deploy Digital Counterparts - autonomous role-holders that replace operational headcount.",
    url: "https://hotlistai.com/company",
    siteName: "HotlistAI",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HotlistAI - About the Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | HotlistAI",
    description:
      "Digital Workforce Infrastructure. We deploy Digital Counterparts - autonomous role-holders that replace operational headcount.",
    images: ["/og-image.jpg"],
    creator: "@hotlistai",
  },
  alternates: {
    canonical: "/company",
  },
}

export default function CompanyPage() {
  useScrollAnimations()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        {/* Hero */}
        <section className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">About</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.1] mb-8">
              We install workforce infrastructure.
            </h1>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                HotlistAI is Digital Workforce Infrastructure. We deploy Digital Counterparts - autonomous role-holders
                that replace operational headcount across Growth, Operations, and Executive Execution.
              </p>
              <p>We do not sell tools. We install capacity.</p>
              <p>
                Every deployment is governed, measured, and repeatable. We turn payroll drag into licensed throughput.
              </p>
            </div>
          </div>
        </section>

        {/* What We Are */}
        <section className="py-24 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">What We Are</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We are an infrastructure company, not a studio, not a lab, not an agency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Infrastructure Company",
                  description:
                    "Repeatable installs. Controlled systems. Measurable outputs. Governance. Uptime guarantees.",
                },
                {
                  icon: Users,
                  title: "Deployment Firm",
                  description:
                    "We install production systems in real businesses. 7-14 days from audit to go-live.",
                },
                {
                  icon: Shield,
                  title: "Productized Factory",
                  description:
                    "Templates, blueprints, and workflows that reduce install time and increase margin.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`scroll-animate delay-${(index + 1) * 100} p-6 border border-border/30 rounded-lg`}
                >
                  <item.icon className="w-8 h-8 mb-4 text-foreground" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="scroll-animate">
                <h2 className="text-2xl md:text-3xl font-serif tracking-tight mb-6">Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To replace operational drag with autonomous digital speed.
                </p>
              </div>
              <div className="scroll-animate delay-100">
                <h2 className="text-2xl md:text-3xl font-serif tracking-tight mb-6">Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where the smallest teams can produce enterprise-level output because labor becomes software. A
                  zero marginal cost operations layer becomes standard - like cloud infrastructure did for compute.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We're Different */}
        <section className="py-24 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">How We're Different</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We win by being deployable, governable, and measurable.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Not Consulting",
                  description:
                    "We don't deliver slide decks. We install production systems with SLAs and ongoing uptime guarantees.",
                },
                {
                  title: "Not Software Licenses",
                  description:
                    "You're not buying a tool to learn. You're licensing governed capacity that owns outcomes and produces work.",
                },
                {
                  title: "Not Agent Apps",
                  description:
                    "Agents are being commoditized into platforms. We sell installs and outcomes. The last mile is where value is created.",
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
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-3xl mx-auto">
            <div className="scroll-animate">
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-8">Built by Operators</h2>

              {/* Inc. 5000 Credibility */}
              <div className="p-6 rounded-xl border border-border/40 bg-muted/20 flex items-start gap-6 mb-8">
                <Image
                  src="https://deposco.com/wp-content/uploads/2023/08/Inc.-5000-Color-Medallion-Logo.png"
                  alt="Inc. 5000 Fastest-Growing Companies"
                  width={80}
                  height={80}
                  className="shrink-0"
                />
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Founded by Philip Pines, an operator behind a company ranked{" "}
                    <span className="text-foreground font-semibold">#212 on the Inc. 5000</span> Fastest-Growing
                    Companies list.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We bring the same operational rigor - speed, accountability, and results - to workforce
                    infrastructure.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  HotlistAI was born from a simple observation: as companies grow, headcount increases, coordination
                  explodes, and margin gets crushed.
                </p>
                <p>
                  We built infrastructure to solve this. Not tools. Not consulting. Infrastructure that installs like
                  cloud compute and scales like software.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-24 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-3xl mx-auto">
            <div className="scroll-animate">
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">Location</p>
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">Based in Texas</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Headquartered in The Colony, Texas. We deploy systems nationwide and work with operators who value speed,
                clarity, and real outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Press & Media */}
        <section id="press" className="py-24 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-3xl mx-auto">
            <div className="scroll-animate">
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">Press & Media</p>
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">Media Inquiries</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                For interviews, partnerships, or media coverage about Digital Workforce Infrastructure.
              </p>

              <div className="space-y-4">
                <div className="p-6 rounded-xl border border-border/40 bg-muted/20 flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-0.5 text-muted-foreground shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold mb-1">Press Contact</h3>
                    <p className="text-sm text-muted-foreground mb-3">For media inquiries and interviews.</p>
                    <a
                      href="mailto:marketing@hotlistai.com"
                      className="text-sm font-medium hover:opacity-70 transition-opacity"
                    >
                      marketing@hotlistai.com
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-border/40 bg-muted/20">
                  <h3 className="font-semibold mb-3">Quick Facts</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong className="text-foreground">Category:</strong> Digital Workforce Infrastructure</li>
                    <li>• <strong className="text-foreground">Founded:</strong> 2024</li>
                    <li>• <strong className="text-foreground">Location:</strong> The Colony, Texas</li>
                    <li>• <strong className="text-foreground">Founder:</strong> Philip Pines (Inc. 5000 #212)</li>
                    <li>• <strong className="text-foreground">What We Do:</strong> Deploy autonomous role-holders that replace operational headcount</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center scroll-animate">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
              Replace Headcount with Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
              Start with a System Audit. We map your workflows, calculate overhead cost, and propose a deployment plan.
            </p>
            <CalBookingButton size="lg">Request a System Audit</CalBookingButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
