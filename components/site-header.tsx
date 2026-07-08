"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { CalBookingButton } from "./cal-booking-button"

const navLinks = [
  { name: "Lead Follow-Up Audit", href: "/follow-up-leak-audit" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About", href: "/company" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/20 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Hotlist"
            width={170}
            height={40}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <CalBookingButton size="sm">Book Your Lead Follow-Up Audit</CalBookingButton>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-14 bg-background z-40 animate-fade-in">
          <nav className="flex flex-col justify-between h-full px-6 py-6">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
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
                Book Your Lead Follow-Up Audit
              </CalBookingButton>
              <Link
                href="/sample-leak-report"
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm text-center text-muted-foreground hover:text-foreground transition-colors"
              >
                See a Sample Audit Report
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}