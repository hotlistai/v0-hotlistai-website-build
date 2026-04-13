# HotlistAI SEO Inventory + Authority Map (2026-04-13)

## Discovery Summary
- Public route count (build output): 88 static/SSG routes + dynamic API/image routes.
- New crawl surfaces added: `/resources`, `/learn/*`, `/use-cases/*`, `/industries/*`, `/compare/*`, `/glossary/*`.
- Core orphan/coverage issue fixed: `/resources` now exists and links to all cluster systems.

## Ahrefs Inputs Found in This Repo
- No Ahrefs export files were present in this repository at execution time.
- Existing references found:
  - `BRAND-ALIGNMENT-REPORT.md` content gap section.
  - `robots` block for `AhrefsBot` (removed to avoid unnecessary crawler suppression).
- Action: ingest latest Ahrefs exports into `docs/seo/ahrefs/` for next iteration.

## Key URL Map
| URL | Page Type | Intent | Canonical | Index State | Schema | Action |
|---|---|---|---|---|---|---|
| `/` | Homepage | digital workforce infrastructure | self | index | Organization + WebSite | Added cluster-link module |
| `/resources` | Hub | discover all learning assets | self | index | default WebPage | New |
| `/learn` | Pillar index | topic education | self | index | default WebPage | New |
| `/learn/digital-workforce-infrastructure` | Pillar detail | concept definition | self | index | BreadcrumbList | New |
| `/learn/ai-operations-systems` | Pillar detail | implementation model | self | index | BreadcrumbList | New |
| `/learn/ai-deployment-implementation` | Pillar detail | deployment process | self | index | BreadcrumbList | New |
| `/learn/ai-governance-controls` | Pillar detail | governance intent | self | index | BreadcrumbList | New |
| `/learn/executive-execution-systems` | Pillar detail | executive workflow | self | index | BreadcrumbList | New |
| `/use-cases` | Use-case index | practical implementations | self | index | default WebPage | New |
| `/use-cases/ai-sdr-workflow` | Use-case detail | outbound ops | self | index | BreadcrumbList | New |
| `/use-cases/client-onboarding-automation` | Use-case detail | onboarding ops | self | index | BreadcrumbList | New |
| `/use-cases/inbox-triage-executive` | Use-case detail | executive triage | self | index | BreadcrumbList | New |
| `/industries` | Industry index | vertical fit | self | index | default WebPage | New |
| `/industries/real-estate` | Industry detail | real estate systems | self | index | BreadcrumbList | New |
| `/industries/b2b-saas` | Industry detail | saas systems | self | index | BreadcrumbList | New |
| `/industries/agencies` | Industry detail | agency systems | self | index | BreadcrumbList | New |
| `/compare` | Comparison index | alternatives intent | self | index | default WebPage | New |
| `/compare/hotlist-ai-vs-generic-ai-agents` | Comparison detail | alternative eval | self | index | BreadcrumbList | New |
| `/compare/hotlist-ai-vs-hiring-sdr-team` | Comparison detail | hiring vs system | self | index | BreadcrumbList | New |
| `/glossary` | Glossary index | term lookup | self | index | default WebPage | New |
| `/glossary/digital-counterpart` | Glossary detail | term definition | self | index | BreadcrumbList | New |
| `/glossary/workflow-governance` | Glossary detail | term definition | self | index | BreadcrumbList | New |
| `/deployments` | Commercial page | deployment evaluation | self | index | page metadata | Added related-link graph |
| `/governance` | Commercial page | governance evaluation | self | index | page metadata | Added related-link graph |
| `/how-it-works` | Commercial page | process validation | self | index | page metadata | Server-rendered metadata now active |
| `/blog` | Editorial hub | learning + trust | self | index | Blog schema | Existing |

## New Clusters
- Pillar cluster: `/learn/*`
- Use-case cluster: `/use-cases/*`
- Industry cluster: `/industries/*`
- Comparison cluster: `/compare/*`
- Glossary cluster: `/glossary/*`
- Discovery hub: `/resources`

## Technical SEO Changes
- Robots cleaned to a single clear policy; removed `_next` disallow.
- Sitemap now includes programmatic cluster URLs from `lib/seo-taxonomy.ts`.
- Added canonical host redirect (`www` -> apex) via `middleware.ts` (308).
- Added IndexNow submission endpoint `/api/indexnow` plus key route `/indexnow-key.txt`.
- Removed unsupported/over-claiming JSON-LD (fake aggregate ratings, unsupported claims).
- Replaced global schema with conservative valid Organization + WebSite graph.
- Converted core pages with client-only metadata blockers to server-compatible metadata patterns.

## Internal Linking Graph Additions
- Global nav/footer now include resources, use-cases, industries, compare, glossary.
- Homepage now includes explicit "Search Hub" section with six cluster links.
- Deployments and Governance pages now link into cluster ecosystem.
- Detail templates include related-links modules to avoid dead-end pages.

## Remaining Off-Site / Manual Actions
1. Upload latest Ahrefs exports into `docs/seo/ahrefs/` and map by URL.
2. Configure Google Search Console + Bing Webmaster verification tokens.
3. Set `INDEXNOW_KEY` and submit initial URL batches via `/api/indexnow`.
4. Validate structured data in Rich Results Test and Schema Markup Validator.
5. Submit sitemap in Google and Bing and monitor index coverage deltas.

## Priority Backlog (Next Highest-Impact)
1. Build a true content-gap importer from Ahrefs CSV -> route suggestions.
2. Add per-page FAQ schema where visible FAQ sections exist.
3. Add conversion event instrumentation for cluster pages (scroll/CTA/form events).
4. Add first-party comparison tables with benchmark methodology pages.
5. Add editorial author pages and stronger publisher/transparency docs.
