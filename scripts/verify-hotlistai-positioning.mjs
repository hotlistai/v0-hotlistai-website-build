import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()

const requiredFiles = [
  "app/page.tsx",
  "app/follow-up-leak-audit/page.tsx",
  "app/how-it-works/page.tsx",
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
  "components/seo/concierge-cta.tsx",
  "app/governance/page.tsx",
  "public/site.webmanifest",
  "public/ja-profile-headshot-2026-vertical.jpeg",
  "public/visuals/hotlist-hero-crm-routing-background.png",
  "public/visuals/before-after-crm-execution-layer.png",
  "public/visuals/final-cta-lead-flow-dark.png",
  "public/visuals/follow-up-leak-audit-scorecard.png",
  "public/visuals/sample-leak-report-document-stack.png",
  "public/visuals/blog-thumbnail-crm-leak-series.png",
  "middleware.ts",
]

const requiredText = [
  ["app/page.tsx", "Your Agent Tech Concierge for follow-up that actually happens."],
  ["app/page.tsx", "Book Your Lead Follow-Up Audit"],
  ["app/page.tsx", "See a Sample Audit Report"],
  ["app/page.tsx", "Audit. Fix. Stay on top of it."],
  ["app/page.tsx", "Tech Concierge"],
  ["app/page.tsx", "Before HotlistAI"],
  ["app/page.tsx", "After HotlistAI"],
  ["app/page.tsx", "Built by Johnny Apple."],
  ["app/page.tsx", "/visuals/hotlist-hero-crm-routing-background.png"],
  ["app/page.tsx", "/visuals/before-after-crm-execution-layer.png"],
  ["app/page.tsx", "/visuals/final-cta-lead-flow-dark.png"],
  ["app/follow-up-leak-audit/page.tsx", "Book Your Lead Follow-Up Audit"],
  ["app/follow-up-leak-audit/page.tsx", "Follow-Up Scorecard"],
  ["app/follow-up-leak-audit/page.tsx", "30-Day Fix Plan"],
  ["app/follow-up-leak-audit/page.tsx", "/visuals/follow-up-leak-audit-scorecard.png"],
  ["app/how-it-works/page.tsx", "How Your Tech Concierge Works"],
  ["app/how-it-works/page.tsx", "Lead Follow-Up Audit"],
  ["app/how-it-works/page.tsx", "Fix & Install"],
  ["app/how-it-works/page.tsx", "Tech Concierge"],
  ["app/sample-leak-report/page.tsx", "Sample Audit Report"],
  ["app/sample-leak-report/page.tsx", "Follow-Up Scorecard"],
  ["app/sample-leak-report/page.tsx", "/visuals/sample-leak-report-document-stack.png"],
  ["app/follow-up-boss-automation-audit/page.tsx", "Follow Up Boss Automation Audit"],
  ["app/follow-up-boss-automation-audit/page.tsx", "Book Your Lead Follow-Up Audit"],
  ["app/follow-up-boss-cleanup/page.tsx", "Follow Up Boss Cleanup"],
  ["app/follow-up-boss-cleanup/page.tsx", "Book Your Lead Follow-Up Audit"],
  ["app/governance/page.tsx", "Our Standards"],
  ["components/seo/concierge-cta.tsx", "Book Your Lead Follow-Up Audit"],
  ["components/seo/concierge-cta.tsx", "See a Sample Audit Report"],
  ["components/site-footer.tsx", "Our Standards"],
  ["app/company/page.tsx", "Your Agent Tech Concierge"],
  ["app/company/page.tsx", "/ja-profile-headshot-2026-vertical.jpeg"],
  ["app/contact/contact-client.tsx", "What system do you use to track leads?"],
  ["app/contact/contact-client.tsx", "Book Your Lead Follow-Up Audit"],
  ["app/blog/blog-client.tsx", "/visuals/blog-thumbnail-crm-leak-series.png"],
  ["components/site-header.tsx", "Lead Follow-Up Audit"],
  ["components/site-header.tsx", "How It Works"],
  ["components/site-header.tsx", "Book Your Lead Follow-Up Audit"],
  ["components/site-footer.tsx", "Agent Tech Concierge for real estate teams"],
  ["components/site-footer.tsx", "Guides"],
  ["components/cal-booking-button.tsx", "free-follow-up-leak-audit"],
  ["components/cal-booking-button.tsx", "hotlistai/${CAL_NAMESPACE}"],
  ["components/cal-booking-button.tsx", "data-cal-namespace={CAL_NAMESPACE}"],
  ["components/cal-booking-button.tsx", "useSlotsViewOnSmallScreen"],
  ["components/hotlist-icons.tsx", "LeadLeakVisibilityIcon"],
  ["components/hotlist-icons.tsx", "LeakScorecardIcon"],
  ["app/layout.tsx", "Your Agent Tech Concierge"],
  ["app/layout.tsx", "Agent Tech Concierge for real estate teams"],
  ["app/sitemap.ts", "/follow-up-leak-audit"],
  ["app/sitemap.ts", "/how-it-works"],
  ["app/sitemap.ts", "/sample-leak-report"],
  ["app/sitemap.ts", "/follow-up-boss-automation-audit"],
  ["app/sitemap.ts", "/follow-up-boss-cleanup"],
  ["app/feed.xml/route.ts", "Agent Tech Concierge"],
  ["app/feed.xml/route.ts", "Johnny Apple"],
  ["app/opengraph-image.tsx", "Your Agent Tech Concierge"],
  ["app/twitter-image.tsx", "Book Your Lead Follow-Up Audit"],
  ["public/site.webmanifest", "Agent Tech Concierge for real estate teams"],
  ["public/site.webmanifest", "Book Your Lead Follow-Up Audit"],
  ["middleware.ts", "/deployments"],
  ["middleware.ts", "/how-it-works"],
  ["lib/seo-taxonomy.ts", "stale-lead-recovery"],
  ["lib/seo-taxonomy.ts", "speed-to-lead"],
  ["lib/seo-taxonomy.ts", "real-estate-crm-follow-up"],
  ["lib/seo-taxonomy.ts", "follow-up-boss-automation-audit"],
  ["lib/seo-taxonomy.ts", "Book Your Lead Follow-Up Audit"],
  ["lib/seo-taxonomy.ts", "Lead Follow-Up Audit"],
  ["lib/blog.ts", "Where real-estate leads go quiet inside a CRM"],
  ["lib/blog.ts", "Follow Up Boss cleanup checklist"],
  ["lib/blog.ts", "Follow-Up Gaps"],
  ["lib/blog.ts", "Lead Follow-Up Audit"],
  ["lib/blog.ts", "Johnny Apple"],
]

