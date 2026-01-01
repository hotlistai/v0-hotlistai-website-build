"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useScrollAnimations } from "@/lib/scroll-animations"

const values = [
  {
    title: "Clarity Over Complexity",
    description: "Only ship what makes things clearer. Every feature we build has a reason to exist.",
  },
  {
    title: "Speed Over Sprawl",
    description: "Momentum matters. We ship then iterate. Fast beats perfect.",
  },
  {
    title: "Design as Function",
    description: "Every pixel reduces friction. Design isn't decoration—it's communication.",
  },
  {
    title: "Real Outcomes",
    description: (
      <>
        <strong>Tools save time for founders and operators.</strong> We build for results, not dashboards.
      </>
    ),
  },
  {
    title: "Deep Work, Early Hours",
    description: "Protect mornings for deep work. Our best thinking happens before the world wakes up.",
  },
  {
    title: "Taste as Standard",
    description:
      "Details matter. Minimalism is power. The gap between good and great is often invisible—but always felt.",
  },
]

export default function EthosPageClient() {
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
                <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Our Ethos</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.1] text-balance">
                  How We Think.
                  <br />
                  <span className="text-muted-foreground">How We Build.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Hotlist AI is a point of view about how software should feel—fast, clear, and respectful of your time.
                </p>
              </div>
            </div>
          </section>

          {/* Values Grid */}
          <section className="py-16 md:py-24 px-4 md:px-6 border-t border-border/40" aria-label="Our values">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className={`scroll-animate delay-${(index % 3) * 100} group p-6 md:p-8 rounded-2xl bg-muted/30 border border-border/30 hover:border-border/60 hover:bg-muted/50 transition-all duration-300 hover:scale-105`}
                  >
                    <h2 className="text-lg font-semibold mb-3 group-hover:text-foreground transition-colors">
                      {value.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/20" aria-label="How we work">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8 scroll-animate">
                <h2 className="text-2xl md:text-3xl font-serif tracking-tight">Philosophy</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Conversation is the interface. We don't build dashboards that require training. We build systems you
                    talk to.
                  </p>
                  <p>
                    We say no more than we say yes. We value essentialism. Every feature added is maintenance owed.
                    Every decision compounds.
                  </p>
                  <p>
                    Every feature and word should be earned and direct. If it doesn't make things clearer, it doesn't
                    ship.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
