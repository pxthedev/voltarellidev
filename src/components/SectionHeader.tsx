type SectionHeaderProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeader({ index, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
        <span className="text-dim">{index} — </span>
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  )
}
