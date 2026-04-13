import { NextResponse } from "next/server"

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"

type IndexNowBody = {
  urls?: string[]
  url?: string
}

export async function POST(request: Request) {
  try {
    const key = process.env.INDEXNOW_KEY
    const host = process.env.INDEXNOW_HOST || "hotlistai.com"
    const keyLocation = process.env.INDEXNOW_KEY_LOCATION || `https://${host}/indexnow-key.txt`

    if (!key) {
      return NextResponse.json({ error: "INDEXNOW_KEY is not configured" }, { status: 503 })
    }

    const body = (await request.json()) as IndexNowBody
    const urls = body.urls?.length ? body.urls : body.url ? [body.url] : []

    if (!urls.length) {
      return NextResponse.json({ error: "Provide at least one URL via url or urls[]" }, { status: 400 })
    }

    const payload = {
      host,
      key,
      keyLocation,
      urlList: urls,
    }

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: "IndexNow submission failed", status: response.status },
        { status: response.status },
      )
    }

    return NextResponse.json({ success: true, submitted: urls.length })
  } catch (error) {
    console.error("IndexNow error", error)
    return NextResponse.json({ error: "Failed to submit IndexNow request" }, { status: 500 })
  }
}
