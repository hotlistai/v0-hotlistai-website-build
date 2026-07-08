"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { CalBookingButton } from "./cal-booking-button"

const navLinks = [
  { name: "Lead Follow-Up Audit", href: "/follow-up-leak-audit" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About", href: "/company" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border/20 bg-background backdrop-blur-md supports-[backdrop-filter]:bg-background/95">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Hotlist"
              width={220}
              height={52}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 pointer-events-none lg:pointer-events-auto">
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

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:block">
              <CalBookingButton size="sm">Book Your Lead Follow-Up Audit</CalBookingButton>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="lg:hidden p-2.5 rounded-md hover:bg-muted/50 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {isOpen ? (
        <div className="lg:hidden fixed inset-0 z-[100]">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute inset-x-0 top-16 bottom-0 bg-background border-t border-border/20 overflow-y-auto overscroll-contain">
            <nav className="flex min-h-full flex-col justify-between px-6 py-8 pb-10">
              <div className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-4 text-2xl font-medium text-foreground border-b border-border/20 last:border-b-0 hover:opacity-70 transition-opacity"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-4 pt-10">
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
        </div>
      ) : null}
    </>
  )
}