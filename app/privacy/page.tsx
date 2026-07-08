"use client"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
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
              <p className="text-sm text-muted-foreground">Last updated: July 5, 2026</p>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This policy explains how Hotlist AI LLC collects and uses information when you visit hotlistengine.com,
                book a call, request an audit, or work with us on CRM follow-up systems.
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
                  <h2 className="text-xl font-semibold text-foreground">1. Who We Are</h2>
                  <p>
                    Hotlist AI LLC ("Hotlist," "we," "us," or "our") provides CRM follow-up audits, lead-flow
                    diagnostics, workflow strategy, automation support, reporting, and related implementation services
                    for real-estate teams and other business operators.
                  </p>
                  <p>
                    This Privacy Policy applies to our website, contact forms, booking flows, audit intake, email
                    communications, and related services. A separate written agreement, statement of work, or data
                    processing agreement may add more specific terms for a paid client engagement.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
                  <p>
                    <strong className="text-foreground">Information you provide:</strong> We may collect the
                    information you choose to send us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name, email address, phone number, company, role, and preferred contact details</li>
                    <li>Calendar booking details, call notes, audit requests, and intake form responses</li>
                    <li>Business goals, CRM setup details, lead sources, pipeline stages, tags, automations, and workflow notes</li>
                    <li>Files, screenshots, exports, reports, or other materials you provide for an audit or implementation</li>
                    <li>Billing, payment, and contract information when you purchase services</li>
                    <li>Messages you send through email, chat, forms, or other communication channels</li>
                  </ul>
                  <p>
                    <strong className="text-foreground">Client CRM and lead data:</strong> If you authorize us to
                    review or work inside your CRM, lead database, calendar, email, automation tools, or reporting
                    systems, we may process business records, lead metadata, contact history, task status, tags,
                    ownership fields, communication timing, and similar operational data needed to perform the work.
                  </p>
                  <p>
                    <strong className="text-foreground">Automatically collected information:</strong> When you visit
                    the site, we and our service providers may collect IP address, browser and device information,
                    referral source, pages viewed, clicks, approximate location, and usage data through cookies,
                    analytics tools, logs, and similar technologies.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">3. How We Use Information</h2>
                  <p>We use information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respond to inquiries, schedule calls, and provide requested information</li>
                    <li>Evaluate whether a follow-up leak audit or implementation is a fit</li>
                    <li>Analyze CRM follow-up gaps, routing issues, stale-lead segments, task ownership, and workflow bottlenecks</li>
                    <li>Prepare scorecards, reports, recommendations, implementation plans, and related deliverables</li>
                    <li>Configure, test, improve, and support workflows, automations, dashboards, and reporting systems</li>
                    <li>Operate, secure, debug, and improve our website and services</li>
                    <li>Send administrative messages, service updates, and relevant business communications</li>
                    <li>Process payments, manage contracts, keep records, and comply with legal obligations</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">4. AI, Automation, and Operational Data</h2>
                  <p>
                    Some Hotlist work may involve AI-assisted analysis, workflow automation, or third-party AI tools.
                    We use these tools to support human review, summarize operational patterns, draft recommendations,
                    and help build systems. We do not intend to use client-provided CRM or lead data to train public AI
                    models.
                  </p>
                  <p>
                    You are responsible for making sure you have the right to share any CRM, lead, customer, agent,
                    brokerage, or business data you provide to us. Please do not send sensitive personal information
                    such as Social Security numbers, government IDs, full financial account numbers, health records, or
                    unrelated private consumer information unless we specifically request it in writing for a defined
                    purpose.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">5. How We Share Information</h2>
                  <p>We do not sell personal information. We may share information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-foreground">Service providers:</strong> Hosting, analytics, scheduling,
                      email, payment, CRM, automation, document, security, and support vendors that help us operate the
                      business.
                    </li>
                    <li>
                      <strong className="text-foreground">Authorized platforms:</strong> Third-party systems you ask us
                      to review, connect, configure, or support, such as CRMs, lead sources, calendar tools, and
                      communication platforms.
                    </li>
                    <li>
                      <strong className="text-foreground">Professional advisors:</strong> Lawyers, accountants,
                      insurers, or other advisors when reasonably necessary.
                    </li>
                    <li>
                      <strong className="text-foreground">Legal and safety reasons:</strong> When required by law,
                      legal process, or to protect rights, property, security, users, clients, or the public.
                    </li>
                    <li>
                      <strong className="text-foreground">Business transfers:</strong> In connection with a merger,
                      acquisition, financing, reorganization, or sale of assets.
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">6. Third-Party Tools</h2>
                  <p>
                    Our website and services may use third-party tools for hosting, analytics, performance monitoring,
                    scheduling, forms, payment processing, email, CRM access, automation, and communication. These
                    providers process information under their own terms and privacy policies. Examples may include
                    website hosting and analytics providers, calendar booking tools, payment processors, email tools,
                    and CRM or automation platforms you authorize us to access.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">7. Cookies and Analytics</h2>
                  <p>
                    We use cookies, pixels, tags, logs, and similar technologies to understand website traffic,
                    measure page performance, improve content, protect the site, and understand which services visitors
                    are interested in. You can control cookies through your browser settings, but some features may not
                    work as intended if cookies are disabled.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">8. Data Security</h2>
                  <p>
                    We use reasonable technical and organizational safeguards designed to protect information,
                    including access controls, secure hosting practices, and limited access to client materials. No
                    system is perfectly secure, and we cannot guarantee absolute security.
                  </p>
                  <p>
                    If we need access to a client system, we prefer permissioned user access, OAuth, limited-scope
                    access, or other auditable methods rather than shared master credentials whenever practical.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">9. Data Retention</h2>
                  <p>
                    We retain information for as long as needed to provide services, maintain business records, resolve
                    disputes, improve systems, comply with legal obligations, and enforce agreements. Client audit
                    materials and implementation records may be retained for operational continuity unless a written
                    agreement says otherwise or deletion is requested and legally permitted.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">10. Your Choices and Rights</h2>
                  <p>
                    Depending on your location, you may have rights to request access, correction, deletion, objection,
                    restriction, portability, or opt-out related to certain personal information. You may also opt out
                    of marketing emails by using the unsubscribe link or contacting us.
                  </p>
                  <p>
                    To make a privacy request, contact{" "}
                    <a href="mailto:privacy@hotlistai.com" className="text-foreground underline">
                      privacy@hotlistai.com
                    </a>
                    . We may need to verify your identity or authority before completing a request.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">11. Children&apos;s Privacy</h2>
                  <p>
                    Our services are intended for business users and are not directed to children under 18. We do not
                    knowingly collect personal information from children under 18.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">12. International Visitors</h2>
                  <p>
                    Hotlist is based in the United States. If you access the site or services from outside the United
                    States, your information may be processed in the United States or other countries where our service
                    providers operate.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">13. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. The updated version will be posted on this
                    page with a new "Last updated" date. Continued use of the site or services after an update means
                    the updated policy applies going forward.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">14. Contact Us</h2>
                  <p>
                    Privacy questions can be sent to{" "}
                    <a href="mailto:privacy@hotlistai.com" className="text-foreground underline">
                      privacy@hotlistai.com
                    </a>
                    . Legal questions can be sent to{" "}
                    <a href="mailto:legal@hotlistai.com" className="text-foreground underline">
                      legal@hotlistai.com
                    </a>
                    .
                  </p>
                  <p>
                    <strong className="text-foreground">Hotlist AI LLC</strong>
                    <br />
                    Website: hotlistengine.com
                    <br />
                    General inquiries:{" "}
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
