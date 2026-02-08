import type { Metadata } from "next"
import PressPageClient from "./press-client"

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Press inquiries, media resources, and brand assets for Hotlist AI. Get in touch for interviews, partnerships, or coverage about our AI-powered digital counterparts and lead generation systems.",
  keywords: [
    "Hotlist AI press",
    "AI company media",
    "Hotlist AI news",
    "AI startup press kit",
    "brand assets",
    "media inquiries",
  ],
  openGraph: {
    title: "Press & Media | Hotlist AI",
    description:
      "Press inquiries, media resources, and brand assets for Hotlist AI. AI-powered digital counterparts and lead generation systems.",
    url: "https://hotlistai.com/press",
    siteName: "Hotlist AI",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotlist AI Press & Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Press & Media | Hotlist AI",
    description:
      "Press inquiries, media resources, and brand assets for Hotlist AI.",
    images: ["/og-image.jpg"],
    creator: "@hotlistai",
  },
  alternates: {
    canonical: "/press",
  },
}

export default function PressPage() {
  return <PressPageClient />
}
