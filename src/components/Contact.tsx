import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'
import { Icon } from './Icons'

const socials = [
  {
    name: 'GitHub',
    handle: '@pxthedev',
    href: 'https://github.com/pxthedev',
    icon: 'github' as const,
  },
  {
    name: 'Instagram',
    handle: '@voltarellidev',
    href: 'https://www.instagram.com/voltarellidev',
    icon: 'instagram' as const,
  },
  {
    name: 'LinkedIn',
    handle: 'Pedro Voltarelli',
    href: 'https://www.linkedin.com/in/pedro-voltarelli-818362382',
    icon: 'linkedin' as const,
  },
]

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20">
      <div className="rounded-2xl border border-line bg-panel p-6 sm:p-10 lg:p-12">
        <SectionHeader
          index="06"
          eyebrow="Contato"
          title="Vamos construir algo."
          description="Tem uma ideia, projeto ou sistema que precisa ser construído? Vamos conversar."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
          {socials.map((social, i) => (
            <Reveal key={social.name} delay={i * 90}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between gap-8 rounded-xl border border-line bg-ink/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-ink/60 text-muted transition-colors duration-200 group-hover:border-accent/40 group-hover:text-accent-soft">
                    <Icon name={social.icon} className="h-5 w-5" />
                  </span>
                  <Icon
                    name="arrow-up-right"
                    className="h-4 w-4 text-dim transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-tight text-fg">
                    {social.name}
                  </p>
                  <p className="mt-1 font-mono text-sm text-dim">{social.handle}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
