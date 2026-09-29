export type ProjectArt =
  | 'payments'
  | 'discord'
  | 'ranking'
  | 'api'
  | 'security'
  | 'utility'
  | 'game'

export type ProjectSize = 'featured' | 'medium' | 'small'

export type Project = {
  id: string
  name: string
  category: string
  description: string
  tech: string[]
  art: ProjectArt
  size: ProjectSize
  url?: string
  github?: string
  privateNote?: string
}

export const projects: Project[] = [
  {
    id: 'creator-payments',
    name: 'Creator Payments',
    category: 'Pagamentos · Automação',
    description:
      'Plataforma de automação de pagamentos construída em torno do PIX — APIs, integrações e fluxos de backend para automatizar o acompanhamento de pagamentos de criadores.',
    tech: ['PIX', 'APIs', 'Automação', 'Backend', 'Integrações'],
    art: 'payments',
    size: 'featured',
    github: 'https://github.com/pxthedev/CreatorDev-Bot',
  },
  {
    id: 'discord-bots',
    name: 'Discord Bots',
    category: 'Automação · Comunidades',
    description:
      'Bots para Discord com automação, sistemas de moderação e integrações para comunidades e servidores de Minecraft.',
    tech: ['Discord API', 'JavaScript', 'Node.js', 'APIs', 'Bancos de dados'],
    art: 'discord',
    size: 'medium',
    github: 'https://github.com/pxthedev/Bot-da-Creator-Dev',
  },
  {
    id: 'ranked-bedwars',
    name: 'Ranked BedWars',
    category: 'Jogos · Dados',
    description:
      'Sistema de ranking, estatísticas e matchmaking para BedWars — lógica de backend e gerenciamento de dados por trás de filas competitivas.',
    tech: ['Ranking', 'Estatísticas', 'Matchmaking', 'Lógica de backend', 'Gestão de dados'],
    art: 'ranking',
    size: 'medium',
    privateNote: 'Projeto privado — sem repositório público',
  },
  {
    id: 'spring-boot-apis',
    name: 'Spring Boot APIs',
    category: 'Backend · REST',
    description:
      'APIs REST construídas com Spring Boot — autenticação, persistência e arquitetura em camadas e de fácil manutenção.',
    tech: ['REST API', 'Autenticação', 'Spring Security', 'JPA', 'MySQL'],
    art: 'api',
    size: 'small',
    github: 'https://github.com/pxthedev/CRUD-Users',
  },
  {
    id: 'security',
    name: 'Security / Cyber Security',
    category: 'Segurança · Pesquisa',
    description:
      'Projetos e estudos sobre segurança de aplicações — auth, autorização, desenvolvimento seguro e ferramentas de segurança.',
    tech: ['Web Security', 'Autenticação', 'Autorização', 'Testes de segurança', 'Desenvolvimento seguro'],
    art: 'security',
    size: 'small',
    github: 'https://github.com/pxthedev/Security-Scan',
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    category: 'Utilitário · Java',
    description: 'Um gerador de senhas básico feito em Java com StringBuilder.',
    tech: ['Java', 'StringBuilder'],
    art: 'utility',
    size: 'small',
    github: 'https://github.com/pxthedev/Password-Generator',
  },
  {
    id: 'sudoku',
    name: 'Sudoku',
    category: 'Jogo · Java',
    description: 'Jogo de Sudoku com interface gráfica feito em Java Swing.',
    tech: ['Java', 'Swing', 'GUI'],
    art: 'game',
    size: 'small',
    github: 'https://github.com/pxthedev/Sudoku',
  },
]
