"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CalBookingButton } from "@/components/cal-booking-button"
import { useScrollAnimations } from "@/lib/scroll-animations"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about HotlistAI's Digital Workforce Infrastructure, deployment process, governance, pricing, and implementation.",
  keywords: [
    "HotlistAI FAQ",
    "Digital Workforce Infrastructure FAQ",
    "deployment questions",
    "AI governance FAQ",
    "workforce automation FAQ",
    "Digital Counterparts FAQ",
    "installation process",
    "pricing FAQ",
  ],
  openGraph: {
    title: "Frequently Asked Questions | HotlistAI",
    description:
      "Get answers about HotlistAI's Digital Workforce Infrastructure, deployment process, governance, and pricing.",
    url: "https://hotlistai.com/faq",
    siteName: "HotlistAI",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HotlistAI FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | HotlistAI",
    description:
      "Get answers about HotlistAI's Digital Workforce Infrastructure, deployment process, and governance.",
    images: ["/og-image.jpg"],
    creator: "@hotlistai",
  },
  alternates: {
    canonical: "/faq",
  },
}

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What does HotlistAI do?",
        answer:
          "HotlistAI is Digital Workforce Infrastructure. We deploy Digital Counterparts - autonomous role-holders that replace operational headcount across Growth, Operations, and Executive Execution. We do not sell tools. We install capacity.",
      },
      {
        question: "What is a Digital Counterpart?",
        answer:
          "A Digital Counterpart is not a chatbot. It is an autonomous role-holder that owns outcomes. Unlike tools that require constant input, Digital Counterparts understand context, make decisions, and execute workflows independently - like an SDR, Ops Manager, or Chief of Staff would.",
      },
      {
        question: "Is this just agents?",
        answer:
          "No. Agents are tools. We install role-holders inside workflows with governance and measurement. The difference: agents answer questions. Digital Counterparts own jobs, have boundaries, produce work, and are measured on throughput, cycle time, and margin.",
      },
      {
        question: "Who is HotlistAI built for?",
        answer:
          "Operators who feel coordination overhead and headcount bloat. COOs, founders, sales leaders, and service operators - people who own outcomes and hate inefficiency. If growth creates complexity and complexity demands headcount, we replace that with infrastructure.",
      },
    ],
  },
  {
    category: "Deployments",
    questions: [
      {
        question: "What deployment lanes do you offer?",
        answer:
          "Three lanes: Growth Deployment (acquisition throughput - replaces SDR headcount), Operations Deployment (delivery throughput - replaces Ops Manager overhead), and Executive Execution Deployment (decision throughput - replaces Chief of Staff work). You can deploy one lane or scale across all three.",
      },
      {
        question: "How long does deployment take?",
        answer:
          "7-14 days from System Audit to production. The process: Audit (2-3 days) → Deployment Plan (2-3 days) → Install & Test (5-7 days) → License & Monitor (ongoing). Repeatability is the product.",
      },
      {
        question: "What happens during the System Audit?",
        answer:
          "We map your workflows, identify bottlenecks, and calculate overhead cost. You get: workflow diagram with pain points, overhead cost calculation (hours + payroll), deployment recommendation, ROI projection (capacity vs. headcount), and risk assessment with governance needs.",
      },
      {
        question: "What does a deployment include?",
        answer:
          "Role definition, workflow integration, approval gates, governance controls, observability dashboard, ongoing licensing, weekly optimization reviews, and quarterly strategic reviews. Everything is governed, measured, and repeatable.",
      },
      {
        question: "Can I start with one deployment and expand later?",
        answer:
          "Yes. Land with one deployment. Expand by activating new counterparts and roles. The infrastructure supports multi-lane expansion without friction.",
      },
    ],
  },
  {
    category: "Governance & Security",
    questions: [
      {
        question: "How are deployments governed?",
        answer:
          "Every deployment includes approval gates, audit trails, operating boundaries, and observability. Pre-action approval for outbound communication, contract generation, delegation, and data access. All actions are logged, timestamped, and attributed.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. End-to-end encryption for data in transit and at rest. Role-based access control (RBAC). Data minimization - we only access what's needed. We do not train models on your proprietary data or share data across customer deployments. SOC 2 Type II compliance in progress.",
      },
      {
        question: "What are operating boundaries?",
        answer:
          "Every Digital Counterpart operates within defined constraints: messaging tone and vocabulary, qualification criteria, approval escalation triggers, volume/rate limits, ICP fit requirements, and time-based operational windows. You set the rules. The system enforces them.",
      },
      {
        question: "What does observability include?",
        answer:
          "Real-time dashboard with: live activity feed, performance metrics (throughput, cycle time, accuracy), approval queue, alert system for exceptions, and exportable audit logs. Full transparency into system health and outcomes.",
      },
    ],
  },
  {
    category: "Pricing & Business Model",
    questions: [
      {
        question: "How does pricing work?",
        answer:
          "You license ongoing capacity, not buy software. Pricing based on deployment lane and scale. We start with a System Audit (complimentary), then propose deployment plan with ROI projection and licensing cost. Monthly or annual licensing available. Cancel anytime with 30 days notice.",
      },
      {
        question: "What does 'licensed capacity' mean?",
        answer:
          "Instead of paying headcount salaries, you license the capacity to replace them. A Digital Counterpart handles the throughput of multiple roles at a fraction of payroll cost. You pay for outcomes and uptime, not seats or subscriptions.",
      },
      {
        question: "Is there a setup fee?",
        answer:
          "System Audit is complimentary. Installation includes discovery, deployment planning, technical setup, integration, testing, and go-live - typically included in first month licensing. No separate setup fee for standard deployments.",
      },
      {
        question: "Do you offer free trials?",
        answer:
          "We offer shadow mode validation during Install & Test phase. The system runs in shadow mode (no live actions) to validate accuracy and governance before you approve go-live. This ensures production readiness before licensing begins.",
      },
    ],
  },
  {
    category: "Technical & Integration",
    questions: [
      {
        question: "What systems do you integrate with?",
        answer:
          "CRMs (HubSpot, Salesforce, Pipedrive, Zoho), email (Gmail, Outlook), calendars (Google, Microsoft), project management (Asana, Monday, ClickUp), and most business tools. Custom integrations available via API or Zapier.",
      },
      {
        question: "Will big platforms replace this?",
        answer:
          "Platforms sell tools. We sell installs and outcomes. The last mile is where value is created. Platforms can't install governed systems into your specific workflows with your approval gates and operating boundaries. Infrastructure wins over features.",
      },
      {
        question: "Is this too complex to manage?",
        answer:
          "We hide complexity. You get clarity: role → workflow → outcome → control. The back end can be brutal. The front end is calm. You see the observability dashboard, approve actions through gates, and monitor metrics. The machinery is invisible.",
      },
      {
        question: "What AI models do you use?",
        answer:
          "We use best-in-class models from OpenAI, Anthropic, and others depending on the use case. Our systems are model-agnostic - we select the right tool for the job and optimize for speed, accuracy, cost, and governance.",
      },
    ],
  },
  {
    category: "Support & SLA",
    questions: [
      {
        question: "What uptime guarantees do you provide?",
        answer:
          "99.9% uptime SLA monitored 24/7 with automatic failover. Critical incidents acknowledged within 2 hours. Standard support requests acknowledged within 24 hours. Infrastructure means reliability.",
      },
      {
        question: "What does ongoing support include?",
        answer:
          "Ongoing licensed capacity, real-time observability dashboard, performance monitoring and alerts, weekly optimization reviews, workflow refinement and tuning, integration expansion as needed, dedicated support channel, and quarterly strategic reviews.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes. All licenses require 30 days notice for cancellation. No long-term contracts or lock-in periods. You can pause, scale down, or expand deployments as business needs change.",
      },
      {
        question: "Do you offer enterprise white-label?",
        answer:
          "Enterprise white-label solutions available for qualifying partners. Includes custom branding, dedicated infrastructure, and priority support. Contact us to discuss partnership opportunities.",
      },
    ],
  },
]

