import type { Metadata } from "next"
import EthosPageClient from "./ethos-client"

export const metadata: Metadata = {
  title: "Ethos",
  description:
    "How we think. How we build. HotlistAI is a point of view about how software should feel—fast, clear, and respectful of your time.",
  openGraph: {
    title: "Ethos | HotlistAI Labs",
    description:
      "How we think. How we build. HotlistAI is a point of view about how software should feel—fast, clear, and respectful of your time.",
  },
  alternates: {
    canonical: "/ethos",
  },
}

export default function EthosPage() {
  return <EthosPageClient />
}
