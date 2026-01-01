import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    const emailBody = `
New contact form submission from HotlistAI Labs website:

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}
    `.trim()

    await resend.emails.send({
      from: "HotlistAI Labs <onboarding@resend.dev>",
      to: "info@hotlistai.com",
      replyTo: email,
      subject: `New contact from ${name}`,
      text: emailBody,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
