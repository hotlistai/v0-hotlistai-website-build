"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Building, Mail, Users, Box, Cpu, Zap } from "lucide-react"
import Link from "next/link"
import { useScrollAnimations } from "@/lib/scroll-animations"

const ProductCard = ({
  id,
  title,
  tag,
  description,
  icon: Icon,
  featured = false,
}: {
  id: string
  title: string
  tag: string
  description: string
  icon: any
  featured?: boolean
}) => (
  <div
    id={id}
    className={`group relative p-8 border border-border/50 bg-card hover:border-foreground/20 transition-all duration-300 hover:scale-[1.01] ${
      featured ? "md:col-span-2" : ""
    }`}
  >
    <div className="absolute top-6 right-6 flex items-center gap-2">
      <span
        className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-sm ${
          tag === "Active Deployment"
            ? "text-green-600 border border-green-600/30 bg-green-500/10"
            : tag === "Beta"
              ? "text-blue-600 border border-blue-600/30 bg-blue-500/10"
              : "text-muted-foreground border border-border/50"
        }`}
      >
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
      Request Access <ArrowRight className="w-4 h-4" />
    </div>
  </div>
)

export default function LabPage() {
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
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Active Deployments
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-6 leading-tight">
                The Lab: AI Software Products
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Specialized AI agents and intelligent automation tools. Each system is production-ready and actively
                deployed across industries.
              </p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-border/40 shadow-sm">
                <ProductCard
                  id="estate-mogul"
                  featured={true}
                  title="Estate Mogul"
                  tag="Active Deployment"
                  icon={Building}
                  description="Digital boardroom for real estate. Six specialized agents managing assets, contracts, and tenant relations."
                />

                <ProductCard
                  id="lyftemail"
                  title="LyftEmail"
                  tag="Active Deployment"
                  icon={Mail}
                  description="Communication intelligence designed for speed. Inbox zero is not a goal—it's a default setting."
                />

                <ProductCard
                  id="prime"
                  title="PRIME"
                  tag="Beta"
                  icon={Zap}
                  description="The OS for your LLM. Transforms vague ideas into precision-built, world-class AI prompts."
                />

                <ProductCard
                  id="hotlist-video"
                  title="Hotlist Video"
                  tag="Coming Soon"
                  icon={Box}
                  description="Video generation system built for real estate agents. Professional property videos in minutes."
                />

                <ProductCard
                  id="hotlist-voice"
                  title="Hotlist Voice"
                  tag="Coming Soon"
                  icon={Cpu}
                  description="Voice AI that understands context. Natural conversation, real intelligence."
                />

                <ProductCard
                  id="talent-vibing"
                  title="TalentVibing"
                  tag="Coming Soon"
                  icon={Users}
                  description="Autonomous recruiting and vetting. The system finds talent before you know you need it."
                />

                <ProductCard
                  id="hello-finn"
                  title="HelloFinn"
                  tag="Coming Soon"
                  icon={Box}
                  description="Financial manager for founders. Track, forecast, and understand your business finances."
                />

                <ProductCard
                  id="hotlist-pediatrics"
                  title="Hotlist Pediatrics"
                  tag="Coming Soon"
                  icon={Users}
                  description="Healthcare patient hub for pediatric practices. Smart scheduling and patient engagement."
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-32 px-4 md:px-6 border-t border-border/40 bg-muted/20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">Ready to Deploy?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Request access to any of our AI systems. Setup takes 14 days. Results start immediately.
              </p>
              <Link
                href="/contact"
                className="px-10 py-4 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all inline-flex items-center gap-2 group hover:scale-105 active:scale-95"
              >
                Request Access
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
