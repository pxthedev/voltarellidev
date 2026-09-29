import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'
import { techCategories } from '../data/technologies'

export function TechStack() {
  return (
    <section id="stack" className="scroll-mt-20">
      <div className="rounded-2xl border border-line bg-panel p-6 sm:p-10 lg:p-12">
        <SectionHeader
          index="02"
          eyebrow="Stack"
          title="A stack que eu uso."
          description="Ferramentas e tecnologias usadas em backend, dados e tooling."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((category, i) => (
            <Reveal key={category.id} delay={i * 80}>
              <div className="group h-full rounded-xl border border-line bg-ink/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <p className="font-mono text-[11px] tracking-[0.25em] text-dim uppercase">
                  {category.title}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-ink/60 px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-200 group-hover:border-accent/30 group-hover:text-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
