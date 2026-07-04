import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "HotlistAI - Follow-up execution for real-estate teams"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0a0a0a",
        color: "#fafafa",
        fontFamily: "system-ui, sans-serif",
        padding: 72,
      }}
    >
      <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#a3a3a3" }}>HotlistAI</div>
      <div>
        <h1 style={{ fontSize: 74, lineHeight: 0.95, letterSpacing: -3, margin: 0, maxWidth: 940 }}>
          Make your current CRM actually execute.
        </h1>
        <p style={{ fontSize: 30, lineHeight: 1.3, color: "#d4d4d4", marginTop: 32, maxWidth: 820 }}>
          Find response, routing, nurture, stale-lead recovery, and accountability leaks before buying more leads.
        </p>
      </div>
      <div style={{ display: "flex", gap: 18, fontSize: 22, color: "#a3a3a3" }}>
        <span>hotlistai.com</span>
        <span>/</span>
        <span>Book a Follow-Up Leak Audit</span>
      </div>
    </div>,
    { ...size },
  )
}
