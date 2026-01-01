"use client"

import type React from "react"

import { useState } from "react"
import { X, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    try {
      const response = await fetch("/api/chat-webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setStatus("success")
        setName("")
        setEmail("")
        setMessage("")
        setTimeout(() => {
          setIsOpen(false)
          setStatus("idle")
        }, 2000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("[v0] Chat widget error:", error)
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] animate-fade-in-up rounded-xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-foreground px-6 py-4 rounded-t-xl">
            <div>
              <h3 className="text-lg font-semibold text-background">Message Us</h3>
              <p className="text-sm text-background/70">We'll get back to you right away</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-background/70 hover:text-background transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-foreground">
                  <Send className="h-6 w-6 text-background" />
                </div>
                <h4 className="mb-2 text-lg font-semibold">Message sent!</h4>
                <p className="text-sm text-muted-foreground">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="chat-name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="chat-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="chat-email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="chat-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="chat-message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="chat-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                {status === "error" && <p className="text-sm text-destructive">Failed to send. Please try again.</p>}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
