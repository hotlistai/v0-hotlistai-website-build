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
    slug: "digital-workforce-infrastructure",
    title: "Digital Workforce Infrastructure",
    searchIntent: "what is digital workforce infrastructure",
    summary:
      "A practical operating model for replacing coordination-heavy work with governed autonomous systems measured on throughput, cycle time, and margin.",
    whoItsFor: [
      "Founder-led service businesses with hiring pressure",
      "Revenue teams constrained by SDR handoff overhead",
      "Operations leaders fighting status-update drag",
    ],
    coreQuestions: [
      "What should remain human-owned versus automated?",
      "Which workflows create the biggest coordination tax?",
      "How do governance controls protect brand and compliance?",
    ],
    nextSteps: [
      { label: "Explore deployment lanes", href: "/deployments" },
      { label: "Read implementation model", href: "/how-it-works" },
      { label: "Understand governance", href: "/governance" },
    ],
  },
  {
    slug: "ai-operations-systems",
    title: "AI Operations Systems",
    searchIntent: "ai operations system implementation",
    summary:
      "How to design role-based AI operations systems that execute process work reliably instead of adding another dashboard.",
    whoItsFor: [
      "COOs and ops managers with workflow fragmentation",
      "Implementation teams handling repeat client delivery",
      "Founders with process debt across departments",
    ],
    coreQuestions: [
      "Where are bottlenecks caused by context switching?",
      "Which approvals are required before autonomous actions?",
      "How do we prove cycle-time reduction after rollout?",
    ],
    nextSteps: [
      { label: "Operations deployment details", href: "/deployments#operations" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Industry applications", href: "/industries" },
    ],
  },
  {
    slug: "ai-deployment-implementation",
    title: "AI Deployment and Implementation",
    searchIntent: "ai deployment framework for business",
    summary:
      "A deployment-first framework to move from pilot ideas to production AI systems with clear ownership, controls, and KPI baselines.",
    whoItsFor: [
      "Businesses stuck in perpetual AI pilot mode",
      "Teams needing production-ready rollout standards",
      "Operators replacing role-level manual work",
    ],
    coreQuestions: [
      "What should be audited before go-live?",
      "How do we structure shadow mode and approval gates?",
      "What metrics prove deployment quality within 30 days?",
    ],
    nextSteps: [
      { label: "How installation works", href: "/how-it-works" },
      { label: "Request audit", href: "/contact" },
      { label: "Frequently asked questions", href: "/faq" },
    ],
  },
  {
    slug: "ai-governance-controls",
    title: "AI Governance and Controls",
    searchIntent: "ai governance framework for operations",
    summary:
      "A practical governance layer for autonomous execution systems: approvals, auditability, role boundaries, escalation, and observability.",
    whoItsFor: [
      "Regulated or compliance-sensitive operators",
      "Teams concerned about brand risk in automation",
      "Leaders requiring traceable decision logs",
    ],
    coreQuestions: [
      "Which actions need pre-execution approval?",
      "How should escalation and exception handling work?",
      "How do we align controls with speed, not bureaucracy?",
    ],
    nextSteps: [
      { label: "Governance framework", href: "/governance" },
      { label: "Legal and policy pages", href: "/legal" },
      { label: "Comparison pages", href: "/compare" },
    ],
  },
  {
    slug: "executive-execution-systems",
    title: "Executive Execution Systems",
    searchIntent: "executive ai assistant system for operations",
    summary:
      "Execution systems for founders and executives that reduce inbox noise, shorten decision loops, and enforce follow-through on high-leverage work.",
    whoItsFor: [
      "Founder-CEOs with bottlenecked decision cadence",
      "Executives running cross-functional initiatives",
      "Chief of Staff functions under capacity pressure",
    ],
    coreQuestions: [
      "Which executive workflows should be delegated first?",
      "How do we protect strategic judgment while automating prep work?",
      "What does measurable decision velocity look like?",
    ],
    nextSteps: [
      { label: "Executive deployment lane", href: "/deployments#executive" },
      { label: "Company methodology", href: "/company" },
      { label: "Book system audit", href: "/contact" },
    ],
  },
]

