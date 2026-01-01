import type { Metadata } from "next"
import LabsPageClient from "./labs-client"

export const metadata: Metadata = {
  title: "Labs",
  description:
    "Where ideas become working systems. Hotlist Labs is where ideas are created, tested, shaped, and prepared for launch through deep reasoning and expert agent collaboration.",
  openGraph: {
    title: "Labs | HotlistAI Labs",
    description:
      "Where ideas become working systems. Hotlist Labs is where ideas are created, tested, shaped, and prepared for launch.",
  },
  alternates: {
    canonical: "/labs",
  },
}

export default function LabsPage() {
  return <LabsPageClient />
}
