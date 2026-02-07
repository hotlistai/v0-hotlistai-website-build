"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const productLinks = [
  { name: "The Lab", href: "/lab", description: "AI software products" },
  { name: "Hotlist Funnels", href: "/hotlist-funnels", description: "High-velocity conversion systems" },
]

const companyLinks = [
  { name: "Who We Are", href: "/company" },
  { name: "The Foundry", href: "/company#foundry" },
  { name: "Press & Media", href: "/company#press" },
  { name: "FAQ", href: "/faq" },
]

function Dropdown({
  label,
  items,
  open,
  onToggle,
  onClose,
}: {
  label: string
  items: { name: string; href: string; description?: string }[]
  open: boolean
  onToggle: () => void
  onClose: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open, onClose])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl border border-border/40 bg-background shadow-lg py-2 animate-fade-in">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-2.5 hover:bg-muted/50 transition-colors"
            >
              <span className="text-sm font-medium">{item.name}</span>
              {item.description && (
                <span className="block text-xs text-muted-foreground mt-0.5">{item.description}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/20 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo-light.png"
            alt="Hotlist AI"
            width={120}
            height={28}
            className="h-6 w-auto dark:hidden"
            priority
          />
          <Image
            src="/logo-dark.png"
            alt="Hotlist AI"
            width={120}
            height={28}
            className="h-6 w-auto hidden dark:block"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link
            href="/ethos"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Ethos
          </Link>
          <Dropdown
            label="Products"
            items={productLinks}
            open={openDropdown === "products"}
            onToggle={() => setOpenDropdown(openDropdown === "products" ? null : "products")}
            onClose={() => setOpenDropdown(null)}
          />
          <Dropdown
            label="Company"
            items={companyLinks}
            open={openDropdown === "company"}
            onToggle={() => setOpenDropdown(openDropdown === "company" ? null : "company")}
            onClose={() => setOpenDropdown(null)}
          />
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex px-5 py-2 text-sm font-semibold rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/20 bg-background/98 backdrop-blur-md animate-fade-in">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            <Link
              href="/ethos"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium rounded-md hover:bg-muted/50 transition-colors"
            >
              Ethos
            </Link>

            <div className="px-4 pt-4 pb-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Products</span>
            </div>
            {productLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 pl-6 text-sm font-medium rounded-md hover:bg-muted/50 transition-colors"
              >
                {item.name}
                {item.description && (
                  <span className="block text-xs text-muted-foreground mt-0.5">{item.description}</span>
                )}
              </Link>
            ))}

            <div className="px-4 pt-4 pb-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Company</span>
            </div>
            {companyLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 pl-6 text-sm font-medium rounded-md hover:bg-muted/50 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium rounded-md hover:bg-muted/50 transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-4 py-2.5 text-sm font-semibold text-center rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
