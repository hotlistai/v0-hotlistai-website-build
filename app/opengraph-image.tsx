import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Hotlist AI - AI-Powered Digital Counterparts & Lead Generation Systems"
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
            fontSize: 56,
            fontWeight: 600,
            color: "#1a1a1a",
            textAlign: "center",
            lineHeight: 1.15,
            margin: 0,
            marginBottom: 20,
          }}
        >
          The AI Operating System for Digital Counterparts
        </h1>

        <p
          style={{
            fontSize: 28,
            color: "#666666",
            textAlign: "center",
            margin: 0,
            marginBottom: 40,
            maxWidth: 800,
          }}
        >
          AI software products + high-converting lead generation funnels for modern businesses.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 18,
            color: "#888888",
          }}
        >
          <span>hotlistai.com</span>
          <span>|</span>
          <span>Estate Mogul</span>
          <span>|</span>
          <span>LyftEmail</span>
          <span>|</span>
          <span>Hotlist Funnels</span>
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
