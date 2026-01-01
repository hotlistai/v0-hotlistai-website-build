import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  authors: [{ name: "Johnny Apple", url: "https://hotlistai.substack.com" }],
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
  },
  category: "technology",
    generator: 'v0.app'
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
    {
      "@type": "Organization",
      "@id": "https://hotlistai.com/#organization",
      name: "Hotlist AI",
      alternateName: ["HotlistAI", "Hotlist Labs"],
      description:
        "AI venture studio building digital counterparts and lead generation systems. We create specialized intelligence systems that provide clarity, speed, and real leverage for founders and businesses.",
      url: "https://hotlistai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://hotlistai.com/logo-light.png",
        width: 400,
        height: 100,
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "2500",
        highPrice: "10000",
        offerCount: "16",
        description: "AI software products and custom lead generation systems",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      sameAs: [
        "https://twitter.com/hotlistai",
        "https://github.com/hotlistai",
        "https://instagram.com/hotlistai",
        "https://tiktok.com/@hotlistai",
        "https://facebook.com/hotlistai",
        "https://linkedin.com/company/hotlistai",
        "https://hotlistai.substack.com",
        "https://youtube.com/@hotlistai",
        "https://threads.net/@hotlistai",
      ],
      founder: {
        "@type": "Person",
        name: "Johnny Apple",
        url: "https://hotlistai.substack.com",
        sameAs: ["https://twitter.com/johnnyapple", "https://linkedin.com/in/johnnyapple"],
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "info@hotlistai.com",
          contactType: "customer service",
        },
        {
          "@type": "ContactPoint",
          email: "marketing@hotlistai.com",
          contactType: "marketing",
        },
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Business Automation",
        "Lead Generation",
        "Digital Marketing",
        "SaaS Development",
        "Multi-Agent Systems",
        "Natural Language Processing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://hotlistai.com/#website",
      url: "https://hotlistai.com",
      name: "Hotlist AI",
      description: "AI-powered digital counterparts and lead generation systems",
      publisher: {
        "@id": "https://hotlistai.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://hotlistai.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ItemList",
      name: "Hotlist AI Software Products",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "Estate Mogul",
          description: "Digital boardroom for real estate with six specialized AI agents",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "LyftEmail",
          description: "AI-powered email intelligence and inbox management",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
        },
        {
          "@type": "SoftwareApplication",
          position: 3,
          name: "PRIME",
          description: "Operating system for LLMs - precision prompt engineering",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Hotlist AI do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hotlist AI is a venture studio that builds AI-powered digital counterparts and lead generation systems. We create both software products you use directly and custom lead systems we build and manage for you.",
          },
        },
        {
          "@type": "Question",
          name: "How much do custom lead generation solutions cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Custom lead generation systems start at $2,500 for setup, with ongoing management typically ranging from $750-$1,500 per month depending on your industry and scale.",
          },
        },
        {
          "@type": "Question",
          name: "What industries does Hotlist AI work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We build custom lead generation systems for real estate, solar installation, law firms, restaurants, contractors, manufacturing, nonprofits, and fitness businesses.",
          },
        },
        {
          "@type": "Question",
          name: "What are digital counterparts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital counterparts are specialized AI agents that understand context, make decisions, and deliver outcomes. Unlike traditional software tools, they act as autonomous coworkers that handle specific business functions.",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`font-sans antialiased ${_instrumentSerif.variable}`}>
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
