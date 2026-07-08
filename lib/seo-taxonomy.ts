export type HubEntry = {
  slug: string
  title: string
  searchIntent: string
  summary: string
  whoItsFor: string[]
  coreQuestions: string[]
  nextSteps: { label: string; href: string }[]
}

export type UseCaseEntry = {
  slug: string
  title: string
  searchIntent: string
  summary: string
  outcomes: string[]
  systems: string[]
  relatedIndustrySlugs: string[]
  relatedCompareSlugs: string[]
}

export type IndustryEntry = {
  slug: string
  title: string
  searchIntent: string
  summary: string
  recurringPain: string[]
  highLeverageDeployments: string[]
  relatedUseCaseSlugs: string[]
}

export type CompareEntry = {
  slug: string
  title: string
  searchIntent: string
  summary: string
  evaluatedOptions: string[]
  whenHotlistFits: string[]
  internalLinks: { label: string; href: string }[]
}

export type GlossaryEntry = {
  slug: string
  term: string
  shortDefinition: string
  deeperExplanation: string
  relatedTerms: string[]
  nextLinks: { label: string; href: string }[]
}

export const hubEntries: HubEntry[] = [
  {
    slug: "real-estate-crm-follow-up",
    title: "Real Estate CRM Follow-Up",
    searchIntent: "real estate crm follow up system",
    summary:
      "How real-estate teams keep every lead tied to a next action inside the CRM they already use.",
    whoItsFor: ["5-25 agent teams", "Boutique brokerages", "Team leads with active lead flow"],
    coreQuestions: [
      "Which leads do not have a next action?",
      "Where does owner accountability break?",
      "Which old opportunities are still recoverable?",
    ],
    nextSteps: [
      { label: "Book Your Lead Follow-Up Audit", href: "/follow-up-leak-audit" },
      { label: "See a Sample Audit Report", href: "/sample-leak-report" },
      { label: "Follow Up Boss cleanup", href: "/follow-up-boss-cleanup" },
    ],
  },
  {
    slug: "follow-up-leak-audit",
    title: "Lead Follow-Up Audit",
    searchIntent: "real estate follow up audit",
    summary:
      "A free 30-minute review that shows where response, routing, nurture, stale-lead recovery, and accountability break.",
    whoItsFor: ["Team leads", "Broker owners", "Operations-minded agents"],
    coreQuestions: [
      "Where are warm leads waiting too long?",
      "Which stages and lead lists are underworked?",
      "What should be fixed in the first 30 days?",
    ],
    nextSteps: [
      { label: "Book Your Lead Follow-Up Audit", href: "/follow-up-leak-audit" },
      { label: "See a Sample Audit Report", href: "/sample-leak-report" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "stale-lead-recovery",
    title: "Stale Lead Recovery",
    searchIntent: "stale real estate lead recovery",
    summary:
      "How to segment and revive real-estate leads already paid for without blasting the whole database.",
    whoItsFor: ["Teams with old portal leads", "Brokerages with neglected databases", "Agents with buried nurture lists"],
    coreQuestions: [
      "Which stale leads are worth reviving first?",
      "What message should go next?",
      "When should automation hand off to a human?",
    ],
    nextSteps: [
      { label: "CRM reactivation", href: "/learn/crm-reactivation" },
      { label: "Database reactivation", href: "/compare/real-estate-database-reactivation" },
      { label: "Book Your Lead Follow-Up Audit", href: "/follow-up-leak-audit" },
    ],
  },
  {
    slug: "speed-to-lead",
    title: "Speed to Lead for Real Estate Teams",
    searchIntent: "speed to lead real estate team",
    summary:
      "A practical view of fast response, second touch discipline, routing, and follow-up accountability.",
    whoItsFor: ["Teams buying inbound leads", "Brokerages measuring response time", "Agents working portal leads"],
    coreQuestions: [
      "How fast should the first response happen?",
      "What happens after the first text or call?",
      "Which source or agent is slowing down response?",
    ],
    nextSteps: [
      { label: "Lead routing accountability", href: "/use-cases/lead-routing-accountability" },
      { label: "Book Your Lead Follow-Up Audit", href: "/follow-up-leak-audit" },
      { label: "See a Sample Audit Report", href: "/sample-leak-report" },
    ],
  },
  {
    slug: "crm-reactivation",
    title: "CRM Reactivation",
    searchIntent: "real estate database reactivation",
    summary:
      "A system for turning neglected CRM records into prioritized recovery segments and human follow-up moments.",
    whoItsFor: ["Teams with old databases", "Rainmakers with old lead spend", "Broker owners with dormant contacts"],
    coreQuestions: [
      "Which records should be cleaned before outreach?",
      "How should stale contacts be segmented?",
      "What should be automated versus handled personally?",
    ],
    nextSteps: [
      { label: "Stale lead recovery", href: "/learn/stale-lead-recovery" },
      { label: "Follow Up Boss cleanup", href: "/follow-up-boss-cleanup" },
      { label: "Book Your Lead Follow-Up Audit", href: "/follow-up-leak-audit" },
    ],
  },
]

export const useCaseEntries: UseCaseEntry[] = [
  {
    slug: "lead-routing-accountability",
    title: "Lead Routing and Accountability",
    searchIntent: "real estate lead routing accountability",
    summary: "Make ownership clear when a new lead enters, gets reassigned, or misses the expected response window.",
    outcomes: ["Clear owner for every lead", "Fewer stale handoffs", "Earlier escalation for missed follow-up"],
    systems: ["Routing rules", "Owner visibility", "Escalation checkpoints"],
    relatedIndustrySlugs: ["real-estate-teams"],
    relatedCompareSlugs: ["hotlistai-vs-crm-automation"],
  },
  {
    slug: "nurture-discipline",
    title: "Nurture Discipline",
    searchIntent: "real estate nurture system",
    summary: "Keep long-cycle buyers and sellers in a useful rhythm without relying on memory or generic drips.",
    outcomes: ["More consistent follow-up", "Cleaner human handoffs", "Less neglected nurture activity"],
    systems: ["Stage-based reminders", "Human handoff triggers", "Message next-action planning"],
    relatedIndustrySlugs: ["real-estate-teams"],
    relatedCompareSlugs: ["isa-vs-follow-up-execution"],
  },
  {
    slug: "stale-lead-recovery",
    title: "Stale Lead Recovery",
    searchIntent: "stale real estate leads reactivation",
    summary: "Find and prioritize old opportunities that deserve fresh attention before buying more leads.",
    outcomes: ["Recovered database value", "Cleaner stale segments", "Better reactivation timing"],
    systems: ["Database segmentation", "Recovery lists", "Follow-up prompts"],
    relatedIndustrySlugs: ["real-estate-teams"],
    relatedCompareSlugs: ["real-estate-database-reactivation"],
  },
  {
    slug: "follow-up-boss-cleanup",
    title: "Follow Up Boss Cleanup",
    searchIntent: "follow up boss cleanup service",
    summary: "Clean stages, tags, lists, owners, stale leads, and overdue activity so the team can trust the CRM.",
    outcomes: ["Cleaner lists", "Less confusion", "More reliable next actions"],
    systems: ["Tag and stage cleanup", "Lead list repair", "Lead source visibility"],
    relatedIndustrySlugs: ["real-estate-teams"],
    relatedCompareSlugs: ["follow-up-boss-cleanup"],
  },
  {
    slug: "speed-to-lead",
    title: "Speed to Lead",
    searchIntent: "real estate speed to lead workflow",
    summary: "Measure and repair first response gaps by source, agent, and time-to-touch.",
    outcomes: ["Faster response", "Better source visibility", "Fewer unworked hot leads"],
    systems: ["Response-time tracking", "Routing checks", "Missed-response escalation"],
    relatedIndustrySlugs: ["real-estate-teams"],
    relatedCompareSlugs: ["hotlistai-vs-buying-more-leads"],
  },
]

export const industryEntries: IndustryEntry[] = [
  {
    slug: "real-estate-teams",
    title: "Follow-Up for Real Estate Teams",
    searchIntent: "real estate crm follow up for teams",
    summary:
      "A real-estate-first approach to response, routing, nurture, stale-lead recovery, and accountability.",
    recurringPain: ["Warm leads go cold", "CRM lists are underworked", "Team leads lack follow-up visibility"],
    highLeverageDeployments: ["Lead Follow-Up Audit", "30-Day Fix Plan", "Follow-Up Scorecard"],
    relatedUseCaseSlugs: ["lead-routing-accountability", "stale-lead-recovery", "speed-to-lead"],
  },
  {
    slug: "boutique-brokerages",
    title: "Follow-Up Systems for Boutique Brokerages",
    searchIntent: "boutique brokerage crm follow up",
    summary:
      "Help smaller brokerages turn lead flow and old databases into a clearer operating rhythm.",
    recurringPain: ["Founder-led follow-up", "Inconsistent agent adoption", "No reliable recovery list"],
    highLeverageDeployments: ["Follow-Up Scorecard", "Stale-lead recovery", "Agent accountability"],
    relatedUseCaseSlugs: ["nurture-discipline", "lead-routing-accountability"],
  },
]

export const compareEntries: CompareEntry[] = [
  {
    slug: "hotlistai-vs-buying-more-leads",
    title: "Hotlist vs Buying More Leads",
    searchIntent: "buy more real estate leads or fix follow up",
    summary:
      "Compare spending more on acquisition with repairing follow-up gaps inside the current CRM.",
    evaluatedOptions: ["Buying more leads", "Hiring more follow-up labor", "Fixing follow-up with a Tech Concierge"],
    whenHotlistFits: [
      "You already have meaningful lead flow",
      "Warm leads are going cold before a real conversation",
      "You need proof before increasing lead spend",
    ],
    internalLinks: [
      { label: "Book Your Lead Follow-Up Audit", href: "/follow-up-leak-audit" },
      { label: "See a Sample Audit Report", href: "/sample-leak-report" },
    ],
  },
  {
    slug: "hotlistai-vs-crm-automation",
    title: "Hotlist vs CRM Automation",
    searchIntent: "real estate crm automation vs follow up system",
    summary:
      "CRM automation can trigger tasks, but teams still need clear ownership, recovery, and accountability to keep follow-up running.",
    evaluatedOptions: ["Native CRM automations", "Generic workflow tools", "Hotlist Tech Concierge"],
    whenHotlistFits: [
      "Automations exist but leads still slip",
      "Lead lists are not turning into action",
      "Team visibility is weaker than the dashboard suggests",
    ],
    internalLinks: [
      { label: "Follow Up Boss Automation Audit", href: "/follow-up-boss-automation-audit" },
      { label: "CRM follow-up hub", href: "/learn/real-estate-crm-follow-up" },
    ],
  },
  {
    slug: "follow-up-boss-automation-audit",
    title: "Follow Up Boss Automation Audit",
    searchIntent: "follow up boss automation audit",
    summary:
      "Review action plans, lead lists, routing rules, tasks, and owner accountability in Follow Up Boss.",
    evaluatedOptions: ["Current Follow Up Boss setup", "More native automation", "Lead Follow-Up Audit"],
    whenHotlistFits: [
      "The team uses Follow Up Boss but does not trust the workflow",
      "Action plans exist but follow-up still breaks",
      "You need a clear report of what to repair first",
    ],
    internalLinks: [
      { label: "Follow Up Boss Automation Audit", href: "/follow-up-boss-automation-audit" },
      { label: "Follow Up Boss Cleanup", href: "/follow-up-boss-cleanup" },
    ],
  },
  {
    slug: "follow-up-boss-cleanup",
    title: "Follow Up Boss Cleanup",
    searchIntent: "follow up boss cleanup",
    summary:
      "Compare living with a messy CRM against cleaning tags, stages, stale leads, lead lists, and overdue follow-up.",
    evaluatedOptions: ["Manual cleanup", "Ignoring old data", "Hotlist cleanup audit"],
    whenHotlistFits: [
      "The CRM has too many stale or confusing records",
      "Agents do not know which list to trust",
      "Old opportunities need segmentation before reactivation",
    ],
    internalLinks: [
      { label: "Follow Up Boss Cleanup", href: "/follow-up-boss-cleanup" },
      { label: "Stale lead recovery", href: "/learn/stale-lead-recovery" },
    ],
  },
  {
    slug: "real-estate-database-reactivation",
    title: "Real Estate Database Reactivation",
    searchIntent: "real estate database reactivation",
    summary:
      "Compare broad database blasts with prioritized recovery based on stage, intent, source, and last meaningful touch.",
    evaluatedOptions: ["Mass email blast", "Generic drip campaign", "Segmented recovery system"],
    whenHotlistFits: [
      "You have old leads already paid for",
      "The database is too messy to message all at once",
      "You need human handoffs for high-intent replies",
    ],
    internalLinks: [
      { label: "CRM reactivation", href: "/learn/crm-reactivation" },
      { label: "Book Your Lead Follow-Up Audit", href: "/follow-up-leak-audit" },
    ],
  },
  {
    slug: "ai-isa-vs-human-isa",
    title: "AI ISA vs Human ISA",
    searchIntent: "ai isa vs human isa real estate",
    summary:
      "Compare outsourced or automated ISA motions with Tech Concierge support that keeps humans in the right handoff moments.",
    evaluatedOptions: ["Human ISA", "AI ISA", "Tech Concierge follow-up support"],
    whenHotlistFits: [
      "You need consistency before another hire",
      "You do not want robotic lead conversion",
      "You need the CRM to surface the right human handoff",
    ],
    internalLinks: [
      { label: "Nurture discipline", href: "/use-cases/nurture-discipline" },
      { label: "See a Sample Audit Report", href: "/sample-leak-report" },
    ],
  },
  {
    slug: "isa-vs-follow-up-execution",
    title: "ISA vs Follow-Up Support",
    searchIntent: "real estate isa vs follow up execution",
    summary:
      "A team may not need more labor first. It may need clearer ownership, routing, visibility, and next actions.",
    evaluatedOptions: ["Hire an ISA", "Add more automation", "Repair follow-up with a Tech Concierge"],
    whenHotlistFits: [
      "The team has inconsistent process before headcount shortage",
      "Existing leads are underworked",
      "You need a cleaner operating rhythm first",
    ],
    internalLinks: [
      { label: "Lead routing accountability", href: "/use-cases/lead-routing-accountability" },
      { label: "Book Your Lead Follow-Up Audit", href: "/follow-up-leak-audit" },
    ],
  },
  {
    slug: "kvcore-follow-up-automation",
    title: "kvCORE Follow-Up Automation",
    searchIntent: "kvcore follow up automation",
    summary:
      "How to think about kvCORE follow-up workflows, stale-lead segmentation, and accountability before adding more leads.",
    evaluatedOptions: ["Native kvCORE automation", "Manual follow-up", "Lead Follow-Up Audit"],
    whenHotlistFits: ["You need clearer next actions", "Stale leads are underworked", "Team visibility is weak"],
    internalLinks: [{ label: "Book Your Lead Follow-Up Audit", href: "/follow-up-leak-audit" }],
  },
  {
    slug: "lofty-follow-up-automation",
    title: "Lofty Follow-Up Automation",
    searchIntent: "lofty follow up automation real estate",
    summary:
      "How Lofty teams can diagnose response, routing, nurture, and stale-lead recovery gaps.",
    evaluatedOptions: ["Native Lofty automation", "Manual agent follow-up", "Lead Follow-Up Audit"],
    whenHotlistFits: ["Follow-up is inconsistent", "Old leads need segmentation", "Owners are unclear"],
    internalLinks: [{ label: "Book Your Lead Follow-Up Audit", href: "/follow-up-leak-audit" }],
  },
  {
    slug: "boomtown-lead-routing",
    title: "BoomTown Lead Routing",
    searchIntent: "boomtown lead routing real estate",
    summary:
      "A practical comparison for teams trying to improve BoomTown routing, owner visibility, and speed-to-lead.",
    evaluatedOptions: ["Current routing", "Manual reassignment", "Lead Follow-Up Audit"],
    whenHotlistFits: ["Routing is unclear", "Response timing varies by source", "Team lead visibility is late"],
    internalLinks: [{ label: "Speed to lead", href: "/learn/speed-to-lead" }],
  },
]

export const glossaryEntries: GlossaryEntry[] = [
  {
    slug: "follow-up-leak",
    term: "Follow-Up Gap",
    shortDefinition: "A place where a real-estate lead loses momentum because no clear next action happens.",
    deeperExplanation:
      "Gaps usually happen in response time, routing, stale nurture, unclear ownership, or missed accountability checks.",
    relatedTerms: ["speed-to-lead", "next-action", "crm-reactivation"],
    nextLinks: [{ label: "Book Your Lead Follow-Up Audit", href: "/follow-up-leak-audit" }],
  },
  {
    slug: "next-action",
    term: "Next Action",
    shortDefinition: "The specific follow-up step assigned to a lead, with an owner and timing.",
    deeperExplanation:
      "A CRM record without a next action becomes storage. A record with a next action becomes part of a working follow-up rhythm.",
    relatedTerms: ["follow-up-leak", "lead-routing", "nurture-discipline"],
    nextLinks: [{ label: "CRM follow-up", href: "/learn/real-estate-crm-follow-up" }],
  },
  {
    slug: "lead-routing",
    term: "Lead Routing",
    shortDefinition: "The rules and accountability that decide who owns a lead and what happens next.",
    deeperExplanation:
      "Routing should include source, priority, owner, response expectations, and escalation if the lead is not worked.",
    relatedTerms: ["speed-to-lead", "next-action"],
    nextLinks: [{ label: "Lead routing accountability", href: "/use-cases/lead-routing-accountability" }],
  },
  {
    slug: "speed-to-lead",
    term: "Speed to Lead",
    shortDefinition: "How quickly a team responds after a new lead raises their hand.",
    deeperExplanation:
      "Speed matters, but it is not enough if the second touch never happens or the owner disappears after the first response.",
    relatedTerms: ["lead-routing", "follow-up-leak"],
    nextLinks: [{ label: "Speed to lead hub", href: "/learn/speed-to-lead" }],
  },
  {
    slug: "crm-reactivation",
    term: "CRM Reactivation",
    shortDefinition: "The process of segmenting and reviving old CRM opportunities already paid for.",
    deeperExplanation:
      "Reactivation works best when stale leads are cleaned, prioritized, and routed into a human-aware follow-up rhythm.",
    relatedTerms: ["stale-lead-recovery", "nurture-discipline"],
    nextLinks: [{ label: "CRM reactivation hub", href: "/learn/crm-reactivation" }],
  },
  {
    slug: "nurture-discipline",
    term: "Nurture Discipline",
    shortDefinition: "The operating rhythm that keeps long-cycle leads from disappearing inside the CRM.",
    deeperExplanation:
      "Good nurture is not just a drip. It is stage-aware follow-up with clear handoff moments and accountability.",
    relatedTerms: ["next-action", "crm-reactivation"],
    nextLinks: [{ label: "Nurture use case", href: "/use-cases/nurture-discipline" }],
  },
]

export const hubMap = new Map(hubEntries.map((entry) => [entry.slug, entry]))
export const useCaseMap = new Map(useCaseEntries.map((entry) => [entry.slug, entry]))
export const industryMap = new Map(industryEntries.map((entry) => [entry.slug, entry]))
export const compareMap = new Map(compareEntries.map((entry) => [entry.slug, entry]))
export const glossaryMap = new Map(glossaryEntries.map((entry) => [entry.slug, entry]))

export function getHubBySlug(slug: string) {
  return hubMap.get(slug)
}

export function getUseCaseBySlug(slug: string) {
  return useCaseMap.get(slug)
}

export function getIndustryBySlug(slug: string) {
  return industryMap.get(slug)
}

export function getCompareBySlug(slug: string) {
  return compareMap.get(slug)
}

export function getGlossaryBySlug(slug: string) {
  return glossaryMap.get(slug)
}

export function getSeoProgrammaticUrls() {
  return [
    "/learn",
    ...hubEntries.map((entry) => `/learn/${entry.slug}`),
    "/use-cases",
    ...useCaseEntries.map((entry) => `/use-cases/${entry.slug}`),
    "/industries",
    ...industryEntries.map((entry) => `/industries/${entry.slug}`),
    "/compare",
    ...compareEntries.map((entry) => `/compare/${entry.slug}`),
    "/glossary",
    ...glossaryEntries.map((entry) => `/glossary/${entry.slug}`),
    "/resources",
  ]
}