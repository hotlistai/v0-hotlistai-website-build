# Hotlist Engine Boardroom Site Audit

Date: 2026-07-09
Site: https://www.hotlistengine.com

## Boardroom Lanes

- Digital Architect / UX-IA: header, menu, route structure, mobile journey.
- Super-TC / QA: link behavior, redirects, CTA fallback, route hygiene.
- Rainmaker / Closer / SEO: conversion path, search architecture, offer labels.

## Findings

### P1: `How It Works` Was A Broken Promise

The header, footer, and body CTAs linked to `/how-it-works`, but both middleware and Next redirects sent that URL to `/follow-up-leak-audit`. The page file existed, so the site was contradicting itself.

Decision: restore `/how-it-works` as a real live route and relabel it as `How We Fix It`.

### P1: The Header Did Not Match The Buying Journey

The visible nav acted like a small brochure: `Lead Follow-Up Audit`, `How It Works`, `About`, `Contact`. The indexed site is broader and has a real content hub, while `/contact` is actually another booking/intake surface.

Decision: use the primary nav as the buying path:

- `Lead Follow-Up Audit`
- `How We Fix It`
- `Resources`
- `About`
- Header CTA: `Book Audit`

### P1: Booking CTA Had No Native Fallback

Cal booking controls were consistent, but they rendered as `<button>` elements. If the Cal embed script failed, there was no native destination.

Decision: render booking controls as links to `https://cal.com/hotlistai/lead-follow-up-audit` while preserving Cal embed data attributes.

### P2: Mobile Menu Layering Was Fragile

The mobile overlay either hid the header/close state or allowed the chat widget to sit above the menu.

Decision: keep the fixed header visible and position the mobile menu overlay below it with a higher layer than page widgets.

## Phase 1 Repairs

- Removed `/how-it-works` from middleware and Next redirect rules.
- Added `/how-it-works` back to `sitemap.xml`.
- Updated header/footer labels and added `Resources` to the primary header.
- Changed top CTA copy from `Book Your Lead Follow-Up Audit` to `Book Audit` in the header/menu.
- Converted `CalBookingButton` from a JS-only button to an anchor with a Cal.com fallback.
- Updated the positioning verifier so it guards the new route/nav contract.

## Deferred Repairs

- Decide whether the homepage hero should lead with `Lead Follow-Up Audit for Real Estate Teams` instead of `Your Agent Tech Concierge...`.
- Normalize top spacing across the main funnel pages.
- Decide whether `/contact` should remain a booking page or become a true contact page with a separate `/book-audit` path.
- Review old route files like `/deployments` that remain in the app tree behind redirects.
