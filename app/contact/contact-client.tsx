"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

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
      company: formData.get("company"),
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

      <main className="flex-1">
        <section className="py-20 md:py-32 px-4 md:px-6" aria-label="Contact form">
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 mb-12"
            >
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Get in touch</h1>
              <p className="text-lg text-muted-foreground">
                Have a question or want to work together? We'd love to hear from you.
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
                <h2 className="text-xl font-semibold mb-2">Message sent</h2>
                <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
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
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                    <span className="text-muted-foreground ml-1">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
                    placeholder="Your company"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
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
                      aria-label="Sending message"
                    />
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center text-sm text-muted-foreground"
            >
              Or email us directly at{" "}
              <a href="mailto:info@hotlistai.com" className="text-foreground hover:underline">
                info@hotlistai.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
