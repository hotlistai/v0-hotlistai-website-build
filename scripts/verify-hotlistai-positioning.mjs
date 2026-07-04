import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()

const requiredFiles = [
  "app/page.tsx",
  "app/follow-up-leak-audit/page.tsx",
  "app/sample-leak-report/page.tsx",
  "app/follow-up-boss-automation-audit/page.tsx",
  "app/follow-up-boss-cleanup/page.tsx",
  "app/company/page.tsx",
  "app/contact/contact-client.tsx",
  "components/site-header.tsx",
  "components/site-footer.tsx",
  "components/cal-booking-button.tsx",
  "components/hotlist-icons.tsx",
  "app/layout.tsx",
  "app/sitemap.ts",
  "app/feed.xml/route.ts",
  "app/opengraph-image.tsx",
  "app/twitter-image.tsx",
  "lib/seo-taxonomy.ts",
  "lib/blog.ts",
  "public/site.webmanifest",
  "public/ja-profile-headshot-2026-vertical.jpeg",
  "public/visuals/hotlist-hero-crm-routing-background.png",
  "public/visuals/before-after-crm-execution-layer.png",
  "public/visuals/final-cta-lead-flow-dark.png",
  "public/visuals/follow-up-leak-audit-scorecard.png",
  "public/visuals/sample-leak-report-document-stack.png",
  "public/visuals/blog-thumbnail-crm-leak-series.png",
]

const requiredText = [
  ["app/page.tsx", "Stop warm leads from dying inside your CRM."],
  ["app/page.tsx", "Before you buy more leads, find out where your current ones are leaking."],
  ["app/page.tsx", "What HotlistAI installs"],
  ["app/page.tsx", "See a Sample Leak Report"],
  ["app/page.tsx", "Every lead gets a next action"],
  ["app/page.tsx", "Before HotlistAI"],
  ["app/page.tsx", "After HotlistAI"],
  ["app/page.tsx", "Built by Johnny Apple."],
  ["app/page.tsx", "/visuals/hotlist-hero-crm-routing-background.png"],
  ["app/page.tsx", "/visuals/before-after-crm-execution-layer.png"],
  ["app/page.tsx", "/visuals/final-cta-lead-flow-dark.png"],
  ["app/follow-up-leak-audit/page.tsx", "Book a Follow-Up Leak Audit"],
  ["app/follow-up-leak-audit/page.tsx", "Follow-Up Leak Scorecard"],
  ["app/follow-up-leak-audit/page.tsx", "CRM Execution Report + 30-Day Fix Plan"],
  ["app/follow-up-leak-audit/page.tsx", "/visuals/follow-up-leak-audit-scorecard.png"],
  ["app/sample-leak-report/page.tsx", "Sample Leak Report"],
  ["app/sample-leak-report/page.tsx", "Response, routing, nurture, stale-lead recovery, and accountability"],
  ["app/sample-leak-report/page.tsx", "/visuals/sample-leak-report-document-stack.png"],
  ["app/follow-up-boss-automation-audit/page.tsx", "Follow Up Boss Automation Audit"],
  ["app/follow-up-boss-cleanup/page.tsx", "Follow Up Boss Cleanup"],
  ["app/company/page.tsx", "Built from the work, not from the trend."],
  ["app/company/page.tsx", "/ja-profile-headshot-2026-vertical.jpeg"],
  ["app/contact/contact-client.tsx", "current CRM"],
  ["app/blog/blog-client.tsx", "/visuals/blog-thumbnail-crm-leak-series.png"],
  ["components/site-header.tsx", "Follow-Up Leak Audit"],
  ["components/site-footer.tsx", "Stop warm leads from dying inside your CRM."],
  ["components/cal-booking-button.tsx", "free-follow-up-leak-audit"],
  ["components/cal-booking-button.tsx", "hotlistai/${CAL_NAMESPACE}"],
  ["components/cal-booking-button.tsx", "data-cal-namespace={CAL_NAMESPACE}"],
  ["components/cal-booking-button.tsx", "useSlotsViewOnSmallScreen"],
  ["components/hotlist-icons.tsx", "LeadLeakVisibilityIcon"],
  ["components/hotlist-icons.tsx", "LeakScorecardIcon"],
  ["app/layout.tsx", "Stop warm leads from dying inside your CRM"],
  ["app/sitemap.ts", "/follow-up-leak-audit"],
  ["app/sitemap.ts", "/sample-leak-report"],
  ["app/sitemap.ts", "/follow-up-boss-automation-audit"],
  ["app/sitemap.ts", "/follow-up-boss-cleanup"],
  ["app/feed.xml/route.ts", "real-estate CRM follow-up"],
  ["app/feed.xml/route.ts", "Johnny Apple"],
  ["app/opengraph-image.tsx", "Stop warm leads from dying inside your CRM"],
  ["app/twitter-image.tsx", "Make your current CRM actually execute"],
  ["public/site.webmanifest", "Follow-up execution for real-estate teams"],
  ["public/site.webmanifest", "Book a Follow-Up Leak Audit"],
  ["lib/seo-taxonomy.ts", "stale-lead-recovery"],
  ["lib/seo-taxonomy.ts", "speed-to-lead"],
  ["lib/seo-taxonomy.ts", "real-estate-crm-follow-up"],
  ["lib/seo-taxonomy.ts", "follow-up-boss-automation-audit"],
  ["lib/blog.ts", "Where real-estate leads leak inside a CRM"],
  ["lib/blog.ts", "Follow Up Boss cleanup checklist"],
  ["lib/blog.ts", "Follow-Up Leaks"],
  ["lib/blog.ts", "Johnny Apple"],
]

