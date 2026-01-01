import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Hotlist AI",
  description:
    "Frequently asked questions about Hotlist AI's digital counterparts, AI automation systems, lead generation funnels, and software products. Get answers about pricing, setup, and implementation.",
  keywords: [
    "AI automation FAQ",
    "digital counterpart questions",
    "lead generation pricing",
    "AI software setup",
    "Hotlist AI help",
    "AI implementation guide",
    "custom AI solutions",
    "AI funnel questions",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Hotlist AI",
    description:
      "Get answers about Hotlist AI's digital counterparts, lead generation systems, and AI automation products.",
    type: "website",
  },
}

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is a digital counterpart?",
        answer:
          "A digital counterpart is an AI-powered agent that acts as an intelligent extension of you or your business. Unlike traditional tools that require constant input, digital counterparts understand context, make decisions, and handle complex workflows autonomously. They're built to think, act, and operate like a specialized team member.",
      },
      {
        question: "How is Hotlist AI different from other AI companies?",
        answer:
          "We don't build generic AI tools. We build specialized intelligence systems designed for specific use cases. Every product goes through real-world testing and refinement before release. We're a venture studio, not a consultancy—we build, deploy, and actively maintain our products.",
      },
      {
        question: "Who uses Hotlist AI products?",
        answer:
          "Founders, operators, real estate professionals, law firms, solar companies, restaurant owners, and businesses that want to automate repetitive work and scale intelligently. Our systems are built for people who value speed, clarity, and results over complexity.",
      },
    ],
  },
  {
    category: "Software Products",
    questions: [
      {
        question: "What is Estate Mogul?",
        answer:
          "Estate Mogul is a digital boardroom for real estate professionals. It includes six specialized AI agents that manage assets, contracts, tenant relations, property analysis, and strategic decisions. Think of it as having an entire back-office team that never sleeps.",
      },
      {
        question: "How does LyftEmail work?",
        answer:
          "LyftEmail is communication intelligence for speed. It reads, categorizes, prioritizes, and drafts responses across your inbox. Inbox zero isn't a goal—it's the default. The system learns your tone, context, and preferences to handle email like you would, but faster.",
      },
      {
        question: "What is PRIME?",
        answer:
          "PRIME is the operating system for your LLM. It transforms vague ideas into precision-built AI prompts. Instead of fighting with ChatGPT for 20 minutes, PRIME structures your thoughts, optimizes queries, and delivers world-class outputs on the first try.",
      },
      {
        question: "Are these products available now?",
        answer:
          "Estate Mogul and LyftEmail are in active deployment. PRIME is in beta. Hotlist Video, Hotlist Voice, TalentVibing, HelloFinn, and Hotlist Pediatrics are coming soon. Join the waitlist to get early access when they launch.",
      },
    ],
  },
  {
    category: "Custom Solutions",
    questions: [
      {
        question: "What are Custom Lead Generation Systems?",
        answer:
          "Done-for-you marketing funnels and automated lead qualification systems built for your industry. We design landing pages, run ad campaigns, integrate with your CRM, and deliver qualified leads directly to your pipeline. You focus on closing—we handle everything else.",
      },
      {
        question: "How much do Custom Solutions cost?",
        answer:
          "Custom lead generation systems start at $2,500 setup + ongoing monthly management fees. Pricing depends on industry, ad spend, and complexity. Multi-location and enterprise solutions start at $5,000/month. Contact us for a custom quote.",
      },
      {
        question: "What industries do you support?",
        answer:
          "We currently build systems for real estate, solar installation, law firms, restaurants, contractors, blue collar recruiting, nonprofits, and fitness studios. If your industry isn't listed, reach out—we love building new verticals.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Custom solutions typically launch within 14-21 days. This includes discovery, funnel design, ad creative production, CRM integration, and campaign launch. Once live, we monitor, optimize, and scale continuously.",
      },
      {
        question: "Do I need to provide ad creative?",
        answer:
          "No. We handle all creative production—copywriting, images, video, and ad design. You approve the final assets before we launch. Our team has built hundreds of high-converting campaigns across multiple industries.",
      },
      {
        question: "What CRMs do you integrate with?",
        answer:
          "We integrate with HubSpot, Salesforce, Pipedrive, Zoho, Follow Up Boss, kvCORE, and most major CRMs. If you use a custom system, we can connect via API or Zapier.",
      },
    ],
  },
  {
    category: "Pricing & Access",
    questions: [
      {
        question: "How do I get access to The Lab products?",
        answer:
          "Request access through our contact form. Active deployment products (Estate Mogul, LyftEmail) are available immediately. Beta products require approval. Coming Soon products have waitlists you can join for early access.",
      },
      {
        question: "Do you offer free trials?",
        answer:
          "Select products offer limited trial periods. Contact us to discuss trial availability for your use case.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes. All subscriptions and custom solutions require 30 days notice for cancellation. No long-term contracts or lock-in periods.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What AI models do you use?",
        answer:
          "We use a combination of OpenAI, Anthropic, and custom-trained models depending on the use case. Our systems are model-agnostic—we select the best tool for the job and optimize for speed, accuracy, and cost.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. We follow enterprise-grade security practices including encryption at rest and in transit, SOC 2 compliance, and strict data retention policies. Your data is never used to train third-party models without explicit consent.",
      },
      {
        question: "Do you offer API access?",
        answer:
          "API access is available for select products and enterprise clients. Contact us to discuss API documentation and implementation support.",
      },
      {
        question: "Can I white-label your products?",
        answer:
          "Enterprise white-label solutions are available for qualifying partners. This includes custom branding, dedicated infrastructure, and priority support. Reach out to discuss partnership opportunities.",
      },
    ],
  },
]

export default function FAQPage() {
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

      <main className="flex-1">
        <article>
          {/* Hero */}
          <section className="py-20 md:py-24 px-4 md:px-6 border-b border-border/40">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about Hotlist AI's digital counterparts, AI automation systems, and custom
                lead generation solutions.
              </p>
            </div>
          </section>

          {/* FAQ Sections */}
          {faqs.map((category, categoryIndex) => (
            <section
              key={category.category}
              className="py-16 md:py-20 px-4 md:px-6 border-b border-border/40"
              aria-labelledby={`category-${categoryIndex}`}
            >
              <div className="max-w-4xl mx-auto">
                <h2 id={`category-${categoryIndex}`} className="font-serif text-3xl md:text-4xl mb-12">
                  {category.category}
                </h2>

                <div className="space-y-8">
                  {category.questions.map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      className="pb-8 border-b border-border/30 last:border-0 last:pb-0"
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
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Still have questions?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Reach out to our team and we'll get back to you within 24 hours.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform active:scale-95"
              >
                Contact Us
              </a>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
