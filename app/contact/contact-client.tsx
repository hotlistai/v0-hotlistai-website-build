"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { useState } from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      teamName: formData.get("teamName"),
      crm: formData.get("crm"),
      teamSize: formData.get("teamSize"),
      leadSources: formData.get("leadSources"),
      currentBottleneck: formData.get("currentBottleneck"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to send")
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please email us directly at info@hotlistai.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        <section className="py-20 md:py-32 px-4 md:px-6" aria-label="Lead Follow-Up Audit form">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 mb-12"
            >
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                Book Your Lead Follow-Up Audit
              </p>
              <h1 className="text-5xl sm:text-6xl font-serif tracking-tight leading-[0.95]">
                Tell us where follow-up feels weakest.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Share your team size, lead sources, and the bottleneck you feel today. We will look for the gaps that are
                costing you deals — slow response, forgotten contacts, unclear ownership, and overdue follow-up.
              </p>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-muted/30 border border-border/30 text-center"
                role="status"
                aria-live="polite"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground text-background mb-4"
                >
                  <Check className="h-6 w-6" aria-hidden="true" />
                </motion.div>
                <h2 className="text-xl font-semibold mb-2">Audit request sent</h2>
                <p className="text-muted-foreground">
                  We will review the details and follow up with the best next step.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm"
                    role="alert"
                  >
                    {error}
                  </motion.div>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field id="name" label="Name" autoComplete="name" placeholder="Your name" required />
                  <Field id="email" label="Email" type="email" autoComplete="email" placeholder="you@team.com" required />
                </div>
                <Field id="teamName" label="Team or brokerage" autoComplete="organization" placeholder="Team name" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field
                    id="crm"
                    label="What system do you use to track leads?"
                    placeholder="Follow Up Boss, Lofty, kvCORE..."
                    required
                  />
                  <Field id="teamSize" label="Team size" placeholder="5-25 agents, boutique office..." />
                </div>
                <Field id="leadSources" label="Main lead sources" placeholder="Zillow, Google, referrals, website..." />
                <TextArea
                  id="currentBottleneck"
                  label="Where does follow-up feel weakest?"
                  placeholder="Where are leads getting missed, delayed, or forgotten?"
                  required
                />
                <TextArea
                  id="message"
                  label="Anything else?"
                  placeholder="Share anything that would help us understand your current follow-up habits."
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                      aria-label="Sending audit request"
                    />
                  ) : (
                    <>
                      Book Your Lead Follow-Up Audit
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
  placeholder,
  required = false,
}: {
  id: string
  label: string
  type?: string
  autoComplete?: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {!required && <span className="text-muted-foreground ml-1">(optional)</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        autoComplete={autoComplete}
        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
        placeholder={placeholder}
      />
    </div>
  )
}

function TextArea({
  id,
  label,
  placeholder,
  required = false,
}: {
  id: string
  label: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {!required && <span className="text-muted-foreground ml-1">(optional)</span>}
      </label>
      <textarea
        id={id}
        name={id}
        required={required}
        rows={5}
        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all resize-none"
        placeholder={placeholder}
      />
    </div>
  )
}