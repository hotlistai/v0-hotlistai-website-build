import Link from "next/link"

export function RelatedLinks({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <section className="rounded-xl border border-border/30 bg-muted/20 p-6">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
