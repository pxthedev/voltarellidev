import { Icon } from './Icons'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/pxthedev', icon: 'github' as const },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/pedrooo.dev',
    icon: 'instagram' as const,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pedro-voltarelli-818362382',
    icon: 'linkedin' as const,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-6">
        <a
          href="#home"
          className="font-mono text-base font-semibold tracking-tight text-fg transition-colors hover:text-accent-soft"
        >
          PX<span className="text-accent">.</span>
        </a>

        <p className="text-center font-mono text-xs text-dim">
          © 2026 Pedro Voltarelli. Construído com código.
        </p>

        <ul className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-all duration-200 hover:border-accent/50 hover:text-accent-soft"
              >
                <Icon name={social.icon} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
