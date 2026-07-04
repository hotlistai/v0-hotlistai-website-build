import type { SVGProps } from "react"

type HotlistIconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

function iconProps(size: number, props: SVGProps<SVGSVGElement>) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  }
}

export function LeadLeakVisibilityIcon({ size = 32, ...props }: HotlistIconProps) {
  return (
    <svg {...iconProps(size, props)}>
      <path d="M5 8.5h8.5a4 4 0 0 1 4 4v2.75" />
      <path d="M27 23.5h-7.5a4 4 0 0 1-4-4v-2" />
      <path d="M5 23.5h5.5a4 4 0 0 0 4-4v-1.5" strokeDasharray="2 3" />
      <circle cx="5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="27" cy="23.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="M13.25 15.5h5.5" />
      <path d="m18.75 15.5 2.5-2.5" />
      <path d="m18.75 15.5 2.5 2.5" />
      <path d="M12.25 13.25 10.5 11.5M12.25 17.75 10.5 19.5" />
      <path d="M22 8.5h4.5v4.5" opacity=".45" />
      <path d="M7 27h4.5" opacity=".45" />
    </svg>
  )
}

export function RoutingAccountabilityIcon({ size = 32, ...props }: HotlistIconProps) {
  return (
    <svg {...iconProps(size, props)}>
      <rect x="4.5" y="12" width="7" height="8" rx="2" />
      <rect x="20.5" y="4.5" width="7" height="7" rx="2" />
      <rect x="20.5" y="20.5" width="7" height="7" rx="2" />
      <circle cx="16" cy="16" r="2.25" fill="currentColor" stroke="none" />
      <path d="M11.5 16H13.75" />
      <path d="M18.25 15 20.5 9" />
      <path d="M18.25 17 20.5 23" />
      <path d="m23 8 1.25 1.25L26 7" />
      <path d="m23 24 1.25 1.25L26 23" />
      <path d="M5.75 8.5h4.5M5.75 23.5h4.5" opacity=".45" />
    </svg>
  )
}

export function StaleLeadRecoveryIcon({ size = 32, ...props }: HotlistIconProps) {
  return (
    <svg {...iconProps(size, props)}>
      <path d="M7 9.5c0-2.2 4-4 9-4s9 1.8 9 4-4 4-9 4-9-1.8-9-4Z" />
      <path d="M7 9.5v6c0 2.2 4 4 9 4 1.25 0 2.45-.11 3.54-.32" />
      <path d="M7 15.5v6c0 2.2 4 4 9 4 .9 0 1.77-.06 2.58-.19" />
      <path d="M20.25 20.5h5.5" />
      <path d="M23 17.75v5.5" />
      <circle cx="23" cy="20.5" r="5" />
      <path d="M11 9.25h.01M15.75 9.25h.01M20.5 9.25h.01" />
    </svg>
  )
}

export function HumanHandoffIcon({ size = 32, ...props }: HotlistIconProps) {
  return (
    <svg {...iconProps(size, props)}>
      <rect x="4.5" y="7" width="9" height="10" rx="2.5" />
      <rect x="18.5" y="15" width="9" height="10" rx="2.5" />
      <path d="M8 11h2.25M8 14h3.25" opacity=".55" />
      <path d="M21.75 19.25a1.5 1.5 0 1 0 2.5 0" />
      <path d="M20.75 23c.55-1.25 1.3-1.85 2.25-1.85s1.7.6 2.25 1.85" />
      <path d="M13.5 12h3a3 3 0 0 1 3 3" />
      <path d="m18 12.5 1.5 2.5-2.75.75" />
      <path d="M6.5 22.5h6.5M5.5 25.5h9.5" opacity=".45" />
    </svg>
  )
}

export function LeakScorecardIcon({ size = 32, ...props }: HotlistIconProps) {
  return (
    <svg {...iconProps(size, props)}>
      <rect x="6" y="4.5" width="20" height="23" rx="3" />
      <path d="M10 10h5.5M10 15h3.5M10 20h6.5" opacity=".55" />
      <path d="M19 10h3M19 15h3M19 20h3" />
      <path d="M10 24h12" opacity=".45" />
      <circle cx="22.5" cy="10" r=".9" fill="currentColor" stroke="none" />
      <circle cx="22.5" cy="15" r=".9" fill="currentColor" stroke="none" />
      <circle cx="22.5" cy="20" r=".9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ExecutionReportIcon({ size = 32, ...props }: HotlistIconProps) {
  return (
    <svg {...iconProps(size, props)}>
      <path d="M8 7.5h13.5a3 3 0 0 1 3 3V25" />
      <path d="M5.5 11h13.5a3 3 0 0 1 3 3v10.5a3 3 0 0 1-3 3H8.5a3 3 0 0 1-3-3V11Z" />
      <path d="M10 17h7M10 21h4" opacity=".55" />
      <path d="M16.5 24.5h1.5a3 3 0 0 0 3-3V20" />
      <path d="m18 22.25 3 2.25 3.5-5" />
    </svg>
  )
}

export function InstallPrioritiesIcon({ size = 32, ...props }: HotlistIconProps) {
  return (
    <svg {...iconProps(size, props)}>
      <path d="M6 8h8.5a3.5 3.5 0 0 1 3.5 3.5V21a3 3 0 0 0 3 3h5" />
      <path d="M6 24h6.5a3.5 3.5 0 0 0 3.5-3.5V16" strokeDasharray="2 3" />
      <path d="M22.5 20.5 26 24l-3.5 3.5" />
      <circle cx="6" cy="8" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="6" cy="24" r="1.5" fill="currentColor" stroke="none" />
      <rect x="12.5" y="11.5" width="7" height="7" rx="2" />
      <path d="M15 15h2" />
    </svg>
  )
}
