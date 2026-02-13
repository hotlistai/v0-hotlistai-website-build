"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { CalBookingButton } from "./cal-booking-button"

const deploymentLinks = [
  { name: "Growth Deployment", href: "/deployments#growth", description: "Acquisition throughput" },
  { name: "Operations Deployment", href: "/deployments#operations", description: "Delivery throughput" },
  { name: "Executive Execution", href: "/deployments#executive", description: "Decision throughput" },
]

const companyLinks = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "Governance", href: "/governance" },
  { name: "About", href: "/company" },
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
          <Dropdown
            label="Deployments"
            items={deploymentLinks}
            open={openDropdown === "deployments"}
            onToggle={() => setOpenDropdown(openDropdown === "deployments" ? null : "deployments")}
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
          <div className="hidden md:block">
            <CalBookingButton size="sm">
              Request Audit
            </CalBookingButton>
          </div>

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
        <div className="md:hidden fixed inset-0 top-14 bg-background z-40 animate-fade-in">
          <nav className="flex flex-col justify-between h-full px-6 py-6">
            <div className="flex flex-col gap-0.5">
              {[
                { name: "Deployments", href: "/deployments" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "Governance", href: "/governance" },
                { name: "About", href: "/company" },
                { name: "FAQ", href: "/faq" },
                { name: "Blog", href: "/blog" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-2xl font-medium text-foreground hover:opacity-60 transition-opacity"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="space-y-3">
              <CalBookingButton size="md" className="w-full">
                Request a System Audit
              </CalBookingButton>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm text-center text-muted-foreground hover:text-foreground transition-colors"
              >
                Or send us a message
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
