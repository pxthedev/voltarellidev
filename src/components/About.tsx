import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

function CodeWindow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 border-b border-line-soft px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#5d5a69]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#9a97a6]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d4d4d8]" />
        <span className="ml-3 font-mono text-xs text-dim">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

const kw = 'text-[#ffffff]'
const type = 'text-[#e4e4e7]'
const str = 'text-[#a1a1aa]'
const punct = 'text-dim'

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20">
      <div className="rounded-2xl border border-line bg-panel p-6 sm:p-10 lg:p-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionHeader
                index="01"
                eyebrow="Sobre"
                title="Construindo com propósito."
                description="Sou Pedro Voltarelli — conhecido online como Px — um desenvolvedor backend trabalhando com Java, Spring Boot e arquitetura de software moderna."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted">
                <p>
                  Meu trabalho foca em APIs REST, segurança, bancos de dados e
                  automação — construindo bots, integrações e sistemas feitos
                  para aguentar uso real.
                </p>
                <p>
                  Além de escrever código, me preocupo com a arquitetura por
                  trás dele: camadas limpas, autenticação segura e software que
                  escala quando precisa.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-8 font-mono text-sm text-dim">
                <span className="text-accent-soft">@</span>pxthedev — São Paulo,
                Brasil
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <CodeWindow title="Pedro.java">
              <pre className="overflow-x-auto font-mono text-xs leading-[1.7] sm:text-sm">
                <div>
                  <span className={kw}>public class</span>{' '}
                  <span className={type}>Pedro</span>{' '}
                  <span className={punct}>{"{"}</span>
                </div>
                <div className="text-dim">&nbsp;</div>
                <div>
                  <span className={`pl-4 ${type}`}>String</span>{' '}
                  <span className="text-fg">role</span>{' '}
                  <span className={punct}>=</span>{' '}
                  <span className={str}>"Desenvolvedor Backend"</span>
                  <span className={punct}>;</span>
                </div>
                <div className="text-dim">&nbsp;</div>
                <div>
                  <span className={`pl-4 ${type}`}>String</span>
                  <span className={punct}>[]</span>{' '}
                  <span className="text-fg">focus</span>{' '}
                  <span className={punct}>=</span>{' '}
                  <span className={punct}>{"{"}</span>
                </div>
                <div>
                  <span className={`pl-8 ${str}`}>"Java"</span>
                  <span className={punct}>,</span>
                </div>
                <div>
                  <span className={`pl-8 ${str}`}>"Spring Boot"</span>
                  <span className={punct}>,</span>
                </div>
                <div>
                  <span className={`pl-8 ${str}`}>"Segurança"</span>
                  <span className={punct}>,</span>
                </div>
                <div>
                  <span className={`pl-8 ${str}`}>"APIs"</span>
                  <span className={punct}>,</span>
                </div>
                <div>
                  <span className={`pl-8 ${str}`}>"Bancos de dados"</span>
                </div>
                <div>
                  <span className="pl-4 text-dim">{"};"}</span>
                </div>
                <div>
                  <span className={punct}>{"}"}</span>
                </div>
              </pre>
            </CodeWindow>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
