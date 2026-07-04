import type { Metadata } from "next"
import Image from "next/image"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "About",
  description:
    "HotlistAI was built by Johnny Apple to help real-estate teams find and fix follow-up leaks inside the CRM they already use.",
  alternates: { canonical: "/company" },
}

const proofPoints = [
  {
    title: "Real estate first",
    description:
      "Built from six years around lead generation, CRM discipline, AI-assisted follow-up, and nurture systems.",
  },
  {
    title: "Top brokerage exposure",
    description:
      "Johnny has worked with teams from Keller Williams, Monument Realty, Compass, and Berkshire Hathaway.",
  },
  {
    title: "Process obsessed",
    description:
      "The work starts by understanding how leads enter, who owns them, what happens next, and where the team loses visibility.",
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
              Built from the work, not from the trend.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              HotlistAI exists to help real-estate operators turn scattered CRM activity, inconsistent follow-up, and
              buried lead opportunity into cleaner systems their teams can actually run.
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
                intersection of lead generation, follow-up execution, CRM structure, and practical workflow design.
              </p>
              <p>
                Over six years, he has worked through the real problems that happen after a lead enters the system:
                delayed response, unclear ownership, forgotten nurture, old database value, and the quiet loss of
                opportunities that were already paid for.
              </p>
              <p>
                He has worked with teams from Keller Williams, Monument Realty, Compass, and Berkshire Hathaway, and he
                prefers getting close to the process before recommending a fix.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">Operating Beliefs</p>
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
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
              Software is only useful when the system is clear.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Most agents already have tools. The advantage comes from turning those tools into a daily rhythm: who needs
              attention, what stage they are in, what message should go next, and which opportunities are being missed.
            </p>
            <CalBookingButton size="lg">Book a Follow-Up Leak Audit</CalBookingButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
