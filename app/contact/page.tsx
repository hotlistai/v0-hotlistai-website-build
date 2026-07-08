import type { Metadata } from "next"
import ContactPageClient from "./contact-client"

export const metadata: Metadata = {
  title: "Book Your Lead Follow-Up Audit",
  description:
    "Tell Hotlist where your real estate team's follow-up feels weakest. Book a free Lead Follow-Up Audit and get a clear fix plan.",
  keywords: [
    "Lead Follow-Up Audit",
    "real estate CRM audit",
    "real estate follow up audit",
    "agent tech concierge",
    "Follow Up Boss audit",
  ],
  openGraph: {
    title: "Book Your Lead Follow-Up Audit | Hotlist",
    description:
      "Tell us where follow-up feels weakest. We will find the gaps costing you deals and show you what to fix first.",
    url: "https://hotlistengine.com/contact",
    siteName: "Hotlist",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Book Your Lead Follow-Up Audit with Hotlist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Lead Follow-Up Audit | Hotlist",
    description: "Find where your team's follow-up is breaking — before you buy more leads.",
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