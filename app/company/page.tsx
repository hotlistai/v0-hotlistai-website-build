import type { Metadata } from "next"
import Image from "next/image"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "About",
  description:
    "HotlistAI is the Agent Tech Concierge for real estate teams — built by Johnny Apple to audit follow-up, fix what is broken, and keep systems running.",
  alternates: { canonical: "/company" },
}

const proofPoints = [
  {
    title: "Real estate first",
    description:
      "Six years inside lead generation, follow-up systems, and CRM discipline for agents and teams — not generic software consulting.",
  },
  {
    title: "Simple beats clever",
    description:
      "If agents cannot run it every day, it does not count. We build follow-up systems your whole team can understand.",
  },
  {
    title: "Ongoing beats one-time",
    description:
      "Systems drift. Your Tech Concierge keeps follow-up working after the initial fix — so tech does not become your problem again.",
  },
]

export default function CompanyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        <section className="py-24 md:py-32 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">About</p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.95] max-w-4xl mb-8">
              Your Agent Tech Concierge — built from real follow-up work.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Most teams do not need more software. They need someone who understands both real estate follow-up and the
              tech behind it — who can audit the system, fix what is broken, and stay available when things drift.
            </p>
          </div>
        </section>

        <section className="py-24 px-4 md:px-6 border-b border-border/40 bg-muted/10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">Founder</p>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-8">Meet Johnny Apple.</h2>
              <div className="overflow-hidden rounded-2xl border border-border/40 bg-background">
                <Image
                  src="/ja-profile-headshot-2026-vertical.jpeg"
                  alt="Johnny Apple"
                  width={914}
                  height={1142}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-auto w-full grayscale"
                  priority
                />
              </div>
            </div>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Johnny Apple is a North Dallas realtor and systems operator based in Frisco, Texas. His work sits at the
                intersection of lead generation, follow-up execution, and practical workflow design for real estate teams.
              </p>
              <p>
                Over six years, he has worked through the real problems that happen after a lead enters the system:
                delayed response, unclear ownership, forgotten contacts, and the quiet loss of opportunities that were
                already paid for.
              </p>
              <p>
                He has worked with teams from Keller Williams, Monument Realty, Compass, and Berkshire Hathaway — getting
                close to the process before recommending a fix.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">How We Work</p>
            <div className="grid md:grid-cols-3 gap-4">
              {proofPoints.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/40 bg-muted/20 p-6">
                  <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">Start Here</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
              Software only helps when the system is clear.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Most agents already have tools. The advantage comes from knowing who needs attention, what should happen
              next, and which opportunities are being missed — every single day.
            </p>
            <CalBookingButton size="lg">Book Your Lead Follow-Up Audit</CalBookingButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}