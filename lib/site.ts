export const SITE_URL = "https://www.hotlistengine.com"
export const SITE_DOMAIN = "www.hotlistengine.com"
export const SITE_NAME = "Hotlist"
export const SITE_LEGAL_NAME = "Hotlist AI LLC"

export function absoluteSiteUrl(path = "") {
  if (!path || path === "/") return SITE_URL
  if (path.startsWith("http")) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}
