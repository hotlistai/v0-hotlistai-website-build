"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import { Terminal, Lock, Code2, Mail, ArrowRight } from "lucide-react"

export default function DevelopersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E5E5E5]">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 mb-16"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xs font-mono text-[#737373] tracking-wider uppercase"
              >
                Developer Infrastructure
              </motion.p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.1]">The Foundry</h1>
              <p className="text-lg md:text-xl text-[#A3A3A3] max-w-2xl leading-relaxed">
                Building the infrastructure for Digital Counterparts. Where intelligence systems are forged, tested, and
                deployed.
              </p>
            </motion.div>

            {/* Code Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 p-6 md:p-8 rounded-2xl bg-[#171717] border border-[#262626] font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-4 text-[#737373]">
                <Terminal className="h-4 w-4" />
                <span className="text-xs tracking-wider">API PREVIEW</span>
              </div>
              <div className="text-center py-8">
                <p className="text-lg text-[#737373] mb-2">Coming Soon</p>
                <p className="text-sm text-[#525252]">Full API documentation and code examples under development.</p>
              </div>
            </motion.div>

            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 md:p-12 rounded-2xl bg-[#171717] border border-[#262626] text-center"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="inline-flex p-4 rounded-2xl bg-[#0A0A0A] border border-[#262626] mb-6"
              >
                <Lock className="h-8 w-8 text-[#737373]" />
              </motion.div>
              <h2 className="text-2xl font-semibold mb-3">API Access: Restricted</h2>
              <p className="text-[#A3A3A3] mb-2 text-sm font-mono tracking-wide">STATUS / COMING SOON</p>
              <p className="text-[#A3A3A3] mb-8 max-w-md mx-auto leading-relaxed">
                Developer documentation, public APIs, and SDK access under development. Building infrastructure for
                programmatic Digital Counterparts.
              </p>
              <motion.a
                href="mailto:info@hotlistai.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-full bg-[#E5E5E5] text-[#0A0A0A] hover:bg-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                Request Early Access
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>

            {/* Technical Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 pt-16 border-t border-[#262626]"
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                What's Coming
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#171717] border border-[#262626]">
                  <h3 className="font-semibold mb-2">REST API</h3>
                  <p className="text-sm text-[#A3A3A3]">
                    Programmatic access to Digital Counterparts. Deploy intelligence systems via HTTP.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-[#171717] border border-[#262626]">
                  <h3 className="font-semibold mb-2">SDKs</h3>
                  <p className="text-sm text-[#A3A3A3]">
                    TypeScript, Python, and Go client libraries for seamless integration.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-[#171717] border border-[#262626]">
                  <h3 className="font-semibold mb-2">Webhooks</h3>
                  <p className="text-sm text-[#A3A3A3]">
                    Real-time event streaming from active counterparts to your infrastructure.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-[#171717] border border-[#262626]">
                  <h3 className="font-semibold mb-2">Self-Hosted</h3>
                  <p className="text-sm text-[#A3A3A3]">
                    Deploy Digital Counterparts within your own cloud environment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
