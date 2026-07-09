# Hotlist Engine Launch Analytics And Profile Checklist

Last updated: 2026-07-09

## Website Measurement

The site renders Vercel Analytics, Vercel Speed Insights, and Google marketing tags through `app/layout.tsx`.

The current direct GA4 / Google Ads measurement ID is installed by default:

- `G-VFM0J3WGTN`

Optional Vercel environment variables:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: overrides the default GA4 web data stream ID.
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager container ID, for example `GTM-XXXXXXX`.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: Search Console HTML meta verification token if DNS verification is not already active.

The direct GA4 tag stays on-page even if GTM is later added, because Google Ads / Analytics setup needs to detect this measurement stream directly on `hotlistengine.com`.

## Search Console

Recommended property:

- Domain property: `hotlistengine.com`

Immediate submit/check list:

- Submit `https://www.hotlistengine.com/sitemap.xml`.
- Submit `https://www.hotlistengine.com/sitemap-images.xml`.
- Inspect and request indexing for `https://www.hotlistengine.com/`.
- Inspect and request indexing for `https://www.hotlistengine.com/follow-up-leak-audit`.
- Inspect and request indexing for `https://www.hotlistengine.com/follow-up-boss-cleanup`.
- Inspect and request indexing for `https://www.hotlistengine.com/sample-leak-report`.
- Inspect and request indexing for `https://www.hotlistengine.com/blog`.
- Keep Search Console access under the current working Google account for now; add delegated HotlistAI-specific access later if operations get messy.

## Google Business Profile

Boardroom recommendation: create a GBP only if HotlistAI will use a real service-area/local business posture. If not, skip GBP for now and do not force a fake local listing.

If created:

- Business name: `HotlistAI`
- Category: `Business management consultant` or `Software company`
- Website: `https://hotlistai.com`
- Service area: `Dallas-Fort Worth, TX` plus remote/online service wording where allowed
- Appointment URL: `https://cal.com/hotlistai/lead-follow-up-audit`
- Description: `HotlistAI helps real-estate teams find and fix follow-up leaks inside the CRM they already use. The front-door offer is a Follow-Up Leak Audit that identifies where leads are going stale, which follow-up tasks are unowned, and what execution layer should be installed before the team buys more leads.`

Do not use old broad positioning such as `AI systems that run businesses on autopilot` for the public profile.

## Profiles To Update

Use this short bio everywhere:

`HotlistAI helps real-estate teams stop warm leads from dying inside their CRM. Book a Follow-Up Leak Audit before buying more leads.`

Priority profiles:

- LinkedIn Company: update tagline, about copy, website, and CTA to `Book a Follow-Up Leak Audit`.
- Johnny Apple LinkedIn: add founder proof and link to HotlistAI as the CRM follow-up execution offer.
- X / Twitter: update bio and link.
- Instagram: update bio and link.
- Facebook Page: update about section and booking link.
- YouTube: reserve/update handle and about copy if video/content will be used.
- GitHub org: update website and organization description.
- Substack/newsletter: update publication description or park it if not part of this wedge.

## First Tracking Events

Track these as the launch baseline:

- Page view on `/follow-up-leak-audit`
- Click on `Book a Follow-Up Leak Audit`
- Cal.com booking completion, configured inside Cal.com or GTM if available
- Contact form submit
- Blog page view

## Launch Decision

Do not delay marketing for profile perfection. The site is live enough to start outreach. Analytics/profile cleanup should happen in parallel with the first 20-50 warm prospect conversations.
