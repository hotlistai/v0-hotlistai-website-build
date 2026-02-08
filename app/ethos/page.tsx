import type { Metadata } from "next"
import EthosPageClient from "./ethos-client"

export const metadata: Metadata = {
  title: "Ethos",
  description:
    "How Hotlist AI thinks and builds. Our philosophy: clarity over complexity, speed over sprawl, and the digital counterpart model. Software should feel fast, clear, and respectful of your time.",
  keywords: [
    "Hotlist AI philosophy",
    "AI company values",
    "digital counterpart model",
    "AI product philosophy",
    "clarity over complexity",
    "AI venture studio ethos",
  ],
  openGraph: {
    title: "Ethos | Hotlist AI",
    description:
      "How Hotlist AI thinks and builds. Clarity over complexity. Speed over sprawl. The digital counterpart model.",
    url: "https://hotlistai.com/ethos",
    siteName: "Hotlist AI",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotlist AI Ethos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethos | Hotlist AI",
    description:
      "How Hotlist AI thinks and builds. Clarity over complexity. Speed over sprawl. The digital counterpart model.",
    images: ["/og-image.jpg"],
    creator: "@hotlistai",
  },
  alternates: {
    canonical: "/ethos",
  },
}

export default function EthosPage() {
  return <EthosPageClient />
}
