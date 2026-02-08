import type { Metadata } from "next"
import LabPageClient from "./lab-client"

export const metadata: Metadata = {
  title: "The Lab | AI Software Products",
  description:
    "Specialized AI agents and intelligent automation tools. Estate Mogul for real estate, LyftEmail for communication, PRIME for prompt engineering. Production-ready systems actively deployed across industries.",
  keywords: [
    "AI software products",
    "AI agents",
    "real estate AI",
    "email automation AI",
    "Estate Mogul",
    "LyftEmail",
    "PRIME",
    "AI tools for business",
    "business automation software",
    "digital counterparts",
    "multi-agent systems",
    "voice AI",
    "video AI",
    "recruiting AI",
    "financial AI",
    "healthcare AI",
  ],
  openGraph: {
    title: "The Lab | AI Software Products | Hotlist AI",
    description:
      "Specialized AI agents and intelligent automation tools. Production-ready systems actively deployed across industries.",
    url: "https://hotlistai.com/lab",
    siteName: "Hotlist AI",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Lab - Hotlist AI Software Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lab | AI Software Products | Hotlist AI",
    description:
      "Specialized AI agents and intelligent automation tools. Production-ready systems actively deployed across industries.",
    images: ["/og-image.jpg"],
    creator: "@hotlistai",
  },
  alternates: {
    canonical: "/lab",
  },
}

export default function LabPage() {
  return <LabPageClient />
}