export const useCaseEntries: UseCaseEntry[] = [
  {
    slug: "ai-sdr-workflow",
    title: "AI SDR Workflow System",
    searchIntent: "ai sdr workflow automation",
    summary:
      "Automate prospect qualification, follow-up cadence, and handoff discipline without losing personalization quality.",
    outcomes: ["Faster lead-response time", "Higher qualified meeting rate", "Cleaner CRM handoffs"],
    systems: ["Lead scoring + routing", "Personalized sequence drafting", "Calendar-ready handoff packets"],
    relatedIndustrySlugs: ["b2b-saas", "agencies"],
    relatedCompareSlugs: ["hotlist-ai-vs-hiring-sdr-team", "hotlist-ai-vs-generic-ai-agents"],
  },
  {
    slug: "client-onboarding-automation",
    title: "Client Onboarding Automation",
    searchIntent: "client onboarding automation system",
    summary:
      "Standardize onboarding handoffs, docs collection, kickoff prep, and timeline enforcement to reduce delivery delays.",
    outcomes: ["Reduced onboarding cycle time", "Lower implementation churn", "Higher kickoff readiness"],
    systems: ["Intake workflow orchestration", "Missing asset escalation", "Milestone tracking and reminders"],
    relatedIndustrySlugs: ["agencies", "professional-services"],
    relatedCompareSlugs: ["hotlist-ai-vs-zapier-only-automation"],
  },
  {
    slug: "inbox-triage-executive",
    title: "Executive Inbox and Delegation Triage",
    searchIntent: "executive inbox triage automation",
    summary:
      "Filter low-value threads, draft responses, and route decisions to owners while preserving executive oversight.",
    outcomes: ["Higher response consistency", "Faster delegation", "Lower context-switch overhead"],
    systems: ["Priority classification", "Draft + approval workflow", "Delegation and follow-up loops"],
    relatedIndustrySlugs: ["consulting", "real-estate"],
    relatedCompareSlugs: ["hotlist-ai-vs-virtual-assistant"],
  },
  {
    slug: "proposal-and-sow-ops",
    title: "Proposal and SOW Operations",
    searchIntent: "proposal workflow automation",
    summary:
      "Generate, review, route, and track proposals/SOWs with approval checkpoints and SLA-backed follow-up cadence.",
    outcomes: ["Shorter proposal turnaround", "Less revision drift", "Better close velocity"],
    systems: ["Template intelligence", "Approval routing", "Follow-up orchestration"],
    relatedIndustrySlugs: ["agencies", "professional-services"],
    relatedCompareSlugs: ["hotlist-ai-vs-manual-ops"],
  },
  {
    slug: "pipeline-hygiene-automation",
    title: "Pipeline Hygiene Automation",
    searchIntent: "crm pipeline hygiene automation",
    summary:
      "Keep CRM stages, next actions, and owner accountability accurate without constant manual policing.",
    outcomes: ["Improved forecast reliability", "Lower stale-opportunity rate", "Clearer owner accountability"],
    systems: ["Stage consistency checks", "Next-step enforcement", "Aging-opportunity triggers"],
    relatedIndustrySlugs: ["b2b-saas", "real-estate"],
    relatedCompareSlugs: ["hotlist-ai-vs-generic-ai-agents"],
  },
  {
    slug: "support-triage-and-routing",
    title: "Support Triage and Routing",
    searchIntent: "support ticket triage automation",
    summary:
      "Classify incoming requests, route by urgency and owner, and draft resolution context to shorten resolution times.",
    outcomes: ["Faster first response", "Lower misrouting", "Consistent escalation"],
    systems: ["Intent + urgency classification", "Queue routing", "Context packaging for human review"],
    relatedIndustrySlugs: ["saas-support", "professional-services"],
    relatedCompareSlugs: ["hotlist-ai-vs-zapier-only-automation"],
  },
  {
    slug: "renewals-and-expansion-ops",
    title: "Renewals and Expansion Operations",
    searchIntent: "customer renewals workflow automation",
    summary:
      "Automate renewal prep, risk flags, and expansion opportunity tracking across account lifecycle stages.",
    outcomes: ["Improved renewal readiness", "Fewer last-minute fire drills", "Higher expansion visibility"],
    systems: ["Renewal timeline engine", "Risk signal monitoring", "Expansion prompt workflows"],
    relatedIndustrySlugs: ["b2b-saas", "consulting"],
    relatedCompareSlugs: ["hotlist-ai-vs-manual-ops"],
  },
]

