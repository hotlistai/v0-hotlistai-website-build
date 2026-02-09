import type { Metadata } from "next"
import DevelopersPageClient from "./developers-client"

export const metadata: Metadata = {
  title: "Developers | The Foundry",
  description:
    "Developer infrastructure for Digital Counterparts. REST APIs, TypeScript/Python/Go SDKs, webhooks, and self-hosted deployment options. Request early access to the Hotlist AI developer platform.",
  keywords: [
    "Hotlist AI API",
    "AI developer platform",
    "digital counterpart API",
    "AI SDK",
    "REST API",
    "webhook integration",
    "self-hosted AI",
    "developer documentation",
    "AI infrastructure",
  ],
  openGraph: {
    title: "Developers | The Foundry | Hotlist AI",
    description:
      "Developer infrastructure for Digital Counterparts. REST APIs, SDKs, webhooks, and self-hosted deployment. Request early access.",
    url: "https://hotlistai.com/developers",
    siteName: "Hotlist AI",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Foundry - Hotlist AI Developer Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developers | The Foundry | Hotlist AI",
    description:
      "Developer infrastructure for Digital Counterparts. REST APIs, SDKs, and self-hosted deployment.",
    images: ["/og-image.jpg"],
    creator: "@hotlistai",
  },
  alternates: {
    canonical: "/developers",
  },
}

export default function DevelopersPage() {
  return <DevelopersPageClient />
}
