"use client"

import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  getStarted: [
    { name: "Lead Follow-Up Audit", href: "/follow-up-leak-audit" },
    { name: "How We Fix It", href: "/how-it-works" },
    { name: "Sample Audit Report", href: "/sample-leak-report" },
    { name: "About", href: "/company" },
    { name: "Book Audit", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Our Standards", href: "/governance" },
  ],
  guides: [
    { name: "Resources", href: "/resources" },
    { name: "Learn", href: "/learn" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Compare", href: "/compare" },
    { name: "Glossary", href: "/glossary" },
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
              <Image src="/logo.png" alt="Hotlist" width={220} height={52} className="h-9 w-auto sm:h-10" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Hotlist is the Agent Tech Concierge for real estate teams. We audit follow-up, fix what is broken, and
              keep it running.
            </p>
          </div>

          <FooterColumn title="Get Started" links={footerLinks.getStarted} />
          <FooterColumn title="Guides" links={footerLinks.guides} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Hotlist. All rights reserved.</p>
          <p>Agent Tech Concierge for real-estate teams.</p>
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
