"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import { Mail, Download, ArrowRight } from "lucide-react"

export default function PressPageClient() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-20 md:py-32 px-4 md:px-6" aria-labelledby="press-heading">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 mb-16"
            >
              <h1 id="press-heading" className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">Press</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                HotlistAI Labs is the engine behind a new generation of AI-powered business tools. We build with
                clarity, ship with speed, and measure by real outcomes.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {/* Media Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="p-6 md:p-8 rounded-2xl bg-muted/30 border border-border/30 hover:border-border/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-muted">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Media Inquiries</h2>
                    <p className="text-muted-foreground mb-4">
                      For press inquiries, interviews, or partnership opportunities.
                    </p>
                    <motion.a
                      href="mailto:marketing@hotlistai.com"
                      whileHover={{ x: 2 }}
                      className="inline-flex items-center gap-2 text-foreground font-medium group"
                    >
                      marketing@hotlistai.com
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Brand Kit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="p-6 md:p-8 rounded-2xl bg-muted/30 border border-border/30 hover:border-border/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-muted">
                    <Download className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Brand Assets</h2>
                    <p className="text-muted-foreground mb-4">
                      Download our logo, brand guidelines, and media kit for press coverage.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-2.5 text-sm font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
                    >
                      Download Brand Kit
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 pt-16 border-t border-border/40"
            >
              <h2 className="text-2xl font-semibold tracking-tight mb-6">About HotlistAI Labs</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  HotlistAI Labs builds beautifully simple intelligence systems that create clarity, speed, and real
                  leverage. We don't build tools — we build digital counterparts.
                </p>
                <p>
                  Our products — including Estate Mogul, Hotlist Funnels, and LyftEmail — give founders and
                  operators specialized AI coworkers that understand context, make decisions, and deliver outcomes.
                </p>
                <p>
                  Founded on the belief that AI should simplify work rather than complicate it, we create products that
                  are premium, understated, and powerful. Every system goes through rigorous testing in our Lab before
                  launch.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
