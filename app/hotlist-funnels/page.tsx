"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Building, Zap, Users, Mail, Cpu, Box } from "lucide-react"
import Link from "next/link"
import { useScrollAnimations } from "@/lib/scroll-animations"

const FunnelCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: any
}) => (
  <div className="group p-8 border border-border/50 bg-card hover:border-foreground/20 transition-all duration-300 hover:scale-[1.01]">
    <div className="mb-6">
      <div className="w-12 h-12 bg-muted/50 border border-border/50 flex items-center justify-center rounded-lg group-hover:bg-muted transition-colors">
        <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
      </div>
    </div>
    <h3 className="font-serif text-2xl mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>

    <div className="mt-8 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
      Learn more <ArrowRight className="w-4 h-4" />
    </div>
  </div>
)

export default function HotlistFunnelsPage() {
  useScrollAnimations()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <article>
          {/* Hero Section */}
          <section className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-card mb-6">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  High-Velocity Conversion
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-6 leading-tight">
                Hotlist Funnels
              </h1>
              <p className="text-2xl text-muted-foreground mb-4">Stop Guessing. Start Closing.</p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Mobile-first conversion funnels powered by Lead Intelligence. Built for speed, designed with behavioral
                psychology, and optimized for maximum ROI.
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="py-24 px-4 md:px-6 bg-muted/20 border-b border-border/40">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-serif mb-4">&lt;1s</div>
                  <h3 className="text-xl font-semibold mb-2">Load Time</h3>
                  <p className="text-muted-foreground">
                    Lightning-fast funnels built with Next.js. Your prospects engage before competitors load.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-serif mb-4">3x</div>
                  <h3 className="text-xl font-semibold mb-2">Better Engagement</h3>
                  <p className="text-muted-foreground">
                    Behavioral psychology and FOMO triggers drive immediate action and higher conversion rates.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-serif mb-4">47s</div>
                  <h3 className="text-xl font-semibold mb-2">Avg. Completion</h3>
                  <p className="text-muted-foreground">
                    Lead Intelligence captures qualified prospects in under 60 seconds vs. 4+ minute legacy forms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Industry Solutions */}
          <section className="py-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <header className="mb-12 text-center">
                <h2 className="font-serif text-4xl md:text-5xl mb-4">Industry Chameleon</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  One engine. Infinite applications. Custom funnels built for your industry and audience.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-border/40 shadow-sm">
                <FunnelCard
                  title="Real Estate"
                  icon={Building}
                  description="Turn web traffic into booked showings. Homeowner DNA verification and equity intelligence built-in."
                />

                <FunnelCard
                  title="Solar Installation"
                  icon={Zap}
                  description="Quote-to-install pipeline with automated lead qualification. Stop wasting ad budget on tire-kickers."
                />

                <FunnelCard
                  title="Law Firms"
                  icon={Box}
                  description="Client intake funnels that screen, qualify, and book consultations automatically."
                />

                <FunnelCard
                  title="Restaurants"
                  icon={Users}
                  description="Never scramble for staff again. Recruiting funnels that keep your kitchen fully staffed."
                />

                <FunnelCard
                  title="Contractors"
                  icon={Building}
                  description="Lead-to-estimate system for home improvement. Turn inquiries into scheduled quotes instantly."
                />

                <FunnelCard
                  title="Blue Collar"
                  icon={Users}
                  description="Manufacturing and trades hiring pipelines. Find skilled workers on autopilot."
                />

                <FunnelCard
                  title="Nonprofits"
                  icon={Mail}
                  description="Donor engagement funnels that build recurring support automatically."
                />

                <FunnelCard
                  title="Fitness"
                  icon={Cpu}
                  description="Trial-to-member funnels for gyms. Convert leads while they're motivated."
                />

                <FunnelCard
                  title="B2B SaaS"
                  icon={Zap}
                  description="Intent mapping to identify decision-makers by revenue, hiring signals, and tech-stack."
                />
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-24 px-4 md:px-6 border-t border-border/40 bg-muted/20">
            <div className="max-w-5xl mx-auto">
              <header className="text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl mb-4">Simple Pricing</h2>
                <p className="text-muted-foreground text-lg">Transparent. Results-driven. No surprises.</p>
              </header>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="p-8 bg-card border border-border/50 rounded-xl">
                  <h3 className="font-serif text-2xl mb-2">Starter</h3>
                  <div className="text-4xl font-serif mb-4">
                    $495<span className="text-lg text-muted-foreground">/mo</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">+ $495 setup</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>1 Core Funnel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Basic Lead Intel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>CRM Sync</span>
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 border border-border/50 rounded-full hover:border-foreground/40 transition-all"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="p-8 bg-foreground text-background border border-foreground rounded-xl relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                    Popular
                  </div>
                  <h3 className="font-serif text-2xl mb-2">Growth Accelerator</h3>
                  <div className="text-4xl font-serif mb-4">
                    $995<span className="text-lg opacity-70">/mo</span>
                  </div>
                  <p className="text-sm opacity-70 mb-6">+ $995 setup</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Unlimited Funnels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Full Lead Intelligence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>5k Outreach Contacts</span>
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-background text-foreground rounded-full hover:bg-background/90 transition-all"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-32 px-4 md:px-6 border-t border-border/40">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">Ready to Ignite?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Our onboarding is as fast as our funnels. Get your conversion engine live in 7 days or less.
              </p>
              <Link
                href="/contact"
                className="px-10 py-4 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all inline-flex items-center gap-2 group hover:scale-105 active:scale-95"
              >
                Calculate Your Revenue Potential
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
