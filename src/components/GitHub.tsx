import { useEffect, useState } from 'react'
import { Icon, SectionHeader } from './ui'

type GithubUser = {
  login: string
  public_repos: number
  followers: number
  following: number
  avatar_url: string
  html_url: string
}

type Repo = {
  fork: boolean
  language: string | null
}

type LanguageStat = {
  name: string
  count: number
}

type GithubState = {
  loading: boolean
  user: GithubUser | null
  languages: LanguageStat[]
}

const initialState: GithubState = { loading: true, user: null, languages: [] }

export function GitHubSection() {
  const [state, setState] = useState<GithubState>(initialState)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/pxthedev', { signal }),
          fetch('https://api.github.com/users/pxthedev/repos?per_page=100', { signal }),
        ])
        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API unavailable')

        const user: GithubUser = await userRes.json()
        const repos: Repo[] = await reposRes.json()

        const counts = new Map<string, number>()
        repos.forEach((repo) => {
          if (repo.fork || !repo.language) return
          counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1)
        })

        const languages = Array.from(counts.entries())
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5)

        setState({ loading: false, user, languages })
      } catch (error) {
        if ((error as Error).name === 'AbortError') return
        setState({ loading: false, user: null, languages: [] })
      }
    }

    load()
    return () => controller.abort()
  }, [])

  return (
    <section id="github" className="scroll-mt-20">
      <div className="rounded-2xl border border-line bg-panel p-6 sm:p-10 lg:p-12">
        <SectionHeader
          index="04"
          eyebrow="GitHub"
          title="Open source, experimentos e código."
          description="Repositórios públicos, estudos e experimentos — direto da API do GitHub."
        />

        <div className="mt-10 sm:mt-12">
          <div className="overflow-hidden rounded-2xl border border-line bg-ink/40">
            <div className="flex flex-col gap-10 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
              <div className="flex items-center gap-5">
                {state.user ? (
                  <img
                    src={state.user.avatar_url}
                    alt={`${state.user.login} avatar`}
                    width="72"
                    height="72"
                    loading="lazy"
                    className="h-[72px] w-[72px] rounded-full border border-line object-cover"
                  />
                ) : (
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-line bg-elev font-mono text-lg font-semibold text-accent-soft">
                    PX
                  </div>
                )}
                <div>
                  <p className="font-mono text-sm text-accent-soft">@pxthedev</p>
                  <p className="mt-1 text-base font-semibold tracking-tight text-fg sm:text-lg">
                    Desenvolvedor Backend
                  </p>
                  {state.user ? (
                    <p className="mt-1 font-mono text-xs text-dim">
                      {state.user.public_repos} repositórios públicos ·{' '}
                      {state.user.followers} seguidores
                    </p>
                  ) : (
                    <p className="mt-1 font-mono text-xs text-dim">Perfil do GitHub</p>
                  )}
                </div>
              </div>

              <div className="w-full max-w-sm">
                {state.loading ? (
                  <div className="space-y-3" aria-hidden>
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="h-2.5 animate-pulse rounded-full bg-elev" />
                    ))}
                  </div>
                ) : state.languages.length > 0 ? (
                  <div className="space-y-3">
                    <p className="font-mono text-[11px] tracking-[0.2em] text-dim uppercase">
                      Principais linguagens por repositórios
                    </p>
                    {state.languages.map((lang) => (
                      <div key={lang.name}>
                        <div className="flex items-center justify-between font-mono text-xs">
                          <span className="text-muted">{lang.name}</span>
                          <span className="text-dim">{lang.count}</span>
                        </div>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-elev">
                          <div
                            className="h-full rounded-full bg-accent/70 transition-all duration-700"
                            style={{
                              width: `${(lang.count / state.languages[0].count) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="border-t border-line-soft px-7 py-5 sm:px-9">
              <a
                href="https://github.com/pxthedev"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-sm text-accent-soft transition-colors hover:text-accent"
                >
                  Explorar GitHub
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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
