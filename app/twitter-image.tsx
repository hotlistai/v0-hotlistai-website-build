import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "HotlistAI Labs - AI Systems That Run Businesses on Autopilot"
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
        backgroundColor: "#0a0a0a",
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
            backgroundColor: "#fafafa",
            borderRadius: 16,
            marginBottom: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#0a0a0a", fontSize: 40, fontWeight: 700 }}>H</span>
        </div>

        <h1
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#fafafa",
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
            color: "#a1a1a1",
            textAlign: "center",
            margin: 0,
            marginBottom: 40,
          }}
        >
          AI systems that run businesses on autopilot.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 20,
            color: "#666666",
          }}
        >
          <span>@hotlistai</span>
          <span>•</span>
          <span>hotlistai.com</span>
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
          backgroundColor: "#fafafa",
        }}
      />
    </div>,
    {
      ...size,
    },
  )
}
