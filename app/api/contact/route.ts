import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 503 })
    }
    const resend = new Resend(resendApiKey)

    const body = await request.json()
    const { name, email, teamName, crm, teamSize, leadSources, currentBottleneck, message } = body

    const emailBody = `
New Lead Follow-Up Audit request from HotlistAI:

Name: ${name}
Email: ${email}
Team / Brokerage: ${teamName || "Not provided"}
Current CRM: ${crm || "Not provided"}
Team Size: ${teamSize || "Not provided"}
Lead Sources: ${leadSources || "Not provided"}

Current Bottleneck:
${currentBottleneck || "Not provided"}

Message:
${message || "Not provided"}
    `.trim()

    await resend.emails.send({
      from: "HotlistAI <onboarding@resend.dev>",
      to: "info@hotlistai.com",
      replyTo: email,
      subject: `Lead Follow-Up Audit request from ${name}`,
      text: emailBody,
    })

    if (process.env.ZAPIER_WEBHOOK_URL) {
      await fetch(process.env.ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          teamName: teamName || "Not provided",
          crm: crm || "Not provided",
          teamSize: teamSize || "Not provided",
          leadSources: leadSources || "Not provided",
          currentBottleneck: currentBottleneck || "Not provided",
          message: message || "Not provided",
          source: "Lead Follow-Up Audit Form",
          timestamp: new Date().toISOString(),
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
