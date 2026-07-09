# Hotlist Engine Search Console SEO Release

Last updated: 2026-07-09

Canonical property:

- `https://www.hotlistengine.com`

Submit these in Google Search Console for the `hotlistengine.com` domain property:

- `https://www.hotlistengine.com/sitemap.xml`
- `https://www.hotlistengine.com/sitemap-images.xml`

Release checks:

- The apex domain redirects to the `www` canonical.
- `robots.txt` allows public crawling and declares both sitemap URLs.
- `sitemap.xml` lists only final, indexable URLs.
- Redirected legacy routes are excluded from the sitemap.
- Core metadata, Open Graph URLs, RSS links, JSON-LD IDs, and IndexNow defaults use the same `www` canonical.
- Search Console verification can be supplied with `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.

Manual Search Console flow:

1. Open Search Console for the `hotlistengine.com` domain property.
2. Go to `Indexing > Sitemaps`.
3. Submit `https://www.hotlistengine.com/sitemap.xml`.
4. Submit `https://www.hotlistengine.com/sitemap-images.xml`.
5. Use URL Inspection on `https://www.hotlistengine.com/`, `/follow-up-leak-audit`, `/follow-up-boss-cleanup`, and `/sample-leak-report`, then request indexing after the deployment is live.