// Forbidden text is scoped to core conversion surfaces so preserved SEO pages can be
// migrated in stages without blocking the homepage/audit relaunch.
const forbiddenText = [
  ["app/page.tsx", "Digital Workforce Infrastructure"],
  ["app/page.tsx", "Digital Counterparts"],
  ["app/page.tsx", "Replace Headcount with Licensed Capacity"],
  ["app/page.tsx", "Deployment Lanes"],
  ["app/page.tsx", "Production Deployments Active"],
  ["app/page.tsx", "AI agents"],
  ["components/site-header.tsx", "Deployments"],
  ["components/cal-booking-button.tsx", "hotlistai/capacity"],
  ["components/site-footer.tsx", "The Lab"],
  ["components/site-footer.tsx", "Hotlist Funnels"],
  ["app/layout.tsx", "Digital Workforce Infrastructure"],
  ["app/feed.xml/route.ts", "digital counterparts"],
  ["app/feed.xml/route.ts", "Philip Pines"],
  ["app/opengraph-image.tsx", "Digital Counterparts"],
  ["app/twitter-image.tsx", "Digital Counterparts"],
  ["public/site.webmanifest", "HotlistAI Labs"],
  ["public/site.webmanifest", "Explore Labs"],
]

const failures = []

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    failures.push(`Missing required file: ${file}`)
  }
}

for (const [file, text] of requiredText) {
  const path = join(root, file)
  const content = existsSync(path) ? readFileSync(path, "utf8") : ""

  if (!content.includes(text)) {
    failures.push(`Missing required text in ${file}: ${text}`)
  }
}

for (const [file, text] of forbiddenText) {
  const path = join(root, file)
  const content = existsSync(path) ? readFileSync(path, "utf8") : ""

  if (content.includes(text)) {
    failures.push(`Forbidden old positioning text remains in ${file}: ${text}`)
  }
}

if (failures.length > 0) {
  console.error("HotlistAI positioning verification failed:")

  for (const failure of failures) {
    console.error(`- ${failure}`)
  }

  process.exit(1)
}

console.log("HotlistAI positioning verification passed.")
