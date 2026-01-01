"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { name: "The Lab", href: "/lab" },
  { name: "Hotlist Funnels", href: "/hotlist-funnels" },
  { name: "Ethos", href: "/ethos" },
  { name: "The Foundry", href: "/developers" },
  { name: "Company", href: "/press" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 animate-fade-in">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform active:scale-95">
          <Image
            src="/logo-light.png"
            alt="HotlistAI"
            width={140}
            height={32}
            className="h-7 w-auto dark:hidden"
            priority
          />
          <Image
            src="/logo-dark.png"
            alt="HotlistAI"
            width={140}
            height={32}
            className="h-7 w-auto hidden dark:block"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
            >
              <span className="relative z-10 flex items-center gap-1">{item.name}</span>
              <span className="absolute inset-0 rounded-lg bg-muted opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all inline-block hover:scale-105 active:scale-95"
            >
              Request Access
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors active:scale-90"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden overflow-hidden border-t border-border/40 transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-muted transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
