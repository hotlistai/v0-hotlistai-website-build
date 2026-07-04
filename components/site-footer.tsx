"use client"

import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  company: [
    { name: "Follow-Up Leak Audit", href: "/follow-up-leak-audit" },
    { name: "Sample Leak Report", href: "/sample-leak-report" },
    { name: "Follow Up Boss Automation Audit", href: "/follow-up-boss-automation-audit" },
    { name: "Follow Up Boss Cleanup", href: "/follow-up-boss-cleanup" },
    { name: "About", href: "/company" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Resources", href: "/resources" },
    { name: "Learn", href: "/learn" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Industries", href: "/industries" },
    { name: "Compare", href: "/compare" },
    { name: "Glossary", href: "/glossary" },
    { name: "FAQ", href: "/faq" },
    { name: "Governance", href: "/governance" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Legal", href: "/legal" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo-light.png" alt="HotlistAI" width={120} height={28} className="h-6 w-auto dark:hidden" />
              <Image
                src="/logo-dark.png"
                alt="HotlistAI"
                width={120}
                height={28}
                className="h-6 w-auto hidden dark:block"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Stop warm leads from dying inside your CRM. HotlistAI helps real-estate teams find and fix follow-up
              leaks before they buy more leads.
            </p>
          </div>

          <FooterColumn title="Audit" links={footerLinks.company} />
          <FooterColumn title="SEO Library" links={footerLinks.resources} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 HotlistAI. All rights reserved.</p>
          <p>Follow-up execution for real-estate teams.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { name: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="font-medium text-sm mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-all hover:translate-x-1 inline-block"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
