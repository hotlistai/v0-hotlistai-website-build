"use client"

import { Calendar } from "lucide-react"
import { useEffect } from "react"

interface CalBookingButtonProps {
  variant?: "primary" | "secondary" | "inline"
  size?: "sm" | "md" | "lg"
  className?: string
  children?: React.ReactNode
}

export function CalBookingButton({
  variant = "primary",
  size = "md",
  className = "",
  children
}: CalBookingButtonProps) {
  useEffect(() => {
    // Load Cal.com embed script
    if (typeof window !== "undefined" && !document.querySelector('script[src*="cal.com"]')) {
      const script = document.createElement("script")
      script.src = "https://app.cal.com/embed/embed.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all hover:scale-105 active:scale-95"

  const variantStyles = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    secondary: "border border-border/50 hover:border-foreground/40 bg-background",
    inline: "underline hover:no-underline"
  }

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  }

  const styles = variant === "inline"
    ? `${variantStyles[variant]} ${className}`
    : `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button
      data-cal-link="hotlistai/capacity"
      data-cal-config='{"layout":"month_view"}'
      className={styles}
    >
      {children || (
        <>
          <Calendar className="w-4 h-4" />
          Book a Call
        </>
      )}
    </button>
  )
}
