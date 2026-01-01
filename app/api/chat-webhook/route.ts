import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL

    if (!zapierWebhookUrl) {
      console.error("[v0] ZAPIER_WEBHOOK_URL not configured")
      return NextResponse.json({ error: "Webhook not configured" }, { status: 500 })
    }

    // Send to Zapier
    const zapierResponse = await fetch(zapierWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
        source: "hotlistai.com",
      }),
    })

    if (!zapierResponse.ok) {
      throw new Error("Zapier webhook failed")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Chat webhook error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
