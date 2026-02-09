import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Terminal, Lock, Code2, Mail, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Company",
  description:
    "Hotlist AI is an AI venture studio building digital counterparts that multiply human potential. Led by an Inc. 5000 operator. Learn about our mission, developer infrastructure, and how to partner with us.",
  keywords: [
    "Hotlist AI company",
    "about Hotlist AI",
    "AI venture studio",
    "AI company Texas",
    "digital counterparts company",
    "Inc 5000 AI company",
    "AI startup about",
    "developer API infrastructure",
    "press inquiries AI",
    "The Foundry developer platform",
  ],
  openGraph: {
    title: "Company | Hotlist AI",
    description:
      "AI venture studio building digital counterparts that multiply human potential. Led by an Inc. 5000 operator.",
    url: "https://hotlistai.com/company",
    siteName: "Hotlist AI",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotlist AI - About the Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company | Hotlist AI",
    description:
      "AI venture studio building digital counterparts that multiply human potential. Led by an Inc. 5000 operator.",
    images: ["/og-image.jpg"],
    creator: "@hotlistai",
  },
  alternates: {
    canonical: "/company",
  },
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* ── WHO WE ARE ── */}
        <section className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">
              Who We Are
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.1] mb-8">
              We build digital counterparts that multiply human potential.
            </h1>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hotlist AI builds beautifully simple intelligence systems that create clarity, speed, and real leverage. We don't build tools — we build digital counterparts.
              </p>
              <p>
                Our products — including Estate Mogul, Hotlist Funnels, and LyftEmail — give founders and operators specialized AI coworkers that understand context, make decisions, and deliver outcomes.
              </p>
              <p>
                Founded on the belief that AI should simplify work rather than complicate it, we create products that are premium, understated, and powerful. Every system goes through rigorous testing in our Lab before launch.
              </p>
            </div>

            {/* Inc. 5000 Credibility Strip */}
            <div className="mt-12 p-6 rounded-xl border border-border/40 bg-muted/20 flex items-center gap-6">
              <Image
                src="https://deposco.com/wp-content/uploads/2023/08/Inc.-5000-Color-Medallion-Logo.png"
                alt="Inc. 5000 Fastest-Growing Companies"
                width={80}
                height={80}
                className="shrink-0"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Led by an operator behind a company ranked <span className="text-foreground font-semibold">#212 on the Inc. 5000</span> Fastest-Growing Companies list. We bring that same operational rigor — speed, accountability, and results — to everything we build.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE FOUNDRY ── */}
        <section id="foundry" className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">
              Developer Infrastructure
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-[1.1] mb-6">
              The Foundry
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Where intelligence systems are forged, tested, and deployed. We're building the infrastructure for programmatic Digital Counterparts — REST APIs, SDKs, webhooks, and self-hosted deployment options.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="p-5 rounded-xl border border-border/40 bg-background">
                <Code2 className="h-5 w-5 mb-3 text-muted-foreground" strokeWidth={1.5} />
                <h3 className="font-semibold text-sm mb-1">REST API</h3>
                <p className="text-sm text-muted-foreground">Deploy intelligence systems via HTTP.</p>
              </div>
              <div className="p-5 rounded-xl border border-border/40 bg-background">
                <Terminal className="h-5 w-5 mb-3 text-muted-foreground" strokeWidth={1.5} />
                <h3 className="font-semibold text-sm mb-1">SDKs</h3>
                <p className="text-sm text-muted-foreground">TypeScript, Python, and Go client libraries.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border/40 bg-background flex items-center gap-4">
              <Lock className="h-5 w-5 text-muted-foreground shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">API Access: Coming Soon</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Developer documentation and SDK access under development.{" "}
                  <Link href="/contact" className="underline underline-offset-2 hover:text-foreground transition-colors">
                    Request early access
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRESS & MEDIA ── */}
        <section id="press" className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">
              Press & Media
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-[1.1] mb-6">
              Media Inquiries
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Hotlist AI is the engine behind a new generation of AI-powered business tools. We build with clarity, ship with speed, and measure by real outcomes.
            </p>

            <div className="grid gap-4">
              <div className="p-6 rounded-xl border border-border/40 bg-muted/20 flex items-start gap-4">
                <Mail className="h-5 w-5 mt-0.5 text-muted-foreground shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-semibold mb-1">Press Inquiries</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    For interviews, partnerships, or media coverage.
                  </p>
                  <a
                    href="mailto:marketing@hotlistai.com"
                    className="text-sm font-medium hover:opacity-70 transition-opacity"
                  >
                    marketing@hotlistai.com
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border/40 bg-muted/20 flex items-start gap-4">
                <Download className="h-5 w-5 mt-0.5 text-muted-foreground shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-semibold mb-1">Brand Assets</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Download our logo, brand guidelines, and media kit for press coverage.
                  </p>
                  <button
                    type="button"
                    className="text-sm font-medium px-5 py-2 rounded-full border border-border/50 hover:border-foreground/40 transition-colors"
                  >
                    Download Brand Kit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BUILDING SOMETHING MEANINGFUL ── */}
        <section className="py-24 md:py-32 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 text-balance">
              Building Something Meaningful?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
              We work with founders and operators who value clarity, speed, and systems that actually work. If that sounds like you, let's talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
