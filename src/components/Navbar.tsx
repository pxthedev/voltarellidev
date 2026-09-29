import { useEffect, useState } from 'react'
import { Icon } from './Icons'

const links = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Sobre', href: '#sobre', id: 'sobre' },
  { label: 'Stack', href: '#stack', id: 'stack' },
  { label: 'Projetos', href: '#projetos', id: 'projetos' },
  { label: 'Contato', href: '#contato', id: 'contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed left-1/2 top-[max(0.75rem,env(safe-area-inset-top))] z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-2xl border transition-all duration-300 ${
        scrolled || open
          ? 'border-line bg-ink/85 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="flex h-14 items-center justify-between px-5">
        <a
          href="#home"
          className="truncate font-mono text-base font-semibold tracking-tight text-fg transition-colors hover:text-accent-soft sm:text-lg"
          aria-label="Pedro Voltarelli — voltar ao topo"
        >
          Pedro Voltarelli
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`relative text-sm transition-colors duration-200 ${
                    active === link.id
                      ? 'text-fg'
                      : 'text-muted hover:text-fg'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                      active === link.id ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-fg transition-colors hover:text-accent-soft md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="border-t border-line-soft px-5 pb-6 pt-2">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.id} className="border-b border-line-soft last:border-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 text-base transition-colors ${
                    active === link.id ? 'text-accent-soft' : 'text-muted hover:text-fg'
                  }`}
                >
                  {link.label}
                  <Icon name="arrow-up-right" className="h-4 w-4 opacity-40" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
