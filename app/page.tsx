"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Building, Mail, Zap } from "lucide-react"
import Link from "next/link"
import { useScrollAnimations } from "@/lib/scroll-animations"

const DeploymentCard = ({
  title,
  tag,
  description,
  icon: Icon,
  featured = false,
}: {
  title: string
  tag: string
  description: string
  icon: any
  featured?: boolean
}) => (
  <div
    className={`group relative p-8 border border-border/50 bg-card hover:border-foreground/20 transition-all duration-300 hover:scale-[1.01] ${
      featured ? "md:col-span-2" : ""
    }`}
  >
    <div className="absolute top-6 right-6 flex items-center gap-2">
      <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground border border-border/50 px-2 py-1 rounded-sm">
        {tag}
      </span>
    </div>
    <div className="mb-6">
      <div className="w-12 h-12 bg-muted/50 border border-border/50 flex items-center justify-center rounded-lg group-hover:bg-muted transition-colors">
        <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
      </div>
    </div>
    <h3 className="font-serif text-3xl mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed max-w-md">{description}</p>

    <div className="mt-8 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
      View Deployment <ArrowRight className="w-4 h-4" />
    </div>
  </div>
)

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
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Studio Active</span>
              </div>

              <h1
                id="hero-heading"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.9] text-balance animate-fade-in-up delay-100"
              >
                The AI Operating System <br />
                <span className="text-muted-foreground">for Digital Counterparts.</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                AI venture studio building intelligent automation systems, digital counterparts, and high-converting
                lead generation funnels for modern businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up delay-300">
                <Link
                  href="/lab"
                  className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 active:scale-95"
                >
                  Explore The Lab
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/hotlist-funnels"
                  className="group inline-flex items-center justify-center gap-2 border border-border/50 px-8 py-4 rounded-full text-lg font-medium transition-all hover:border-foreground/40 hover:scale-105 active:scale-95"
                >
                  View Hotlist Funnels
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500" aria-hidden="true">
              <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5 animate-float">
                <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
              </div>
            </div>
          </section>

          <section className="py-24 border-t border-border/40 bg-muted/20" aria-labelledby="products-heading">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <header className="text-center mb-12 scroll-animate">
                <h2 id="products-heading" className="font-serif text-4xl md:text-5xl mb-4">
                  Featured Products
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Production-ready AI systems actively deployed across real estate, communications, and productivity.
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="group p-8 bg-card border border-border/50 rounded-lg hover:border-foreground/20 hover:scale-[1.02] transition-all scroll-animate">
                  <div className="w-12 h-12 bg-muted/50 border border-border/50 flex items-center justify-center rounded-lg mb-6 group-hover:bg-muted transition-colors">
                    <Building className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-green-600 border border-green-600/30 px-2 py-1 rounded-sm bg-green-500/10">
                      Active Deployment
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl mb-3">Estate Mogul</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Digital boardroom for real estate. Six specialized agents managing assets, contracts, and tenant
                    relations.
                  </p>
                  <Link
                    href="/lab#estate-mogul"
                    className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="group p-8 bg-card border border-border/50 rounded-lg hover:border-foreground/20 hover:scale-[1.02] transition-all scroll-animate delay-100">
                  <div className="w-12 h-12 bg-muted/50 border border-border/50 flex items-center justify-center rounded-lg mb-6 group-hover:bg-muted transition-colors">
                    <Mail className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-green-600 border border-green-600/30 px-2 py-1 rounded-sm bg-green-500/10">
                      Active Deployment
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl mb-3">LyftEmail</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Communication intelligence designed for speed. Inbox zero is not a goal—it's a default setting.
                  </p>
                  <Link
                    href="/lab#lyftemail"
                    className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="group p-8 bg-card border border-border/50 rounded-lg hover:border-foreground/20 hover:scale-[1.02] transition-all scroll-animate delay-200">
                  <div className="w-12 h-12 bg-muted/50 border border-border/50 flex items-center justify-center rounded-lg mb-6 group-hover:bg-muted transition-colors">
                    <Zap className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground border border-border/50 px-2 py-1 rounded-sm">
                      Beta
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl mb-3">PRIME</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The OS for your LLM. Transforms vague ideas into precision-built, world-class AI prompts.
                  </p>
                  <Link
                    href="/lab#prime"
                    className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="text-center scroll-animate">
                <Link
                  href="/lab"
                  className="inline-flex items-center gap-2 text-sm font-medium border-b border-border/50 hover:border-foreground transition-colors"
                >
                  View all products in The Lab <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section
            className="py-20 md:py-32 px-4 md:px-6 border-t border-border/40"
            aria-labelledby="philosophy-heading"
          >
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-16 scroll-animate">
                <h2 id="philosophy-heading" className="text-3xl md:text-4xl font-serif tracking-tight mb-4">
                  Our Philosophy: Built Different
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Every system we release goes through pressure testing, refinement, and real-world validation.
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Clarity over Complexity",
                    description: "Only ship what makes things clearer.",
                  },
                  {
                    title: "Speed over Sprawl",
                    description: "Momentum matters. Fast beats perfect.",
                  },
                  {
                    title: "The Counterpart Model",
                    description: "We don't build tools. We build active agents.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`scroll-animate delay-${(index + 1) * 100} group p-6 md:p-8 rounded-xl bg-muted/30 border border-border/30 hover:border-border/60 hover:bg-muted/50 transition-all duration-300 hover:scale-105`}
                  >
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-32 px-4 md:px-6 border-t border-border/40" aria-labelledby="cta-heading">
            <div className="max-w-3xl mx-auto text-center scroll-animate">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-serif tracking-tight mb-6">
                Start Building with AI
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Join founders and operators using Hotlist AI to automate workflows, generate qualified leads, and scale
                their businesses with intelligent systems.
              </p>
              <Link
                href="/contact"
                className="px-10 py-4 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all inline-flex items-center gap-2 group hover:scale-105 active:scale-95"
              >
                Get Started
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
