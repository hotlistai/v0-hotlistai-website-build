import type { Metadata } from "next"
import ContactPageClient from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hotlist AI. Request a demo, discuss custom AI solutions, or explore lead generation partnerships. Response within 24 hours.",
  keywords: [
    "contact Hotlist AI",
    "AI consultation",
    "request demo",
    "AI lead generation quote",
    "custom AI solutions",
    "business automation consultation",
  ],
  openGraph: {
    title: "Contact Us | Hotlist AI",
    description:
      "Get in touch with Hotlist AI. Request a demo, discuss custom solutions, or explore partnerships. Response within 24 hours.",
    url: "https://hotlistai.com/contact",
    siteName: "Hotlist AI",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Hotlist AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Hotlist AI",
    description:
      "Get in touch with Hotlist AI. Request a demo or discuss custom AI solutions.",
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
