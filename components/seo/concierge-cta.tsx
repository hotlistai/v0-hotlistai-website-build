import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"

export function ConciergeCta() {
  return (
    <section className="rounded-3xl border border-border/40 bg-foreground text-background p-8 md:p-10 text-center">
      <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Start with a free Lead Follow-Up Audit.</h2>
      <p className="text-background/75 mb-8 max-w-xl mx-auto">
        See where follow-up is breaking in plain language — before you buy more leads or software.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <CalBookingButton size="lg" className="bg-background text-foreground hover:bg-background/90">
          Book Your Lead Follow-Up Audit
        </CalBookingButton>
        <Link
          href="/sample-leak-report"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-8 py-4 text-sm font-medium text-background hover:bg-background hover:text-foreground transition-colors"
        >
          See a Sample Audit Report <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}