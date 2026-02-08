import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { ChatWidget } from "@/components/chat-widget"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: {
    default: "Hotlist AI | AI-Powered Digital Counterparts & Lead Generation Systems",
    template: "%s | Hotlist AI",
  },
  description:
    "Hotlist AI builds AI-powered digital counterparts, intelligent automation systems, and high-converting lead generation funnels for real estate, solar, legal, and service businesses. Software products and custom AI solutions starting at $2,500.",
  keywords: [
    // Core AI terms
    "AI",
    "artificial intelligence",
    "digital counterparts",
    "AI coworkers",
    "AI agents",
    "autonomous AI",
    "intelligent automation",
    "multi-agent systems",
    "AI operating system",
    "business intelligence",
    "AI for business",
    "enterprise AI",
    // Product names
    "Estate Mogul",
    "LyftEmail",
    "PRIME",
    "TalentVibing",
    "Hotlist Voice",
    "Hotlist Video",
    "HelloFinn",
    "Hotlist Pediatrics",
    // Software categories
    "real estate AI",
    "email AI assistant",
    "AI email manager",
    "recruiting AI",
    "prompt engineering",
    "LLM operating system",
    "voice AI",
    "video AI",
    "financial AI",
    "healthcare AI",
    // Lead generation terms
    "lead generation",
    "lead generation system",
    "conversion funnels",
    "marketing automation",
    "sales automation",
    "business automation",
    "automated lead qualification",
    "AI lead generation",
    "done-for-you marketing",
    "managed lead generation",
    // Industry-specific
    "real estate lead generation",
    "real estate marketing",
    "solar lead generation",
    "solar installation leads",
    "law firm lead generation",
    "legal marketing",
    "attorney lead generation",
    "restaurant recruiting",
    "restaurant staffing solutions",
    "contractor lead generation",
    "home improvement leads",
    "blue collar recruiting",
    "manufacturing recruiting",
    "nonprofit fundraising",
    "donor engagement",
    "gym lead generation",
    "fitness marketing",
    // Business model
    "venture studio",
    "AI startup",
    "SaaS platform",
    "B2B software",
    "founder tools",
    "startup tools",
    "small business AI",
    // Value propositions
    "business growth",
    "revenue automation",
    "productivity tools",
    "time-saving software",
    "workflow automation",
    "digital transformation",
  ],
  authors: [{ name: "Johnny Apple", url: "https://hotlistai.com/blog" }],
  creator: "Hotlist AI",
  publisher: "Hotlist AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hotlistai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hotlistai.com",
    siteName: "Hotlist AI",
    title: "Hotlist AI | AI-Powered Digital Counterparts & Lead Generation Systems",
    description:
      "Build AI-powered digital counterparts, intelligent automation systems, and high-converting lead generation funnels. Software products and custom solutions starting at $2,500.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotlist AI - AI-Powered Digital Counterparts & Lead Generation Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotlist AI | AI-Powered Digital Counterparts & Lead Generation Systems",
    description:
      "Build AI-powered digital counterparts, intelligent automation systems, and high-converting lead generation funnels. Software products and custom solutions starting at $2,500.",
    images: ["/og-image.jpg"],
    creator: "@hotlistai",
    site: "@hotlistai",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-light.png", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // other: { "msvalidate.01": "your-bing-verification-code" },
  },
  category: "technology",
  classification: "Business/Software",
  generator: "v0.app",
  other: {
    "revisit-after": "3 days",
    "rating": "General",
    "distribution": "global",
    "msapplication-TileColor": "#171717",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ── ORGANIZATION ──
    {
      "@type": "Organization",
      "@id": "https://hotlistai.com/#organization",
      name: "Hotlist AI",
      alternateName: ["HotlistAI", "Hotlist Labs", "HotlistAI Labs"],
      description:
        "AI venture studio building digital counterparts and high-converting lead generation funnels. Specialized intelligence systems that create clarity, speed, and real leverage for founders and operators.",
      url: "https://hotlistai.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://hotlistai.com/#logo",
        url: "https://hotlistai.com/logo-light.png",
        contentUrl: "https://hotlistai.com/logo-light.png",
        width: 400,
        height: 100,
        caption: "Hotlist AI Logo",
      },
      image: "https://hotlistai.com/og-image.jpg",
      foundingDate: "2024",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 2,
        maxValue: 10,
      },
      slogan: "Intelligence amplifies. Automation liberates. Systems scale.",
      knowsLanguage: "en",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "The Colony",
        addressRegion: "TX",
        addressCountry: "US",
      },
      sameAs: [
        "https://twitter.com/hotlistai",
        "https://github.com/hotlistai",
        "https://instagram.com/hotlistai",
        "https://tiktok.com/@hotlistai",
        "https://facebook.com/hotlistai",
        "https://linkedin.com/company/hotlistai",
        "https://youtube.com/@hotlistai",
        "https://threads.net/@hotlistai",
      ],
      founder: {
        "@type": "Person",
        "@id": "https://hotlistai.com/#founder",
        name: "Philip Pines",
        alternateName: "Johnny Apple",
        jobTitle: "Founder & CEO",
        url: "https://hotlistai.com/company",
        description:
          "Operator behind a company ranked #212 on the Inc. 5000 Fastest-Growing Companies list. Building AI-powered digital counterparts and lead generation systems.",
        sameAs: [
          "https://twitter.com/hotlistai",
          "https://linkedin.com/in/philippines",
          "https://hotlistai.com/blog",
        ],
        worksFor: { "@id": "https://hotlistai.com/#organization" },
        knowsAbout: [
          "Artificial Intelligence",
          "Business Automation",
          "Lead Generation",
          "Multi-Agent Systems",
          "SaaS Development",
          "Growth Strategy",
        ],
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "info@hotlistai.com",
          contactType: "customer service",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          email: "marketing@hotlistai.com",
          contactType: "sales",
          availableLanguage: "English",
        },
      ],
      award: "Inc. 5000 Fastest-Growing Companies — #212 (Founder's prior venture)",
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Business Automation",
        "Lead Generation",
        "Digital Marketing",
        "SaaS Development",
        "Multi-Agent Systems",
        "Natural Language Processing",
        "Conversion Rate Optimization",
        "Marketing Automation",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "47",
        bestRating: "5",
        worstRating: "1",
      },
    },
    // ── WEBSITE ──
    {
      "@type": "WebSite",
      "@id": "https://hotlistai.com/#website",
      url: "https://hotlistai.com",
      name: "Hotlist AI",
      description:
        "AI venture studio building digital counterparts, intelligent automation systems, and high-converting lead generation funnels.",
      publisher: { "@id": "https://hotlistai.com/#organization" },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://hotlistai.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    // ── WEBPAGE (Homepage) ──
    {
      "@type": "WebPage",
      "@id": "https://hotlistai.com/#webpage",
      url: "https://hotlistai.com",
      name: "Hotlist AI | AI-Powered Digital Counterparts & Lead Generation Systems",
      isPartOf: { "@id": "https://hotlistai.com/#website" },
      about: { "@id": "https://hotlistai.com/#organization" },
      description:
        "Build AI-powered digital counterparts, intelligent automation systems, and high-converting lead generation funnels for real estate, solar, legal, and service businesses.",
      inLanguage: "en-US",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      breadcrumb: { "@id": "https://hotlistai.com/#breadcrumb" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://hotlistai.com/og-image.jpg",
      },
    },
    // ── BREADCRUMB ──
    {
      "@type": "BreadcrumbList",
      "@id": "https://hotlistai.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hotlistai.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "The Lab",
          item: "https://hotlistai.com/lab",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hotlist Funnels",
          item: "https://hotlistai.com/hotlist-funnels",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Ethos",
          item: "https://hotlistai.com/ethos",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Company",
          item: "https://hotlistai.com/company",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Blog",
          item: "https://hotlistai.com/blog",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "FAQ",
          item: "https://hotlistai.com/faq",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Contact",
          item: "https://hotlistai.com/contact",
        },
      ],
    },
    // ── SOFTWARE PRODUCTS ──
    {
      "@type": "SoftwareApplication",
      "@id": "https://hotlistai.com/#estate-mogul",
      name: "Estate Mogul",
      description:
        "Digital boardroom for real estate professionals. Six specialized AI agents managing assets, contracts, tenant relations, property analysis, and strategic decisions.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://hotlistai.com/lab#estate-mogul",
      author: { "@id": "https://hotlistai.com/#organization" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Request access for pricing",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "23",
        bestRating: "5",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://hotlistai.com/#lyftemail",
      name: "LyftEmail",
      description:
        "AI-powered communication intelligence. Reads, categorizes, prioritizes, and drafts responses across your inbox. Inbox zero is the default.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://hotlistai.com/lab#lyftemail",
      author: { "@id": "https://hotlistai.com/#organization" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Request access for pricing",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "15",
        bestRating: "5",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://hotlistai.com/#prime",
      name: "PRIME",
      description:
        "The operating system for your LLM. Transforms vague ideas into precision-built, world-class AI prompts.",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: "https://hotlistai.com/lab#prime",
      author: { "@id": "https://hotlistai.com/#organization" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Beta — request access",
        availability: "https://schema.org/PreOrder",
      },
    },
    // ── SERVICES (Hotlist Funnels) ──
    {
      "@type": "Service",
      "@id": "https://hotlistai.com/#funnels-service",
      name: "Hotlist Funnels",
      description:
        "High-velocity conversion funnels powered by Lead Intelligence. Mobile-first, built with behavioral psychology, optimized for maximum ROI across real estate, solar, legal, and service industries.",
      provider: { "@id": "https://hotlistai.com/#organization" },
      url: "https://hotlistai.com/hotlist-funnels",
      serviceType: "Lead Generation",
      areaServed: { "@type": "Country", name: "United States" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Hotlist Funnels Plans",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Starter",
            price: "495",
            priceCurrency: "USD",
            description: "1 Core Funnel + Basic Lead Intel + CRM Sync. $495/mo + $495 setup.",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "495",
              priceCurrency: "USD",
              billingDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
            },
          },
          {
            "@type": "Offer",
            name: "Growth Accelerator",
            price: "995",
            priceCurrency: "USD",
            description: "Unlimited Funnels + Full Lead Intelligence + 5k Outreach Contacts. $995/mo + $995 setup.",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "995",
              priceCurrency: "USD",
              billingDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "31",
        bestRating: "5",
      },
    },
    // ── FAQ (Top-level for rich snippets) ──
    {
      "@type": "FAQPage",
      "@id": "https://hotlistai.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Hotlist AI do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hotlist AI is an AI venture studio that builds digital counterparts and high-converting lead generation funnels. We create software products like Estate Mogul and LyftEmail, plus custom Hotlist Funnels for industries including real estate, solar, legal, and service businesses.",
          },
        },
        {
          "@type": "Question",
          name: "How much do Hotlist Funnels cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hotlist Funnels start at $495/month for a single funnel with basic lead intelligence and CRM sync. The Growth Accelerator plan at $995/month includes unlimited funnels, full lead intelligence, and 5,000 outreach contacts. Both plans include a one-time setup fee.",
          },
        },
        {
          "@type": "Question",
          name: "What industries does Hotlist AI work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We build custom funnels and AI systems for real estate, solar installation, law firms, restaurants, contractors, blue collar recruiting, manufacturing, nonprofits, fitness studios, and B2B SaaS companies.",
          },
        },
        {
          "@type": "Question",
          name: "What are digital counterparts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital counterparts are specialized AI agents that understand context, make decisions, and deliver outcomes autonomously. They act as intelligent coworkers handling specific business functions like lead qualification, email management, and property analysis.",
          },
        },
        {
          "@type": "Question",
          name: "How long does implementation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hotlist Funnels go live in 7 days or less. Lab products like Estate Mogul and LyftEmail deploy within 14 days including discovery, setup, CRM integration, and launch.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//js-na2.hs-scripts.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script
          id="hs-script-loader"
          src="//js-na2.hs-scripts.com/242682996.js"
          strategy="afterInteractive"
          async
          defer
        />
      </head>
      <body className={`font-sans antialiased ${_instrumentSerif.variable}`}>
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
