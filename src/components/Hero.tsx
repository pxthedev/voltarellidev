import { Icon } from './Icons'
import { Reveal } from './Reveal'

const chips = ['Java', 'Spring Boot', 'Security', 'APIs', 'SQL']

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pt-24 sm:px-6 sm:pt-28">
      <div className="relative flex min-h-[calc(100svh-6rem)] flex-col overflow-hidden rounded-2xl border border-line bg-panel sm:min-h-[calc(100svh-7.5rem)]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 inset-x-0 mx-auto h-[480px] max-w-3xl rounded-full bg-white/10 blur-[130px]"
        />

        <div className="relative m-auto w-full px-6 py-16 sm:px-10 lg:px-14">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/60 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-dot" />
              Disponível para projetos
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 max-w-4xl text-3xl font-semibold leading-[1.12] tracking-tight text-fg text-balance sm:text-6xl lg:text-7xl">
              Construindo sistemas digitais que realmente{' '}
              <span className="text-accent-soft">escalam.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Desenvolvedor Backend focado em Java, Spring Boot, APIs, segurança e
              arquitetura de software moderna.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-md border border-line bg-ink/60 px-3 py-1.5 font-mono text-xs text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent-soft"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projetos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-medium text-ink transition-all duration-200 hover:bg-white hover:shadow-[0_0_28px_rgba(255,255,255,0.3)] sm:w-auto"
              >
                Ver projetos
                <Icon name="arrow-right" className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/pxthedev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-ink/60 px-6 py-3.5 text-sm font-medium text-fg transition-all duration-200 hover:border-accent/50 hover:bg-elev hover:text-accent-soft sm:w-auto"
              >
                <Icon name="github" className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </Reveal>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
          <span className="font-mono text-[11px] tracking-[0.3em] text-dim uppercase">
            Role para explorar
          </span>
          <Icon
            name="chevron-down"
            className="h-4 w-4 text-accent animate-scroll-hint"
          />
        </div>
      </div>
    </section>
  )
}
