# hotlistai.com

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/hotlist-ai/v0-hotlist-ai-labs-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/leji11qgIYq)

## Overview

Production website for HotlistAI's real-estate Follow-Up Leak Audit offer.

Current public wedge:

> Stop warm leads from dying inside your CRM.

HotlistAI helps real-estate teams find and fix follow-up leaks inside the CRM they already use.

## Deployment

Production domain:

**[https://hotlistai.com](https://hotlistai.com)**

Vercel project:

**[https://vercel.com/hotlist-ai/v0-hotlistai-website-build](https://vercel.com/hotlist-ai/v0-hotlistai-website-build)**

## Analytics And Search

The site renders Vercel Analytics and Vercel Speed Insights by default.

Optional Google tags are environment-driven:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

If `NEXT_PUBLIC_GTM_ID` is present, GTM owns Google tags and direct GA4 is skipped to avoid double-counted pageviews.

See `docs/launch-analytics-and-profiles.md` for the launch checklist.

## Build your app

Continue building your app on:

**[https://v0.app/chat/leji11qgIYq](https://v0.app/chat/leji11qgIYq)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
