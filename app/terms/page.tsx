"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"

export default function TermsPage() {
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
              <p className="text-sm text-muted-foreground">Last updated: December 10, 2025</p>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Terms of Service</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                HotlistAI respects your privacy and operates with clarity. Here you'll find transparent policies on how
                we collect, use, and protect your information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-neutral dark:prose-invert max-w-none"
            >
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">1. Agreement to Terms</h2>
                  <p>
                    These Terms of Service ("Terms") constitute a legally binding agreement between you and HotlistAI
                    Labs, LLC ("HotlistAI," "we," "us," or "our") governing your access to and use of the hotlistai.com
                    website and any related services (collectively, the "Services").
                  </p>
                  <p>
                    By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any
                    part of these Terms, you may not access our Services.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">2. Eligibility</h2>
                  <p>
                    You must be at least 18 years old to use our Services. By using our Services, you represent and
                    warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">3. Account Registration</h2>
                  <p>
                    To access certain features of our Services, you may be required to create an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your information as necessary</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized access</li>
                  </ul>
                  <p className="mt-4">
                    We reserve the right to suspend or terminate accounts that violate these Terms.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">4. Acceptable Use</h2>
                  <p>You agree not to use our Services to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violate any applicable laws, regulations, or third-party rights</li>
                    <li>Upload or transmit malicious code, viruses, or harmful content</li>
                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                    <li>Interfere with or disrupt the integrity or performance of our Services</li>
                    <li>Engage in any form of automated data collection without permission</li>
                    <li>Reverse engineer, decompile, or attempt to extract source code</li>
                    <li>Use our Services to harass, abuse, or harm others</li>
                    <li>Impersonate any person or entity</li>
                    <li>Send spam or unsolicited communications</li>
                    <li>Engage in any fraudulent or deceptive practices</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">5. Intellectual Property</h2>
                  <p>
                    <strong className="text-foreground">Our Content:</strong> The Services and all content, features,
                    and functionality (including but not limited to software, text, graphics, logos, and designs) are
                    owned by HotlistAI Labs and are protected by copyright, trademark, and other intellectual property
                    laws.
                  </p>
                  <p>
                    <strong className="text-foreground">Your Content:</strong> You retain ownership of content you
                    submit through our Services. By submitting content, you grant us a worldwide, non-exclusive,
                    royalty-free license to use, reproduce, modify, and display such content in connection with
                    providing our Services.
                  </p>
                  <p>
                    <strong className="text-foreground">Feedback:</strong> Any feedback, suggestions, or ideas you
                    provide about our Services may be used by us without any obligation to you.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">6. Payment Terms</h2>
                  <p>
                    If you purchase paid Services, you agree to pay all applicable fees. All fees are non-refundable
                    unless otherwise stated. We reserve the right to change our pricing with reasonable notice.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment is due at the time of purchase or as otherwise specified</li>
                    <li>You are responsible for all taxes associated with your purchase</li>
                    <li>Failure to pay may result in suspension or termination of Services</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">7. Third-Party Services</h2>
                  <p>
                    Our Services may integrate with or contain links to third-party services. We are not responsible for
                    the content, policies, or practices of any third-party services. Your use of third-party services is
                    at your own risk.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">8. Disclaimer of Warranties</h2>
                  <p>
                    THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  <p>
                    We do not warrant that the Services will be uninterrupted, error-free, or secure, or that any
                    defects will be corrected.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">9. Limitation of Liability</h2>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, HOTLISTAI LABS SHALL NOT BE LIABLE FOR ANY INDIRECT,
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
                    PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
                  </p>
                  <p>
                    IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS
                    PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">10. Indemnification</h2>
                  <p>
                    You agree to indemnify, defend, and hold harmless HotlistAI Labs and its officers, directors,
                    employees, and agents from any claims, damages, losses, liabilities, and expenses (including
                    attorneys' fees) arising from your use of our Services or violation of these Terms.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">11. Termination</h2>
                  <p>
                    We may terminate or suspend your access to our Services immediately, without prior notice, for any
                    reason, including breach of these Terms. Upon termination, your right to use the Services will cease
                    immediately.
                  </p>
                  <p>
                    You may terminate your account at any time by contacting us. Provisions that by their nature should
                    survive termination shall survive, including intellectual property, warranty disclaimers, indemnity,
                    and limitations of liability.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">12. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
                    without regard to its conflict of law provisions. Any disputes arising under these Terms shall be
                    resolved in the state or federal courts located in Delaware.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">13. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will provide notice of material changes
                    by posting the updated Terms on our website and updating the "Last updated" date. Your continued use
                    of the Services after changes constitutes acceptance of the modified Terms.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">14. Severability</h2>
                  <p>
                    If any provision of these Terms is found to be unenforceable, the remaining provisions will continue
                    in full force and effect.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">15. Entire Agreement</h2>
                  <p>
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                    HotlistAI Labs regarding the Services and supersede all prior agreements.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">16. Contact Us</h2>
                  <p>
                    Questions? Reach our legal team at{" "}
                    <a href="mailto:legal@hotlistai.com" className="text-foreground underline">
                      legal@hotlistai.com
                    </a>
                    .
                  </p>
                  <p>
                    <strong className="text-foreground">HotlistAI Labs, LLC</strong>
                    <br />
                    Email:{" "}
                    <a href="mailto:legal@hotlistai.com" className="text-foreground underline">
                      legal@hotlistai.com
                    </a>
                    <br />
                    General Inquiries:{" "}
                    <a href="mailto:info@hotlistai.com" className="text-foreground underline">
                      info@hotlistai.com
                    </a>
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
