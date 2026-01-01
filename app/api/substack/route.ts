import { NextResponse } from "next/server"
import Parser from "rss-parser"

const parser = new Parser()

// Cache the feed for 1 hour
let cachedFeed: any = null
let cacheTime = 0
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds

export async function GET() {
  try {
    const now = Date.now()

    if (cachedFeed && now - cacheTime < CACHE_DURATION) {
      return NextResponse.json(cachedFeed)
    }

    const feed = await parser.parseURL("https://hotlistai.substack.com/feed")

    const posts = feed.items.slice(0, 6).map((item) => ({
      title: item.title || "",
      link: item.link || "",
      pubDate: item.pubDate || "",
      contentSnippet: item.contentSnippet?.slice(0, 200) + "..." || "",
      creator: item.creator || "Johnny Apple",
    }))

    const response = {
      posts,
      feedUrl: "https://hotlistai.substack.com",
    }

    // Update cache
    cachedFeed = response
    cacheTime = now

    return NextResponse.json(response)
  } catch (error) {
    console.error("Error fetching Substack feed:", error)
    return NextResponse.json({ error: "Failed to fetch Substack feed" }, { status: 500 })
  }
}
