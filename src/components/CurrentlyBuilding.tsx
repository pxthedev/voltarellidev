import { SectionHeader } from './SectionHeader'

type BuildingItem = {
  label: string
  status: string
  tone: 'online' | 'building' | 'learning'
}

const building: BuildingItem[] = [
  { label: 'Java Backend', status: 'ONLINE', tone: 'online' },
  { label: 'Spring Boot', status: 'ONLINE', tone: 'online' },
  { label: 'Segurança', status: 'APRENDENDO', tone: 'learning' },
  { label: 'Full Stack', status: 'CONSTRUINDO', tone: 'building' },
  { label: 'Automação', status: 'ATIVO', tone: 'online' },
]

const toneStyles: Record<BuildingItem['tone'], string> = {
  online: 'text-white',
  learning: 'text-zinc-500',
  building: 'text-zinc-300',
}

export function CurrentlyBuilding() {
  return (
    <section id="building" className="scroll-mt-20">
      <div className="rounded-2xl border border-line bg-panel p-6 sm:p-10 lg:p-12">
        <SectionHeader
          index="05"
          eyebrow="Construindo agora"
          title="Onde está o foco."
          description="Trabalhos em andamento e áreas de foco atuais."
        />

        <div className="mt-10 max-w-xl overflow-hidden rounded-2xl border border-line bg-ink/40 sm:mt-12">
            <div className="flex items-center justify-between border-b border-line-soft px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#5d5a69]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#9a97a6]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d4d4d8]" />
              </div>
              <p className="font-mono text-xs tracking-[0.2em] text-dim">
                STATUS DO SISTEMA
              </p>
            </div>
            <div className="p-6 font-mono text-sm sm:p-7">
              {building.map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-line-soft py-3 last:border-0"
                >
                  <span className="flex items-center gap-3 text-muted">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${toneStyles[item.tone]}`}
                    />
                    {item.label}
                  </span>
                  <span
                    className={`text-xs tracking-[0.15em] ${toneStyles[item.tone]} ${
                      i < 2 ? 'opacity-100' : ''
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}
