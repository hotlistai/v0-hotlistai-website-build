import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "HotlistAI Labs - Where people and products meet"
export const size = {
  width: 1200,
  height: 630,
}
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
        backgroundColor: "#fafafa",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 80px",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#1a1a1a",
            borderRadius: 16,
            marginBottom: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#fafafa", fontSize: 40, fontWeight: 700 }}>H</span>
        </div>

        <h1
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#1a1a1a",
            textAlign: "center",
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 20,
          }}
        >
          HotlistAI Labs
        </h1>

        <p
          style={{
            fontSize: 32,
            color: "#666666",
            textAlign: "center",
            margin: 0,
            marginBottom: 40,
          }}
        >
          Where people and products meet.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 20,
            color: "#888888",
          }}
        >
          <span>AI Systems</span>
          <span>•</span>
          <span>Multi-Agent Orchestration</span>
          <span>•</span>
          <span>Business Automation</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 8,
          backgroundColor: "#1a1a1a",
        }}
      />
    </div>,
    {
      ...size,
    },
  )
}
