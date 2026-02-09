import type { Metadata } from "next"
import FunnelsPageClient from "./funnels-client"

export const metadata: Metadata = {
  title: "Hotlist Funnels | High-Velocity Lead Generation & Conversion Platform",
  description:
    "Mobile-first conversion funnels powered by Lead Intelligence. Sub-1-second load times, 3x engagement, and 47-second average completion. Built for real estate, solar, law firms, and service businesses. Starting at $495/mo.",
  keywords: [
    "lead generation funnels",
    "conversion optimization platform",
    "mobile-first funnels",
    "lead intelligence",
    "real estate lead generation",
    "solar lead generation",
    "law firm marketing funnels",
    "high-converting landing pages",
    "behavioral psychology marketing",
    "CRM integration",
    "automated lead qualification",
    "restaurant recruiting funnels",
    "contractor lead generation",
    "nonprofit donor funnels",
    "fitness lead generation",
    "B2B SaaS funnels",
  ],
  openGraph: {
    title: "Hotlist Funnels | High-Velocity Lead Generation Platform",
    description:
      "Mobile-first conversion funnels powered by Lead Intelligence. Sub-1-second load times, 3x engagement. Starting at $495/mo.",
    url: "https://hotlistai.com/hotlist-funnels",
    siteName: "Hotlist AI",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotlist Funnels - High-Velocity Lead Generation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotlist Funnels | High-Velocity Lead Generation Platform",
    description:
      "Mobile-first conversion funnels powered by Lead Intelligence. Sub-1-second load times, 3x engagement. Starting at $495/mo.",
    images: ["/og-image.jpg"],
    creator: "@hotlistai",
  },
  alternates: {
    canonical: "/hotlist-funnels",
  },
}

export default function HotlistFunnelsPage() {
  return <FunnelsPageClient />
}
