export type TechCategory = {
  id: string
  title: string
  items: string[]
}

export const techCategories: TechCategory[] = [
  {
    id: 'backend',
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'JPA'],
  },
  {
    id: 'database',
    title: 'Banco de dados',
    items: ['MySQL', 'SQLite', 'Supabase'],
  },
  {
    id: 'tools',
    title: 'Ferramentas',
    items: ['Git', 'GitHub', 'Docker', 'IntelliJ IDEA', 'VS Code', 'Insomnia'],
  },
]
