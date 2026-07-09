import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import { ChatWidget } from "@/components/chat-widget"
import { GoogleAnalyticsHeadTags, GoogleMarketingTags } from "@/components/google-marketing-tags"
import { SITE_URL } from "@/lib/site"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const _instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const rawGoogleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.GOOGLE_SITE_VERIFICATION
const googleSiteVerification =
  rawGoogleSiteVerification && !rawGoogleSiteVerification.includes("<") ? rawGoogleSiteVerification : undefined

export const metadata: Metadata = {
  title: {
    default: "Hotlist | Your Agent Tech Concierge",
    template: "%s | Hotlist",
  },
  description:
    "Hotlist audits your follow-up, fixes what is broken, and manages it ongoing — so your real estate team stops losing warm leads and closes more deals with less tech stress.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Hotlist",
    title: "Hotlist | Your Agent Tech Concierge",
    description:
      "Audit your follow-up, fix what is broken, and stay supported monthly. Lead Follow-Up Audits and Tech Concierge for real estate teams.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hotlist Agent Tech Concierge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotlist | Your Agent Tech Concierge",
    description:
      "Audit your follow-up, fix what is broken, and stay supported monthly. Lead Follow-Up Audits and Tech Concierge for real estate teams.",
    images: ["/twitter-image"],
    creator: "@hotlistai",
    site: "@hotlistai",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any", type: "image/png" },
      { url: "/icon-light-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
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
      "@id": `${SITE_URL}/#organization`,
      name: "Hotlist",
      alternateName: "Hotlist Engine",
      description:
        "Agent Tech Concierge for real estate teams. Lead Follow-Up Audits, follow-up system implementation, and ongoing Tech Concierge support.",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "info@hotlistai.com",
          availableLanguage: "English",
        },
      ],
      sameAs: [
        "https://github.com/hotlistai",
        "https://www.linkedin.com/company/hotlistai",
        "https://twitter.com/hotlistai",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Hotlist",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog?query={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
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
        <link rel="alternate" type="application/rss+xml" title="Hotlist Blog" href="/feed.xml" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//js-na2.hs-scripts.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <GoogleAnalyticsHeadTags />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script id="hs-script-loader" src="//js-na2.hs-scripts.com/242682996.js" strategy="afterInteractive" async defer />
      </head>
      <body className={`font-sans antialiased ${_geist.variable} ${_geistMono.variable} ${_instrumentSerif.variable}`}>
        {children}
        <ChatWidget />
        <GoogleMarketingTags />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