const forbiddenText = [
  ["app/page.tsx", "Digital Workforce Infrastructure"],
  ["app/page.tsx", "Digital Counterparts"],
  ["app/page.tsx", "Follow-Up Leak Audit"],
  ["app/page.tsx", "execution layer"],
  ["app/page.tsx", "Deployment Lanes"],
  ["components/site-header.tsx", "Deployments"],
  ["components/site-header.tsx", "Follow-Up Leak Audit"],
  ["components/cal-booking-button.tsx", "hotlistai/capacity"],
  ["components/site-footer.tsx", "SEO Library"],
  ["components/site-footer.tsx", "The Lab"],
  ["components/site-footer.tsx", "Hotlist Funnels"],
  ["app/layout.tsx", "Digital Workforce Infrastructure"],
  ["app/layout.tsx", "Stop warm leads from dying inside your CRM"],
  ["app/how-it-works/page.tsx", "Digital Counterparts"],
  ["app/how-it-works/page.tsx", "infrastructure deployment"],
  ["app/feed.xml/route.ts", "digital counterparts"],
  ["app/feed.xml/route.ts", "Philip Pines"],
  ["app/opengraph-image.tsx", "Digital Counterparts"],
  ["app/opengraph-image.tsx", "Stop warm leads from dying inside your CRM"],
  ["app/twitter-image.tsx", "Digital Counterparts"],
  ["app/twitter-image.tsx", "Make your current CRM actually execute"],
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