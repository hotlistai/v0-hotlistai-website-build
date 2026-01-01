import type { Metadata } from "next"
import ContactPageClient from "./contact-client"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with HotlistAI Labs. Have a question or want to work together? We'd love to hear from you.",
  openGraph: {
    title: "Contact | HotlistAI Labs",
    description: "Get in touch with HotlistAI Labs. Have a question or want to work together?",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
