export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  date: string
  author: string
  authorRole: string
  category: string
  readTime: string
  featured?: boolean
}

const posts: BlogPost[] = [
  {
    slug: "digital-counterparts-not-tools",
    title: "Digital Counterparts, Not Tools",
    description:
      "Why we stopped building features and started building coworkers. The shift from software tools to autonomous digital counterparts changes everything about how businesses scale.",
    content: `The software industry has spent decades building tools. Dashboards, CRMs, email clients, project managers — all designed to help humans do work faster.

We think that model is broken.

At Hotlist AI, we build digital counterparts. Not tools you use, but systems that work alongside you. The distinction matters more than most people realize.

## The Tool Problem

A tool waits for input. It sits there, doing nothing, until a human clicks, types, or drags something. Every action requires a decision. Every decision costs attention. And attention is the most expensive resource a founder has.

When you multiply this across every tool in a modern business stack — CRM, email, analytics, scheduling, invoicing — you get a founder who spends 80% of their day operating software instead of operating their business.

## The Counterpart Model

A digital counterpart doesn't wait. It observes context, makes decisions, and executes. It understands the difference between a lead that needs nurturing and one that's ready to close. It knows when an email requires your personal attention versus a templated response.

Estate Mogul doesn't just organize your real estate data — it runs your boardroom. Six specialized agents handle everything from asset management to tenant relations to strategic planning. You don't operate it. It operates with you.

LyftEmail doesn't just sort your inbox — it reads, categorizes, prioritizes, and drafts responses. Inbox zero isn't a goal. It's the default state.

## Why This Matters

The businesses that win in the next decade won't be the ones with the best tools. They'll be the ones with the best counterparts — systems that multiply human judgment instead of just automating human labor.

We're building those systems. Every product in The Lab is designed around this principle: software should think, not just process.

If you're building something that matters and want a counterpart instead of another tool, we should talk.`,
    date: "2025-12-15",
    author: "Philip Pines",
    authorRole: "Founder & CEO",
    category: "Philosophy",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "why-we-built-estate-mogul",
    title: "Why We Built Estate Mogul",
    description:
      "Real estate professionals manage complexity that most software ignores. Estate Mogul was built to handle the full weight of property operations with six specialized AI agents.",
    content: `Real estate is one of the most complex industries to operate in. Not because the transactions are hard — but because the surface area is enormous.

A single property manager might juggle tenant communications, maintenance schedules, lease renewals, financial projections, market analysis, and regulatory compliance. Multiply that across a portfolio and you have a job that no single human can do well.

## The Gap in the Market

Every real estate tool we evaluated did one thing. Tenant management OR financial modeling OR market analysis. None of them connected the dots. None of them could look at a tenant complaint, cross-reference it with the maintenance budget, check the lease terms, and draft a response — all in one motion.

That's what Estate Mogul does.

## Six Agents, One Boardroom

We designed Estate Mogul as a digital boardroom. Not a dashboard. Not a spreadsheet. A boardroom with six specialized agents, each with a clear mandate:

**The Asset Agent** tracks property values, market conditions, and investment performance across your entire portfolio.

**The Contract Agent** manages leases, renewals, and legal compliance. It flags issues before they become problems.

**The Tenant Agent** handles all tenant communication — from maintenance requests to lease negotiations — with context awareness that a generic chatbot can't match.

**The Analyst** runs financial projections, ROI calculations, and scenario modeling in real time.

**The Compliance Agent** monitors local regulations, permit requirements, and reporting deadlines.

**The Strategist** synthesizes data from all five agents and surfaces recommendations — when to buy, when to sell, when to hold.

## The Result

Property managers using Estate Mogul don't work less. They work differently. Instead of spending hours in spreadsheets and email threads, they spend time on the decisions that actually matter — the ones that require human judgment, relationships, and instinct.

Everything else? The counterpart handles it.`,
    date: "2025-11-28",
    author: "Philip Pines",
    authorRole: "Founder & CEO",
    category: "Products",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "speed-over-sprawl",
    title: "Speed Over Sprawl: How We Ship",
    description:
      "Most companies confuse activity with progress. We ship fast, iterate faster, and never confuse a roadmap with results.",
    content: `There's a disease in the software industry. It's called "roadmap theater."

Companies spend months planning features nobody asked for, building consensus nobody needs, and shipping products nobody uses. By the time the roadmap is done, the market has moved.

We don't do roadmaps. We ship.

## The Hotlist Approach

Every product at Hotlist AI follows the same cycle:

**Week 1:** Build the core. Not a prototype. Not an MVP. The actual core functionality that solves the actual problem.

**Week 2:** Test with real users. Not focus groups. Not surveys. Real people using the real product in their real business.

**Week 3:** Iterate based on what broke, what confused, and what delighted.

**Week 4:** Ship or kill. If it works, it goes to The Lab. If it doesn't, we learn and move on.

This isn't reckless. It's disciplined. The discipline is in knowing what to cut, not what to add.

## Why Speed Matters

Speed isn't about being first. It's about learning first. Every week a product sits in development is a week of feedback you're not getting. Every feature you plan without shipping is a hypothesis you're not testing.

The fastest way to build something great is to build something real and put it in front of people who need it.

## What We Cut

We cut meetings. Most decisions don't need consensus — they need clarity.

We cut features. Every product launches with the minimum surface area needed to deliver maximum value.

We cut perfection. Version one of everything we build looks nothing like version ten. That's not a bug. That's the process.

## The Lab as a Living System

The Lab isn't a product catalog. It's a living system where every product evolves based on usage, feedback, and emerging capability. Estate Mogul today is fundamentally different from Estate Mogul six months ago — because six months of real-world usage taught us things no amount of planning could have predicted.

Speed over sprawl. Ship then iterate. Fast beats perfect.

That's how we build.`,
    date: "2025-11-10",
    author: "Philip Pines",
    authorRole: "Founder & CEO",
    category: "Culture",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "lead-generation-is-broken",
    title: "Lead Generation Is Broken. Here's How We Fix It.",
    description:
      "Most lead gen is a numbers game with terrible numbers. Hotlist Funnels use behavioral psychology, AI qualification, and conversion science to generate leads that actually close.",
    content: `The average lead generation funnel converts at 2-3%. That means for every 100 people who see your landing page, 97 leave without doing anything. Most marketers accept this as normal.

We think it's unacceptable.

## The Problem With Traditional Lead Gen

Traditional lead generation treats every visitor the same. Same page. Same form. Same follow-up email. It doesn't matter if someone arrived from a Google search for "best real estate agent near me" or stumbled in from a random social media post — they see the same thing.

That's like a salesperson using the same pitch on every person who walks into a store, regardless of what they're looking for.

## The Hotlist Funnels Approach

Hotlist Funnels are built on three principles:

**1. Behavioral Intelligence**

Every funnel tracks how visitors interact — what they read, where they pause, what they skip. This data feeds into our Lead Intelligence system, which scores and segments visitors in real time. By the time someone fills out a form, we already know their intent level, their likely objections, and the best approach for follow-up.

**2. Conversion Psychology**

Every element in a Hotlist Funnel is designed with behavioral psychology in mind. The copy, the layout, the form fields, the calls to action — all optimized for decision-making science. We don't guess what works. We test what works.

**3. Speed to Contact**

The #1 factor in lead conversion isn't the quality of your pitch. It's speed. Leads contacted within 5 minutes are 21x more likely to convert than leads contacted after 30 minutes. Hotlist Funnels integrate directly with your CRM and trigger instant follow-up — via email, SMS, or phone — the moment a lead comes in.

## The Results

Our funnels consistently convert at 8-15%, depending on the industry. For some verticals — particularly real estate and solar — we've seen conversion rates above 20%.

The difference isn't magic. It's engineering. Every funnel is built, tested, and optimized with the same rigor we apply to our software products. Because lead generation isn't a marketing problem. It's a systems problem.

And we build systems.`,
    date: "2025-10-22",
    author: "Philip Pines",
    authorRole: "Founder & CEO",
    category: "Funnels",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "ai-should-simplify-not-complicate",
    title: "AI Should Simplify, Not Complicate",
    description:
      "The AI industry is obsessed with complexity. We're obsessed with clarity. Here's why the best AI products are the ones you barely notice.",
    content: `Open any AI product landing page and you'll see the same thing: buzzwords stacked on buzzwords. "Multi-modal transformer architecture with retrieval-augmented generation and chain-of-thought reasoning."

Nobody cares.

The person trying to manage 200 rental units doesn't care about your architecture. They care about whether their tenants are happy, their leases are current, and their portfolio is growing. The AI should handle the complexity so the human doesn't have to think about it.

## The Simplicity Principle

Every product we build at Hotlist AI follows what we call the Simplicity Principle: if you have to explain how the AI works for someone to use it, you've failed.

Estate Mogul doesn't ask users to write prompts. It doesn't require configuration wizards or training sessions. You connect your data, and the agents start working. The complexity is in the backend. The experience is clean.

LyftEmail doesn't have an "AI settings" panel. It reads your patterns, learns your priorities, and gets to work. No toggles. No sliders. No "AI confidence threshold" settings that nobody understands.

## Why This Matters

The biggest barrier to AI adoption isn't technology. It's friction. Every configuration option, every prompt box, every "would you like to customize this?" dialog is a friction point that kills adoption.

The best AI products are invisible. They do their job so well that you forget there's intelligence behind them. You just experience the outcome: faster decisions, cleaner workflows, better results.

## Our Standard

Before any product leaves The Lab, it passes what we call the "first-morning test." Can someone use this product on their first morning without reading documentation? If the answer is no, it's not ready.

This doesn't mean our products are simple. Estate Mogul is one of the most sophisticated multi-agent systems in the real estate space. But the sophistication is in the engine, not the interface.

AI should feel like a great assistant — one who anticipates what you need, handles what you don't want to deal with, and stays out of your way the rest of the time.

That's the standard. Anything less is just technology for technology's sake.`,
    date: "2025-10-05",
    author: "Philip Pines",
    authorRole: "Founder & CEO",
    category: "Philosophy",
    readTime: "4 min read",
    featured: false,
  },
]

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedPost(): BlogPost | undefined {
  return posts.find((p) => p.featured)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter((p) => p.category === category).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllCategories(): string[] {
  return [...new Set(posts.map((p) => p.category))]
}