export default function FAQPage() {
  useScrollAnimations()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) =>
      category.questions.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    ),
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader />

      <main className="flex-1 pt-14">
        <article>
          {/* Hero */}
          <section className="py-20 md:py-24 px-4 md:px-6 border-b border-border/40">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about Digital Workforce Infrastructure, deployment process, governance, and
                pricing.
              </p>
            </div>
          </section>

          {/* FAQ Sections */}
          {faqs.map((category, categoryIndex) => (
            <section
              key={category.category}
              className={`py-16 md:py-20 px-4 md:px-6 border-b border-border/40 ${categoryIndex % 2 === 1 ? "bg-muted/10" : ""}`}
              aria-labelledby={`category-${categoryIndex}`}
            >
              <div className="max-w-4xl mx-auto">
                <h2
                  id={`category-${categoryIndex}`}
                  className="font-serif text-3xl md:text-4xl mb-12 scroll-animate"
                >
                  {category.category}
                </h2>

                <div className="space-y-8">
                  {category.questions.map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      className={`pb-8 border-b border-border/30 last:border-0 last:pb-0 scroll-animate delay-${(faqIndex + 1) * 100}`}
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question"
                    >
                      <h3 className="text-xl md:text-2xl font-semibold mb-4" itemProp="name">
                        {faq.question}
                      </h3>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p className="text-muted-foreground leading-relaxed text-lg" itemProp="text">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* CTA */}
          <section className="py-20 md:py-24 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center scroll-animate">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Still have questions?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Request a System Audit to discuss your specific workflows, governance needs, and deployment options.
              </p>
              <CalBookingButton size="lg">Request a System Audit</CalBookingButton>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
