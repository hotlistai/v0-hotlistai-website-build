"use client"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
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
              <p className="text-sm text-muted-foreground">Last updated: July 5, 2026</p>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Terms of Service</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                These terms govern your use of hotlistengine.com and Hotlist services, including audit requests, CRM
                follow-up diagnostics, implementation work, and related business communications.
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
                    These Terms of Service ("Terms") are an agreement between you and Hotlist AI LLC ("Hotlist,"
                    "we," "us," or "our"). They govern your access to and use of hotlistengine.com, our forms, booking
                    flows, reports, communications, and related services (collectively, the "Services").
                  </p>
                  <p>
                    By accessing the site, booking a call, submitting information, requesting an audit, or using our
                    Services, you agree to these Terms. If you do not agree, do not use the Services.
                  </p>
                  <p>
                    Paid client work may also be governed by a proposal, statement of work, order form, invoice,
                    master services agreement, or other written agreement. If there is a conflict, the signed written
                    agreement controls for that specific engagement.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">2. What Hotlist Provides</h2>
                  <p>
                    Hotlist provides CRM follow-up audits, lead-flow diagnostics, business process review, stale-lead
                    recovery planning, routing and accountability recommendations, workflow implementation, automation
                    support, reporting, and related consulting or technical services.
                  </p>
                  <p>
                    Unless a written agreement says otherwise, Hotlist is not a CRM provider, real-estate brokerage,
                    advertising platform, payment processor, law firm, accounting firm, or financial advisor. Our work
                    is designed to improve operational clarity and execution, not to guarantee sales, appointments,
                    closings, revenue, rankings, or specific business outcomes.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">3. Eligibility and Authority</h2>
                  <p>
                    You must be at least 18 years old to use the Services. If you use the Services on behalf of a
                    company, team, brokerage, or organization, you represent that you have authority to do so and to
                    share the information, access, and materials you provide.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">4. Client Responsibilities</h2>
                  <p>You agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Make sure you have permission to share CRM, lead, client, agent, or business data with us</li>
                    <li>Maintain appropriate access controls and permissions inside your own systems</li>
                    <li>Review recommendations, reports, automations, and changes before relying on them operationally</li>
                    <li>Comply with applicable laws, platform rules, brokerage policies, MLS rules, privacy duties, and communication laws</li>
                    <li>Back up important data before authorizing imports, cleanup, configuration changes, or workflow changes</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">5. CRM Access, Data, and Third-Party Platforms</h2>
                  <p>
                    Many Hotlist services depend on third-party tools, including CRMs, lead sources, calendars,
                    email systems, analytics tools, automation tools, communication platforms, and payment providers.
                    You are responsible for your accounts with those providers and for complying with their terms.
                  </p>
                  <p>
                    If you authorize us to access or configure a third-party system, you remain responsible for the
                    accuracy, legality, backup, retention, and use of your data. We are not responsible for outages,
                    changes, limitations, billing issues, API restrictions, data loss, or policy decisions made by
                    third-party platforms.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">6. Acceptable Use</h2>
                  <p>You may not use the Services to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violate laws, regulations, platform rules, intellectual property rights, or privacy rights</li>
                    <li>Send spam, unlawful marketing, deceptive messages, or communications without proper consent</li>
                    <li>Upload malicious code, interfere with systems, or attempt unauthorized access</li>
                    <li>Misrepresent your identity, authority, brokerage affiliation, or relationship with another party</li>
                    <li>Provide data you are not authorized to provide</li>
                    <li>Use the Services to harass, discriminate, defraud, or harm others</li>
                    <li>Scrape, copy, reverse engineer, or misuse the site or our materials without permission</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">7. Audits, Reports, and Recommendations</h2>
                  <p>
                    Audits, scorecards, reports, implementation plans, scripts, workflow diagrams, and recommendations
                    are based on information available at the time of review. They may be incomplete if information is
                    missing, inaccurate, stale, or inaccessible.
                  </p>
                  <p>
                    You are responsible for reviewing deliverables before acting on them. Hotlist does not guarantee
                    that every follow-up gap, compliance issue, CRM problem, or business risk will be discovered.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">8. AI and Automation</h2>
                  <p>
                    We may use AI-assisted tools and automation to analyze workflows, summarize data, draft content,
                    generate recommendations, support implementation, or improve internal operations. AI-assisted
                    output may contain errors and should be reviewed by a human before use.
                  </p>
                  <p>
                    You are responsible for approving outbound communications, automations, audience selections,
                    compliance language, and operational changes before they are used in your business.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">9. Fees and Payment</h2>
                  <p>
                    Fees, payment timing, deposits, subscriptions, implementation costs, expenses, cancellation terms,
                    and refund rules will be described in the applicable proposal, invoice, checkout flow, or written
                    agreement. Unless stated otherwise in writing, fees are due when invoiced and are non-refundable
                    once work has begun.
                  </p>
                  <p>
                    Late or failed payment may result in paused work, suspended access, delayed deliverables, or
                    termination of Services.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">10. Intellectual Property</h2>
                  <p>
                    <strong className="text-foreground">Our materials:</strong> The website, brand, copy, frameworks,
                    templates, designs, code, reports, processes, and other materials we create or provide are owned by
                    Hotlist or its licensors unless a written agreement says otherwise.
                  </p>
                  <p>
                    <strong className="text-foreground">Your materials:</strong> You retain ownership of data,
                    content, exports, screenshots, documents, and materials you provide to us. You grant us the rights
                    needed to use those materials to provide, support, secure, and improve the Services.
                  </p>
                  <p>
                    <strong className="text-foreground">Client deliverables:</strong> Your right to use deliverables
                    from a paid engagement is governed by the applicable written agreement. If no written agreement
                    says otherwise, you may use final deliverables internally for your business after full payment.
                  </p>
                  <p>
                    <strong className="text-foreground">Feedback:</strong> We may use feedback, suggestions, and ideas
                    you provide without restriction or obligation.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">11. Confidentiality</h2>
                  <p>
                    We understand that CRM data, lead records, sales processes, and internal workflows may be
                    confidential. We will use reasonable care to protect non-public client information and use it only
                    for the purposes of providing Services, unless disclosure is required by law or authorized by you.
                    Additional confidentiality terms may be included in a written agreement.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">12. No Guarantees</h2>
                  <p>
                    We do not guarantee specific outcomes, including revenue, appointments, response rates, lead
                    conversion, search rankings, ad performance, CRM adoption, compliance results, or platform uptime.
                    Business outcomes depend on many factors outside our control, including your team, market,
                    database quality, offer, response behavior, lead sources, platform limitations, and follow-through.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">13. Disclaimer of Warranties</h2>
                  <p>
                    THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW,
                    HOTLISTAI DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, AVAILABILITY, AND RELIABILITY.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">14. Limitation of Liability</h2>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, HOTLISTAI WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL,
                    SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST REVENUE, LOST
                    DATA, LOST GOODWILL, BUSINESS INTERRUPTION, OR COSTS OF SUBSTITUTE SERVICES.
                  </p>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIM RELATED TO THE SERVICES
                    WILL NOT EXCEED THE AMOUNT YOU PAID HOTLISTAI FOR THE SERVICES GIVING RISE TO THE CLAIM DURING THE
                    THREE (3) MONTHS BEFORE THE EVENT GIVING RISE TO LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER
                    IS GREATER.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">15. Indemnification</h2>
                  <p>
                    You agree to defend, indemnify, and hold harmless Hotlist and its owners, officers, contractors,
                    employees, agents, and affiliates from claims, damages, liabilities, losses, costs, and expenses
                    arising from your use of the Services, your data or materials, your violation of these Terms, your
                    violation of law or third-party rights, or your use of third-party platforms.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">16. Termination</h2>
                  <p>
                    We may suspend or terminate access to the Services if you violate these Terms, fail to pay, misuse
                    the Services, create security risk, or if continued service is impractical or unlawful. Sections
                    that by their nature should survive termination will survive, including payment obligations,
                    intellectual property, confidentiality, disclaimers, limitations of liability, and indemnity.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">17. Governing Law</h2>
                  <p>
                    Unless a written agreement says otherwise, these Terms are governed by the laws of the State of
                    Texas, without regard to conflict-of-law rules. You and Hotlist agree to resolve disputes in the
                    state or federal courts located in Texas, unless another venue is required by law or agreed in
                    writing.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">18. Changes to Terms</h2>
                  <p>
                    We may update these Terms from time to time. The updated version will be posted on this page with a
                    new "Last updated" date. Continued use of the site or Services after an update means you accept the
                    updated Terms.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">19. Contact Us</h2>
                  <p>
                    Questions about these Terms can be sent to{" "}
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
