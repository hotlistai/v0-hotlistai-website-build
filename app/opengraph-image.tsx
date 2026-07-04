import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "HotlistAI - Stop warm leads from dying inside your CRM"
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
        backgroundColor: "#fafafa",
        color: "#171717",
        fontFamily: "system-ui, sans-serif",
        padding: 72,
      }}
    >
      <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#737373" }}>HotlistAI</div>
      <div>
        <h1 style={{ fontSize: 74, lineHeight: 0.95, letterSpacing: -3, margin: 0, maxWidth: 940 }}>
          Stop warm leads from dying inside your CRM.
        </h1>
        <p style={{ fontSize: 30, lineHeight: 1.3, color: "#525252", marginTop: 32, maxWidth: 820 }}>
          Follow-Up Leak Audits for real-estate teams with active lead flow.
        </p>
      </div>
      <div style={{ display: "flex", gap: 18, fontSize: 22, color: "#737373" }}>
        <span>Follow-Up Leak Scorecard</span>
        <span>/</span>
        <span>CRM Execution Report</span>
        <span>/</span>
        <span>30-Day Fix Plan</span>
      </div>
    </div>,
    { ...size },
  )
}
