"use client"

import { Calendar } from "lucide-react"
import { useEffect } from "react"

const CAL_NAMESPACE = "free-follow-up-leak-audit"
const CAL_LINK = `hotlistai/${CAL_NAMESPACE}`
const CAL_CONFIG = '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'

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
    if (typeof window === "undefined") {
      return
    }

    const win = window as any

    if (!win.Cal) {
      ;((C: any, A: string, L: string) => {
        const p = (a: any, ar: IArguments | unknown[]) => {
          a.q.push(ar)
        }
        const d = C.document
        C.Cal =
          C.Cal ||
          function () {
            const cal = C.Cal as any
            const ar = arguments
            if (!cal.loaded) {
              cal.ns = {}
              cal.q = cal.q || []
              d.head.appendChild(d.createElement("script")).src = A
              cal.loaded = true
            }
            if (ar[0] === L) {
              const api: any = function () {
                p(api, arguments)
              }
              const namespace = ar[1]
              api.q = api.q || []
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api
                p(cal.ns[namespace], ar)
                p(cal, ["initNamespace", namespace])
              } else {
                p(cal, ar)
              }
              return
            }
            p(cal, ar)
          }
      })(window, "https://app.cal.com/embed/embed.js", "init")
    }

    win.Cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" })
    win.Cal.config = win.Cal.config || {}
    win.Cal.config.forwardQueryParams = true
    win.Cal.ns[CAL_NAMESPACE]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view"
    })
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
      type="button"
      data-cal-link={CAL_LINK}
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-config={CAL_CONFIG}
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
