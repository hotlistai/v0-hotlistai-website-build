import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PRIMARY_HOST = "hotlistengine.com"
const LEGACY_HOSTS = ["hotlistengine.com", "www.hotlistengine.com"]

const legacyRedirects: Record<string, string> = {
  "/deployments": "/how-it-works",
  "/ethos": "/company",
  "/labs": "/",
  "/lab": "/",
  "/developers": "/",
  "/hotlist-funnels": "/",
  "/press": "/company",
}

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase()

  if (host === `www.${PRIMARY_HOST}`) {
    const url = request.nextUrl.clone()
    url.host = PRIMARY_HOST
    return NextResponse.redirect(url, 308)
  }

  if (LEGACY_HOSTS.includes(host)) {
    const url = request.nextUrl.clone()
    url.protocol = "https"
    url.host = PRIMARY_HOST
    return NextResponse.redirect(url, 308)
  }

  const { pathname } = request.nextUrl
  const redirectTarget = legacyRedirects[pathname]
  if (redirectTarget) {
    const url = request.nextUrl.clone()
    url.pathname = redirectTarget
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|favicon.png).*)"],
}