export const industryEntries: IndustryEntry[] = [
  {
    slug: "real-estate",
    title: "AI Operations for Real Estate Teams",
    searchIntent: "ai operations system for real estate teams",
    summary: "Reduce response lag, listing workflow drag, and transaction coordination overhead across the pipeline.",
    recurringPain: ["Lead-response inconsistency", "Showing and follow-up drop-offs", "Transaction milestone drift"],
    highLeverageDeployments: ["Growth Deployment", "Operations Deployment"],
    relatedUseCaseSlugs: ["ai-sdr-workflow", "pipeline-hygiene-automation"],
  },
  {
    slug: "b2b-saas",
    title: "AI Execution Systems for B2B SaaS",
    searchIntent: "ai execution system for b2b saas operations",
    summary: "Improve pipeline speed, customer lifecycle consistency, and decision throughput with governed execution.",
    recurringPain: ["Slow outbound iteration", "Revenue handoff friction", "Renewal risk surprises"],
    highLeverageDeployments: ["Growth Deployment", "Executive Execution Deployment"],
    relatedUseCaseSlugs: ["ai-sdr-workflow", "renewals-and-expansion-ops"],
  },
  {
    slug: "agencies",
    title: "AI Systems for Agencies and Service Firms",
    searchIntent: "agency operations automation ai",
    summary: "Standardize proposals, onboarding, and delivery coordination so project growth does not destroy margins.",
    recurringPain: ["Proposal bottlenecks", "Onboarding delays", "Delivery communication overhead"],
    highLeverageDeployments: ["Operations Deployment", "Executive Execution Deployment"],
    relatedUseCaseSlugs: ["proposal-and-sow-ops", "client-onboarding-automation"],
  },
  {
    slug: "consulting",
    title: "AI Workflow Infrastructure for Consulting",
    searchIntent: "consulting workflow automation ai",
    summary: "Keep client communication, deliverable workflows, and founder-level priorities synchronized at scale.",
    recurringPain: ["Founder bottlenecks", "Overloaded inbox + meetings", "Inconsistent follow-through"],
    highLeverageDeployments: ["Executive Execution Deployment", "Operations Deployment"],
    relatedUseCaseSlugs: ["inbox-triage-executive", "proposal-and-sow-ops"],
  },
  {
    slug: "professional-services",
    title: "AI Operations for Professional Services",
    searchIntent: "professional services process automation ai",
    summary: "Convert high-touch process work into repeatable, auditable workflows without losing service quality.",
    recurringPain: ["Case/task routing delays", "Manual coordination load", "SLA inconsistency"],
    highLeverageDeployments: ["Operations Deployment"],
    relatedUseCaseSlugs: ["client-onboarding-automation", "support-triage-and-routing"],
  },
  {
    slug: "saas-support",
    title: "AI Support Operations for SaaS",
    searchIntent: "saas support operations ai automation",
    summary: "Scale support quality with triage automation, escalation controls, and consistent response workflows.",
    recurringPain: ["Queue congestion", "Inconsistent triage", "Escalation latency"],
    highLeverageDeployments: ["Operations Deployment"],
    relatedUseCaseSlugs: ["support-triage-and-routing"],
  },
]

