import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

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
  const host = request.headers.get("host") || ""
  if (host.startsWith("www.hotlistai.com")) {
    const url = request.nextUrl.clone()
    url.host = "hotlistai.com"
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
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}