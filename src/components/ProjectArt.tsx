import type { ProjectArt as ProjectArtType } from '../data/projects'

type ProjectArtProps = {
  variant: ProjectArtType
}

export function ProjectArt({ variant }: ProjectArtProps) {
  return (
    <div className="relative h-full w-full overflow-hidden border-b border-line bg-[#0d0d12] lg:border-b-0 lg:border-r">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative flex h-full min-h-52 items-center justify-center p-6">
        <svg
          viewBox="0 0 320 180"
          preserveAspectRatio="xMidYMid meet"
          className="w-full max-w-sm"
          aria-hidden
        >
          {renderScene(variant)}
        </svg>
      </div>
    </div>
  )
}

function renderScene(variant: ProjectArtType) {
  const line = '#22222a'
  const muted = '#5d5a69'
  const text = '#9a97a6'
  const fg = '#ededf0'
  const accent = '#f4f4f5'

  switch (variant) {
    case 'payments':
      return (
        <g>
          <rect x="20" y="20" width="180" height="140" rx="10" fill="#101014" stroke={line} />
          <rect x="42" y="42" width="100" height="8" rx="4" fill={muted} />
          <rect x="42" y="62" width="70" height="8" rx="4" fill={line} />
          <rect x="42" y="88" width="110" height="28" rx="6" fill="none" stroke={accent} strokeOpacity="0.5" />
          <text x="52" y="106" fill={fg} fontFamily="monospace" fontSize="12" fontWeight="600">R$ 33,50</text>
          <g transform="translate(212,60)">
            <rect x="0" y="0" width="88" height="44" rx="10" fill="#101014" stroke={line} />
            <path d="M18 22h40" stroke={accent} strokeWidth="2" />
            <path d="m48 16 10 6-10 6" stroke={accent} strokeWidth="2" fill="none" />
            <text x="20" y="86" fill={text} fontFamily="monospace" fontSize="9">status: PAID</text>
          </g>
          <circle cx="300" cy="24" r="4" fill="#a1a1aa" />
          <text x="276" y="28" fill={muted} fontFamily="monospace" fontSize="9">webhook</text>
        </g>
      )

    case 'discord':
      return (
        <g>
          <rect x="24" y="28" width="96" height="28" rx="8" fill="#101014" stroke={line} />
          <circle cx="42" cy="42" r="8" fill={muted} />
          <text x="58" y="46" fill={fg} fontFamily="monospace" fontSize="10">Minecon</text>
          <rect x="72" y="32" width="34" height="16" rx="4" fill={accent} fillOpacity="0.25" stroke={accent} strokeOpacity="0.5" />
          <text x="78" y="44" fill={accent} fontFamily="monospace" fontSize="9">BOT</text>
          <rect x="24" y="76" width="200" height="34" rx="8" fill="#101014" stroke={line} />
          <rect x="36" y="88" width="80" height="7" rx="3.5" fill={text} />
          <rect x="36" y="98" width="52" height="5" rx="2.5" fill={line} />
          <rect x="24" y="124" width="150" height="34" rx="8" fill="#101014" stroke={accent} strokeOpacity="0.4" />
          <rect x="36" y="136" width="90" height="7" rx="3.5" fill={fg} />
          <rect x="36" y="146" width="60" height="5" rx="2.5" fill={line} />
          <path d="M244 60v40" stroke={muted} strokeDasharray="3 4" />
          <circle cx="244" cy="52" r="6" fill={accent} />
        </g>
      )

    case 'ranking':
      return (
        <g>
          <rect x="40" y="120" width="44" height="34" rx="4" fill="#101014" stroke={line} />
          <rect x="104" y="88" width="44" height="66" rx="4" fill="#101014" stroke={accent} strokeOpacity="0.6" />
          <rect x="168" y="104" width="44" height="50" rx="4" fill="#101014" stroke={line} />
          <path d="M126 80l6-10 6 10" fill="none" stroke={accent} strokeWidth="2" />
          <path d="M118 78h16" stroke={accent} strokeWidth="2" />
          <text x="52" y="148" fill={text} fontFamily="monospace" fontSize="9">#2</text>
          <text x="116" y="148" fill={accent} fontFamily="monospace" fontSize="9">#1</text>
          <text x="180" y="148" fill={text} fontFamily="monospace" fontSize="9">#3</text>
          <path d="M228 60a14 14 0 0 1 0 28" stroke={muted} strokeDasharray="3 4" />
          <circle cx="248" cy="74" r="12" fill="none" stroke={muted} strokeWidth="1.5" />
          <rect x="240" y="92" width="16" height="4" rx="2" fill={line} />
          <rect x="244" y="100" width="8" height="4" rx="2" fill={line} />
        </g>
      )

    case 'api':
      return (
        <g>
          <rect x="20" y="30" width="120" height="34" rx="8" fill="#101014" stroke={line} />
          <rect x="32" y="41" width="34" height="12" rx="4" fill={accent} fillOpacity="0.25" stroke={accent} strokeOpacity="0.6" />
          <text x="37" y="50" fill={accent} fontFamily="monospace" fontSize="9" fontWeight="600">GET</text>
          <text x="74" y="51" fill={fg} fontFamily="monospace" fontSize="10">/api/v1</text>
          <rect x="160" y="30" width="140" height="34" rx="8" fill="#101014" stroke={line} />
          <text x="176" y="51" fill={text} fontFamily="monospace" fontSize="10">Spring Security</text>
          <path d="M140 47h20" stroke={accent} strokeWidth="2" />
          <rect x="88" y="96" width="110" height="34" rx="8" fill="#101014" stroke={line} />
          <text x="104" y="117" fill={text} fontFamily="monospace" fontSize="10">JPA · Hibernate</text>
          <path d="M112 64v32" stroke={muted} strokeWidth="1.5" />
          <path d="M108 88l4 8 4-8" fill="none" stroke={muted} strokeWidth="1.5" />
          <rect x="208" y="96" width="72" height="34" rx="8" fill="#101014" stroke={accent} strokeOpacity="0.5" />
          <text x="224" y="117" fill={accent} fontFamily="monospace" fontSize="10">MySQL</text>
          <path d="M198 113h10" stroke={muted} strokeWidth="1.5" />
          <path d="M268 113h8" stroke={muted} strokeWidth="1.5" />
          <rect x="20" y="30" width="280" height="100" rx="12" fill="none" stroke={line} strokeDasharray="2 6" opacity="0.5" />
        </g>
      )

    case 'security':
      return (
        <g>
          <path
            d="M160 26c-30 0-54 12-60 36 18 0 36 4 60 22 24-18 42-22 60-22-6-24-30-36-60-36Z"
            fill="#101014"
            stroke={accent}
            strokeWidth="2"
          />
          <path d="m144 72 11 12 22-24" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <g transform="translate(232,96)">
            <rect x="0" y="0" width="26" height="22" rx="4" fill="#101014" stroke={muted} />
            <path d="M4 0v-6a9 9 0 0 1 18 0V0" fill="none" stroke={muted} strokeWidth="2" />
            <circle cx="13" cy="11" r="3" fill={accent} />
          </g>
          <text x="40" y="132" fill={text} fontFamily="monospace" fontSize="10">auth / authorization</text>
          <text x="40" y="148" fill={muted} fontFamily="monospace" fontSize="9">secure development</text>
        </g>
      )

    case 'utility':
      return (
        <g>
          <rect x="20" y="36" width="200" height="100" rx="10" fill="#101014" stroke={line} />
          <circle cx="46" cy="44" r="4" fill="#5d5a69" />
          <circle cx="62" cy="44" r="4" fill="#9a97a6" />
          <circle cx="78" cy="44" r="4" fill="#d4d4d8" />
          <text x="34" y="78" fill={text} fontFamily="monospace" fontSize="10">generated:</text>
          <text x="34" y="98" fill={accent} fontFamily="monospace" fontSize="13" fontWeight="600">x7#k9P2@Qw!s</text>
          <rect x="34" y="112" width="80" height="5" rx="2.5" fill={line} />
          <circle cx="240" cy="86" r="20" fill="none" stroke={accent} strokeWidth="2.5" />
          <path d="M248 78a13 13 0 0 1 0 16" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      )

    case 'game':
      return (
        <g>
          <rect x="80" y="36" width="120" height="120" rx="6" fill="#101014" stroke={line} />
          <path d="M120 36v120M160 36v120M80 76h120M80 116h120" stroke={line} strokeWidth="1.5" />
          <text x="97" y="62" fill={fg} fontFamily="monospace" fontSize="12">5</text>
          <text x="137" y="62" fill={muted} fontFamily="monospace" fontSize="12">.</text>
          <text x="177" y="62" fill={accent} fontFamily="monospace" fontSize="12">9</text>
          <text x="97" y="102" fill={muted} fontFamily="monospace" fontSize="12">.</text>
          <text x="137" y="102" fill={fg} fontFamily="monospace" fontSize="12">3</text>
          <text x="177" y="102" fill={muted} fontFamily="monospace" fontSize="12">.</text>
          <text x="97" y="142" fill={muted} fontFamily="monospace" fontSize="12">.</text>
          <text x="177" y="142" fill={muted} fontFamily="monospace" fontSize="12">7</text>
          <path d="M232 40v120M260 60v100" stroke={muted} strokeDasharray="3 4" />
          <circle cx="246" cy="110" r="8" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1.5" />
          <text x="240" y="114" fill={accent} fontFamily="monospace" fontSize="9">4</text>
        </g>
      )
  }
}