export const compareEntries: CompareEntry[] = [
  {
    slug: "hotlist-ai-vs-generic-ai-agents",
    title: "Hotlist AI vs Generic AI Agents",
    searchIntent: "ai agents vs ai operations infrastructure",
    summary: "A practical comparison between prompt-driven agents and role-owned execution systems with governance.",
    evaluatedOptions: ["Prompt-first agent tools", "Workflow automations", "Role-owned deployment systems"],
    whenHotlistFits: [
      "You need measured workflow outcomes, not chatbot answers",
      "You require explicit approval gates and audit trails",
      "You are replacing coordination-heavy headcount tasks",
    ],
    internalLinks: [
      { label: "Digital Workforce Infrastructure hub", href: "/learn/digital-workforce-infrastructure" },
      { label: "Governance framework", href: "/governance" },
    ],
  },
  {
    slug: "hotlist-ai-vs-hiring-sdr-team",
    title: "Hotlist AI vs Hiring an SDR Team",
    searchIntent: "hire sdr team vs ai outbound system",
    summary: "Compare cost, ramp time, coordination overhead, and quality control between SDR hiring and governed AI execution.",
    evaluatedOptions: ["In-house SDR hiring", "Outbound agency", "Role-owned AI SDR workflow"],
    whenHotlistFits: [
      "You need faster ramp than hiring cycles",
      "You need consistent follow-up quality controls",
      "You want lower management overhead per outbound motion",
    ],
    internalLinks: [
      { label: "AI SDR workflow use case", href: "/use-cases/ai-sdr-workflow" },
      { label: "Growth deployment lane", href: "/deployments#growth" },
    ],
  },
  {
    slug: "hotlist-ai-vs-zapier-only-automation",
    title: "Hotlist AI vs Zapier-Only Automation",
    searchIntent: "zapier automation vs ai operations system",
    summary: "Trigger-based automation is useful, but role-level execution requires decision logic, controls, and ownership.",
    evaluatedOptions: ["Task trigger automations", "Custom scripts", "Governed role-level systems"],
    whenHotlistFits: [
      "You need exception handling and escalation",
      "You require cross-tool operational context",
      "You want KPI ownership at workflow level",
    ],
    internalLinks: [
      { label: "AI operations systems hub", href: "/learn/ai-operations-systems" },
      { label: "Client onboarding use case", href: "/use-cases/client-onboarding-automation" },
    ],
  },
  {
    slug: "hotlist-ai-vs-virtual-assistant",
    title: "Hotlist AI vs Virtual Assistant",
    searchIntent: "virtual assistant vs ai executive system",
    summary: "Compare human VA support with governance-backed executive execution systems for repeatable decision workflows.",
    evaluatedOptions: ["Human VA support", "Inbox triage tools", "Executive execution systems"],
    whenHotlistFits: [
      "You need 24/7 workflow consistency",
      "You need deterministic routing and escalation",
      "You need measurable decision throughput gains",
    ],
    internalLinks: [
      { label: "Executive execution hub", href: "/learn/executive-execution-systems" },
      { label: "Inbox triage use case", href: "/use-cases/inbox-triage-executive" },
    ],
  },
  {
    slug: "hotlist-ai-vs-manual-ops",
    title: "Hotlist AI vs Manual Operations",
    searchIntent: "manual operations vs ai workflow systems",
    summary: "Manual ops scales headcount and coordination burden; governed AI systems scale execution capacity with lower overhead.",
    evaluatedOptions: ["Manual coordination", "Partial automation", "Role-owned AI systems"],
    whenHotlistFits: [
      "You are overrun by recurring coordination loops",
      "You need cycle-time visibility and control",
      "You want to standardize outcomes across teams",
    ],
    internalLinks: [
      { label: "How implementation works", href: "/how-it-works" },
      { label: "Operations deployment", href: "/deployments#operations" },
    ],
  },
]

