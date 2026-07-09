import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PRIMARY_HOST = "www.hotlistengine.com"
const LEGACY_HOSTS = ["hotlistengine.com", "hotlistai.com", "www.hotlistai.com"]

const legacyRedirects: Record<string, string> = {
  "/deployments": "/follow-up-leak-audit",
  "/ethos": "/company",
  "/how-it-works": "/follow-up-leak-audit",
  "/labs": "/resources",
  "/lab": "/resources",
  "/developers": "/resources",
  "/hotlist-funnels": "/follow-up-leak-audit",
  "/press": "/company",
}

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase()

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
