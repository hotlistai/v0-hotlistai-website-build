import type { Metadata } from "next"
import ContactPageClient from "./contact-client"

export const metadata: Metadata = {
  title: "Book a Follow-Up Leak Audit",
  description:
    "Book a Follow-Up Leak Audit with HotlistAI and find where your real-estate CRM follow-up is breaking.",
  keywords: [
    "Follow-Up Leak Audit",
    "real estate CRM audit",
    "real estate follow up audit",
    "Follow Up Boss audit",
    "stale lead recovery",
  ],
  openGraph: {
    title: "Book a Follow-Up Leak Audit | HotlistAI",
    description:
      "Find where response, routing, nurture, stale-lead recovery, and accountability break inside your current CRM.",
    url: "https://hotlistai.com/contact",
    siteName: "Hotlist AI",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Book a Follow-Up Leak Audit with HotlistAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Follow-Up Leak Audit | HotlistAI",
    description:
      "Find where your real-estate CRM follow-up is leaking.",
    images: ["/og-image.jpg"],
    creator: "@hotlistai",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
