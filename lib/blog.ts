export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  date: string
  author: string
  authorRole: string
  category: string
  tags: string[]
  readTime: string
  featured?: boolean
}

const posts: BlogPost[] = [
  {
    slug: "where-real-estate-leads-leak-inside-a-crm",
    title: "Where real-estate leads go quiet inside a CRM",
    description:
      "The common response, routing, nurture, stale-lead, and accountability gaps that turn paid leads into missed opportunities.",
    content: `Most teams do not have an empty CRM problem. They have an underworked CRM problem.

The leads are there. The tasks are there. The old conversations are there. The issue is that nobody can clearly see which lead needs attention next.

## The leak usually starts with ownership

If a lead enters the CRM without a clear owner, the system is already leaking. Round robin alone is not enough when response time, source quality, and agent capacity vary.

Every lead needs an owner, a stage, and a next action.

## The second leak is follow-up timing

Speed to lead matters, but the second and third touch often decide whether the conversation survives.

Teams lose momentum when the first response happens but no useful cadence follows.

## The third leak is stale database value

Old leads are not all dead. Many are simply unsegmented.

A stale-lead recovery system separates revive-now contacts from long-term nurture and true dead records.

## What to inspect first

- New lead response time by source
- Owner assignment and missed tasks
- Stage aging
- Smart list usefulness
- Stale-lead segments
- Team lead visibility

Before buying more leads, find where the current ones are going quiet. A free Lead Follow-Up Audit is the fastest way to see it in plain language.`,
    date: "2026-07-04",
    author: "Johnny Apple",
    authorRole: "Founder, Hotlist",
    category: "Follow-Up Gaps",
    tags: ["CRM", "follow-up gaps", "real estate leads", "lead routing"],
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "follow-up-boss-cleanup-checklist-for-teams",
    title: "Follow Up Boss cleanup checklist for teams",
    description:
      "A practical checklist for cleaning tags, stages, smart lists, owners, stale leads, and overdue follow-up.",
    content: `Follow Up Boss can be incredibly useful when the operating rules are clean.

It becomes harder to trust when years of tags, stages, owners, and stale records pile up without a simple cleanup rhythm.

## Start with owner clarity

Every active lead should have a responsible owner. If ownership is unclear, tasks and reminders will not fix the underlying problem.

## Clean the lists agents actually use

Smart lists should show today’s best actions, not every possible segment the team has ever created.

## Segment stale leads before messaging

Do not blast the database. Separate leads by stage, source, last activity, and intent signals.

## Cleanup priorities

- Duplicates
- Tags and stages
- Lead-source visibility
- Overdue tasks
- Smart lists
- Stale recovery segments

Hotlist is not affiliated with or endorsed by Follow Up Boss. Start with a free Lead Follow-Up Audit to see what to clean up first.`,
    date: "2026-07-04",
    author: "Johnny Apple",
    authorRole: "Founder, Hotlist",
    category: "CRM Discipline",
    tags: ["Follow Up Boss", "CRM cleanup", "real estate teams"],
    readTime: "4 min read",
  },
  {
    slug: "the-most-common-follow-up-boss-automation-mistakes",
    title: "The most common Follow Up Boss automation mistakes",
    description:
      "Why action plans, smart lists, routing, and tasks can exist while leads still go cold.",
    content: `Automation can exist and still fail.

The question is not whether the CRM has action plans. The question is whether those action plans create the right next action at the right time for the right owner.

## Mistake 1: assuming tasks equal accountability

A task only matters if someone owns it, sees it, and is expected to complete it.

## Mistake 2: creating too many smart lists

When every list is important, no list is important.

## Mistake 3: routing without escalation

If a hot lead is assigned but not worked, the system needs to surface that before the opportunity is cold.

## Mistake 4: no stale-lead path

Old leads should not live forever in vague nurture. They need segmentation and recovery logic.

A Lead Follow-Up Audit shows which automations are helping and which are just creating noise.`,
    date: "2026-07-04",
    author: "Johnny Apple",
    authorRole: "Founder, Hotlist",
    category: "CRM Discipline",
    tags: ["Follow Up Boss", "automation", "accountability"],
    readTime: "4 min read",
  },
  {
    slug: "how-to-segment-stale-real-estate-leads-before-you-reactivate-them",
    title: "How to segment stale real-estate leads before you reactivate them",
    description:
      "A cleaner way to decide which old leads deserve immediate attention, nurture, or cleanup.",
    content: `Stale leads are not one group.

Some need a human follow-up today. Some belong in long-term nurture. Some should be cleaned or archived.

## Useful stale-lead segments

- High-intent old inquiries
- No-response portal leads
- Long-term buyers
- Old seller conversations
- Past clients and referral opportunities
- Bad data or duplicate records

## The goal

Revive the leads you already paid for without sounding robotic or desperate.

The cleaner the segments, the better the human handoff. Book a free Lead Follow-Up Audit if you are not sure where to start.`,
    date: "2026-07-04",
    author: "Johnny Apple",
    authorRole: "Founder, Hotlist",
    category: "Stale Lead Recovery",
    tags: ["stale leads", "reactivation", "database"],
    readTime: "4 min read",
  },
  {
    slug: "the-30-day-real-estate-database-reactivation-sequence",
    title: "The 30-day real-estate database reactivation sequence",
    description:
      "A simple recovery rhythm for old leads that starts with cleanup before outreach.",
    content: `A reactivation sequence should not start with a blast.

It should start with cleanup.

## Week 1: inspect and segment

Look at source, stage, owner, last activity, and whether the record has a believable next action.

## Week 2: prioritize

Choose the segments most likely to produce useful conversations.

## Week 3: message with context

Use short, human prompts that match the lead’s original intent.

## Week 4: route replies and review

The real work is making sure replies go to the right person quickly and that the next action is visible. Hotlist can install and manage this rhythm as your Tech Concierge.`,
    date: "2026-07-04",
    author: "Johnny Apple",
    authorRole: "Founder, Hotlist",
    category: "Stale Lead Recovery",
    tags: ["database reactivation", "30-day plan", "nurture"],
    readTime: "5 min read",
  },
  {
    slug: "what-a-good-speed-to-lead-sla-looks-like",
    title: "What a good speed-to-lead SLA looks like",
    description:
      "How to think about first response, second touch, source differences, and missed-response escalation.",
    content: `Speed to lead is not just a stopwatch.

A good SLA defines the response expectation, owner, escalation path, and follow-up cadence after the first touch.

## A practical SLA includes

- Expected first response by source
- Who owns the lead
- What happens if no response occurs
- When the team lead is alerted
- What the second and third touch should be

Fast response without follow-through still creates gaps. A Lead Follow-Up Audit maps where that happens on your team.`,
    date: "2026-07-04",
    author: "Johnny Apple",
    authorRole: "Founder, Hotlist",
    category: "Speed to Lead",
    tags: ["speed to lead", "SLA", "routing"],
    readTime: "3 min read",
  },
  {
    slug: "round-robin-is-not-enough-for-real-estate-lead-routing",
    title: "Round robin is not enough for real-estate lead routing",
    description:
      "Why routing should include source quality, capacity, ownership, and escalation, not just equal distribution.",
    content: `Round robin feels fair. It is not always operationally smart.

The team needs to know who owns the lead, whether they responded, and what happens if they do not.

## Better routing asks

- Which sources need faster attention?
- Which agents are actually available?
- Which leads need team lead visibility?
- What happens when the owner misses the window?

Routing is accountability, not just distribution. See how yours is working with a free Lead Follow-Up Audit.`,
    date: "2026-07-04",
    author: "Johnny Apple",
    authorRole: "Founder, Hotlist",
    category: "Real Estate Systems",
    tags: ["lead routing", "accountability", "real estate teams"],
    readTime: "3 min read",
  },
  {
    slug: "when-ai-should-qualify-leads-and-when-humans-should-take-over",
    title: "When AI should qualify leads and when humans should take over",
    description:
      "A practical framework for automating busy work while keeping the right human moments intact.",
    content: `Automation should reduce busy work, not erase the relationship.

AI can help classify intent, prepare context, draft suggested replies, and surface overdue opportunities.

Humans should take over when timing, trust, negotiation, or emotional nuance matters.

## Good automation boundaries

- Summarize the record
- Suggest the next action
- Flag urgency
- Prepare the handoff
- Let the agent own the relationship

Automate the busy work. Keep the human handoff.`,
    date: "2026-07-04",
    author: "Johnny Apple",
    authorRole: "Founder, Hotlist",
    category: "Nurture",
    tags: ["AI qualification", "human handoff", "nurture"],
    readTime: "4 min read",
  },
  {
    slug: "kvcore-vs-boldtrail-search-behavior-and-why-both-terms-matter",
    title: "kvCORE vs BoldTrail search behavior and why both terms matter",
    description:
      "Why real-estate teams and vendors need to account for both names when researching CRM follow-up problems.",
    content: `Search behavior does not always update as fast as product naming.

Some teams still search kvCORE. Others search BoldTrail. A useful content system should account for both terms without pretending the software solves follow-up by itself.

The deeper issue is the same: leads need ownership, timing, nurture, and recovery logic.

## What matters more than the name

- Are leads assigned clearly?
- Are smart lists useful?
- Are stale opportunities segmented?
- Is follow-up visible to the team lead?`,
    date: "2026-07-04",
    author: "Johnny Apple",
    authorRole: "Founder, Hotlist",
    category: "Real Estate Systems",
    tags: ["kvCORE", "BoldTrail", "CRM"],
    readTime: "3 min read",
  },
  {
    slug: "why-real-estate-crm-automation-fails-after-setup",
    title: "Why real-estate CRM automation fails after setup",
    description:
      "Automation fails when the operating rhythm, ownership, cleanup, and accountability are not maintained.",
    content: `Most CRM automation does not fail on day one.

It fails after the setup gets old.

Stages drift. Tags multiply. Smart lists stop matching reality. Agents stop trusting the dashboard.

## The fix is operational

The team needs a rhythm for reviewing leaks, cleaning lists, repairing follow-up gaps, and keeping every lead tied to a next action.

That is the difference between a configured CRM and follow-up that actually happens. Hotlist helps teams get there — starting with a free Lead Follow-Up Audit.`,
    date: "2026-07-04",
    author: "Johnny Apple",
    authorRole: "Founder, Hotlist",
    category: "Real Estate Systems",
    tags: ["CRM automation", "follow-up", "systems"],
    readTime: "4 min read",
  },
]

export function slugifyCategory(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedPost(): BlogPost | undefined {
  return posts.find((post) => post.featured)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  const normalized = slugifyCategory(category)
  return getAllPosts().filter((post) => slugifyCategory(post.category) === normalized)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(posts.map((post) => post.category)))
}

export function getCategoryBySlug(slug: string): string | undefined {
  return getAllCategories().find((category) => slugifyCategory(category) === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  return getAllPosts()
    .filter((post) => post.slug !== currentSlug)
    .map((post) => ({
      post,
      score:
        (post.category === currentPost.category ? 3 : 0) +
        post.tags.filter((tag) => currentPost.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post)
}
