"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, FileText, Shield, Scale, Copyright } from "lucide-react"

const legalDocs = [
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your information.",
    href: "/privacy",
    icon: Shield,
  },
  {
    title: "Terms of Service",
    description: "The rules and guidelines for using our services.",
    href: "/terms",
    icon: FileText,
  },
]

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex p-3 rounded-xl bg-muted/80"
              >
                <Scale className="h-6 w-6" />
              </motion.div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Legal</h1>
              <p className="text-lg text-muted-foreground">
                HotlistAI respects your privacy and operates with clarity. Here you'll find transparent policies on how
                we collect, use, and protect your information.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {legalDocs.map((doc, index) => {
                const Icon = doc.icon
                return (
                  <motion.div
                    key={doc.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ x: 4, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Link
                        href={doc.href}
                        className="group flex items-center gap-4 p-6 rounded-2xl border border-border/30 hover:border-border/60 hover:bg-muted/30 transition-all duration-300"
                      >
                        <div className="p-3 rounded-xl bg-muted/80">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h2 className="font-semibold mb-1 group-hover:text-foreground transition-colors">
                            {doc.title}
                          </h2>
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 space-y-6"
            >
              <div className="p-6 rounded-2xl bg-muted/20 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-muted/80">
                    <Copyright className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="font-semibold mb-2">Trademark & Copyright</h2>
                    <p className="text-sm text-muted-foreground">
                      HotlistAI, the HotlistAI logo, and all related names, logos, product and service names, designs,
                      and slogans are trademarks of HotlistAI Labs, LLC. All content on this site is protected by
                      copyright.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-muted/20 border border-border/30">
                <h2 className="font-semibold mb-2">Questions?</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Questions? Reach our legal team at legal@hotlistai.com.
                </p>
                <a href="mailto:legal@hotlistai.com" className="text-sm font-medium text-foreground hover:underline">
                  legal@hotlistai.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
