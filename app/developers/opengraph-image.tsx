import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "HotlistAI Labs - Developers"
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
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 80px" }}>
        <p style={{ fontSize: 24, color: "#888888", margin: 0, marginBottom: 20 }}>HotlistAI Labs</p>
        <h1
          style={{ fontSize: 72, fontWeight: 600, color: "#fafafa", textAlign: "center", margin: 0, marginBottom: 30 }}
        >
          Developers
        </h1>
        <p style={{ fontSize: 28, color: "#a1a1a1", textAlign: "center", margin: 0, maxWidth: 800 }}>
          Build with HotlistAI. Coming soon.
        </p>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 8, backgroundColor: "#fafafa" }} />
    </div>,
    { ...size },
  )
}
