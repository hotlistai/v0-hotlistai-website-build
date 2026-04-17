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
    default: "HotlistAI | Digital Workforce Infrastructure",
    template: "%s | HotlistAI",
  },
  description:
    "Deploy Digital Counterparts - autonomous role-holders that replace operational headcount across Growth, Operations, and Executive Execution.",
  metadataBase: new URL("https://hotlistai.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hotlistai.com",
    siteName: "HotlistAI",
    title: "HotlistAI | Digital Workforce Infrastructure",
    description:
      "Deploy Digital Counterparts - autonomous role-holders that replace operational headcount across Growth, Operations, and Executive Execution.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "HotlistAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HotlistAI | Digital Workforce Infrastructure",
    description:
      "Deploy Digital Counterparts - autonomous role-holders that replace operational headcount across Growth, Operations, and Executive Execution.",
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
      name: "HotlistAI",
      alternateName: "Hotlist AI",
      url: "https://hotlistai.com",
      logo: "https://hotlistai.com/logo-light.png",
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
      "@id": "https://hotlistai.com/#website",
      url: "https://hotlistai.com",
      name: "HotlistAI",
      publisher: { "@id": "https://hotlistai.com/#organization" },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://hotlistai.com/blog?query={search_term_string}",
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
        <link rel="alternate" type="application/rss+xml" title="Hotlist AI Blog" href="/feed.xml" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//js-na2.hs-scripts.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script id="hs-script-loader" src="//js-na2.hs-scripts.com/242682996.js" strategy="afterInteractive" async defer />
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`font-sans antialiased ${_geist.variable} ${_geistMono.variable} ${_instrumentSerif.variable}`}>
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