export const glossaryEntries: GlossaryEntry[] = [
  {
    slug: "digital-workforce-infrastructure",
    term: "Digital Workforce Infrastructure",
    shortDefinition:
      "A deployment model where autonomous role systems own recurring operational outcomes with governance and observability.",
    deeperExplanation:
      "Unlike agent tools that require constant prompting, digital workforce infrastructure installs role-level systems mapped to core workflows and measured on business KPIs.",
    relatedTerms: ["digital-counterpart", "workflow-governance", "operations-deployment"],
    nextLinks: [
      { label: "Infrastructure hub", href: "/learn/digital-workforce-infrastructure" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    slug: "digital-counterpart",
    term: "Digital Counterpart",
    shortDefinition: "An autonomous role-holder that executes workflow outcomes within predefined operating boundaries.",
    deeperExplanation:
      "A Digital Counterpart is configured like a role, not a chat bot. It owns a lane of work, follows governance controls, and reports performance through operational metrics.",
    relatedTerms: ["digital-workforce-infrastructure", "approval-gate", "throughput"],
    nextLinks: [
      { label: "FAQ", href: "/faq" },
      { label: "Deployment lanes", href: "/deployments" },
    ],
  },
  {
    slug: "workflow-governance",
    term: "Workflow Governance",
    shortDefinition: "Policy and control layer that governs how autonomous systems can act in production workflows.",
    deeperExplanation:
      "Governance includes approval requirements, escalation triggers, role permissions, and complete audit logs for every high-impact action.",
    relatedTerms: ["approval-gate", "audit-trail", "observability"],
    nextLinks: [
      { label: "Governance framework", href: "/governance" },
      { label: "AI governance hub", href: "/learn/ai-governance-controls" },
    ],
  },
  {
    slug: "approval-gate",
    term: "Approval Gate",
    shortDefinition: "A required human decision checkpoint before a high-impact autonomous action is executed.",
    deeperExplanation:
      "Approval gates reduce risk by separating low-risk autonomous actions from actions that require human judgment, such as external outreach or legal commitments.",
    relatedTerms: ["workflow-governance", "exception-routing"],
    nextLinks: [
      { label: "Governance", href: "/governance" },
      { label: "Compare options", href: "/compare" },
    ],
  },
  {
    slug: "throughput",
    term: "Throughput",
    shortDefinition: "The volume of completed, quality-checked workflow outcomes over a defined period.",
    deeperExplanation:
      "Throughput is one of the core metrics used to evaluate whether autonomous role systems are producing real operational capacity.",
    relatedTerms: ["cycle-time", "quality-control"],
    nextLinks: [
      { label: "Operations hub", href: "/learn/ai-operations-systems" },
      { label: "Use cases", href: "/use-cases" },
    ],
  },
  {
    slug: "cycle-time",
    term: "Cycle Time",
    shortDefinition: "Elapsed time between workflow start and completion for a defined process.",
    deeperExplanation:
      "Cycle-time reduction is a primary indicator that deployment systems are removing coordination overhead and improving execution speed.",
    relatedTerms: ["throughput", "coordination-overhead"],
    nextLinks: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Operations deployment", href: "/deployments#operations" },
    ],
  },
  {
    slug: "coordination-overhead",
    term: "Coordination Overhead",
    shortDefinition: "Non-value-add time spent aligning people and status across a workflow.",
    deeperExplanation:
      "Typical examples include manual handoffs, redundant updates, and bottlenecked approvals. High coordination overhead suppresses margin as teams scale.",
    relatedTerms: ["cycle-time", "operations-deployment"],
    nextLinks: [
      { label: "Blog analysis", href: "/blog/coordination-overhead-invisible-tax" },
      { label: "Operations hub", href: "/learn/ai-operations-systems" },
    ],
  },
  {
    slug: "operations-deployment",
    term: "Operations Deployment",
    shortDefinition: "Deployment lane focused on replacing recurring process coordination and delivery friction.",
    deeperExplanation:
      "Operations deployment targets workflow bottlenecks in onboarding, handoff, routing, and status management while preserving quality controls.",
    relatedTerms: ["digital-counterpart", "workflow-governance"],
    nextLinks: [
      { label: "Deployment lanes", href: "/deployments#operations" },
      { label: "Use cases", href: "/use-cases" },
    ],
  },
  {
    slug: "growth-deployment",
    term: "Growth Deployment",
    shortDefinition: "Deployment lane focused on lead generation, qualification, and outbound execution systems.",
    deeperExplanation:
      "Growth deployment systems reduce response lag, enforce sequence discipline, and create cleaner handoffs from acquisition to sales.",
    relatedTerms: ["pipeline-hygiene", "lead-routing"],
    nextLinks: [
      { label: "Growth lane", href: "/deployments#growth" },
      { label: "AI SDR use case", href: "/use-cases/ai-sdr-workflow" },
    ],
  },
  {
    slug: "executive-execution-deployment",
    term: "Executive Execution Deployment",
    shortDefinition: "Deployment lane focused on decision velocity, delegation quality, and executive workflow execution.",
    deeperExplanation:
      "This lane supports leaders by automating triage and follow-through while preserving human control over strategic decisions.",
    relatedTerms: ["decision-velocity", "delegation-routing"],
    nextLinks: [
      { label: "Executive lane", href: "/deployments#executive" },
      { label: "Executive hub", href: "/learn/executive-execution-systems" },
    ],
  },
  {
    slug: "audit-trail",
    term: "Audit Trail",
    shortDefinition: "Chronological record of autonomous system actions, approvals, and outcomes.",
    deeperExplanation:
      "Audit trails make system decisions reviewable and reduce operational and compliance risk in high-impact workflows.",
    relatedTerms: ["observability", "workflow-governance"],
    nextLinks: [
      { label: "Governance page", href: "/governance" },
      { label: "Legal", href: "/legal" },
    ],
  },
  {
    slug: "observability",
    term: "Operational Observability",
    shortDefinition: "Visibility layer for monitoring workflow status, system actions, and KPI movement.",
    deeperExplanation:
      "Observability helps teams identify bottlenecks and exceptions quickly, and validate that deployments are producing measurable outcomes.",
    relatedTerms: ["audit-trail", "throughput"],
    nextLinks: [
      { label: "Governance controls", href: "/governance" },
      { label: "How it works", href: "/how-it-works" },
    ],
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
