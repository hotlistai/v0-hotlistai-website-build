"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"

export default function PrivacyPage() {
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
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Privacy Policy</h1>
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
                  <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
                  <p>
                    HotlistAI Labs, LLC ("HotlistAI," "we," "us," or "our") respects your privacy and is committed to
                    protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you visit our website hotlistai.com and use our services.
                  </p>
                  <p>
                    By using our services, you consent to the data practices described in this policy. If you do not
                    agree with the terms of this Privacy Policy, please do not access our services.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
                  <p>
                    <strong className="text-foreground">Personal Information:</strong> We may collect personally
                    identifiable information that you voluntarily provide, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Company name and job title</li>
                    <li>Account credentials</li>
                    <li>Payment and billing information</li>
                    <li>Communications you send to us</li>
                  </ul>
                  <p className="mt-4">
                    <strong className="text-foreground">Automatically Collected Information:</strong> When you access
                    our services, we automatically collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Device information (browser type, operating system, device identifiers)</li>
                    <li>Log data (IP address, access times, pages viewed)</li>
                    <li>Usage data (features used, interactions with our services)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Send you technical notices, updates, and administrative messages</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
                    <li>Personalize and improve your experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">4. Information Sharing and Disclosure</h2>
                  <p>
                    We do not sell your personal information. We may share your information in the following situations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-foreground">Service Providers:</strong> With third-party vendors who
                      perform services on our behalf (hosting, analytics, payment processing)
                    </li>
                    <li>
                      <strong className="text-foreground">Business Transfers:</strong> In connection with a merger,
                      acquisition, or sale of assets
                    </li>
                    <li>
                      <strong className="text-foreground">Legal Requirements:</strong> When required by law or to
                      respond to legal process
                    </li>
                    <li>
                      <strong className="text-foreground">Protection of Rights:</strong> To protect the rights,
                      property, and safety of HotlistAI and others
                    </li>
                    <li>
                      <strong className="text-foreground">With Your Consent:</strong> When you have given us permission
                      to share
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">5. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures designed to protect your
                    personal information against unauthorized access, alteration, disclosure, or destruction. These
                    measures include encryption, access controls, and secure data storage.
                  </p>
                  <p>
                    However, no method of transmission over the Internet or electronic storage is completely secure.
                    While we strive to protect your personal information, we cannot guarantee its absolute security.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">6. Data Retention</h2>
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes for which it
                    was collected, including to satisfy legal, accounting, or reporting requirements. The retention
                    period may vary depending on the context and our legal obligations.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">7. Your Rights and Choices</h2>
                  <p>Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-foreground">Access:</strong> Request access to your personal data
                    </li>
                    <li>
                      <strong className="text-foreground">Correction:</strong> Request correction of inaccurate or
                      incomplete data
                    </li>
                    <li>
                      <strong className="text-foreground">Deletion:</strong> Request deletion of your personal data
                    </li>
                    <li>
                      <strong className="text-foreground">Portability:</strong> Request a copy of your data in a
                      portable format
                    </li>
                    <li>
                      <strong className="text-foreground">Opt-Out:</strong> Opt out of marketing communications
                    </li>
                    <li>
                      <strong className="text-foreground">Withdraw Consent:</strong> Withdraw consent where processing
                      is based on consent
                    </li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at{" "}
                    <a href="mailto:privacy@hotlistai.com" className="text-foreground underline">
                      privacy@hotlistai.com
                    </a>
                    .
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">8. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to collect and store information about your
                    interactions with our services. You can control cookies through your browser settings, though
                    disabling cookies may affect functionality.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">9. Third-Party Links</h2>
                  <p>
                    Our services may contain links to third-party websites. We are not responsible for the privacy
                    practices of these external sites. We encourage you to review their privacy policies.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">10. Children's Privacy</h2>
                  <p>
                    Our services are not directed to individuals under 18 years of age. We do not knowingly collect
                    personal information from children. If we learn that we have collected personal information from a
                    child, we will take steps to delete it.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">11. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your country of
                    residence. These countries may have different data protection laws. We take appropriate safeguards
                    to ensure your information remains protected.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">12. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by
                    posting the new policy on this page and updating the "Last updated" date. Your continued use of our
                    services after changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">13. Contact Us</h2>
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
                    <a href="mailto:privacy@hotlistai.com" className="text-foreground underline">
                      privacy@hotlistai.com
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
