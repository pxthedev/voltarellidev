import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  const featured = projects.filter((p) => p.size === 'featured')
  const medium = projects.filter((p) => p.size === 'medium')
  const small = projects.filter((p) => p.size === 'small')

  return (
    <section id="projetos" className="scroll-mt-20">
      <div className="rounded-2xl border border-line bg-panel p-6 sm:p-10 lg:p-12">
        <SectionHeader
          index="03"
          eyebrow="Projetos"
          title="Sistemas, automações e APIs."
          description="Trabalhos selecionados — automação de pagamentos, bots, sistemas de ranking, APIs REST e ferramentas de segurança."
        />

        <div className="mt-10 space-y-5 sm:mt-12">
          {featured.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}

          <div className="grid gap-5 md:grid-cols-2">
            {medium.map((project, i) => (
              <Reveal key={project.id} delay={i * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {small.map((project, i) => (
              <Reveal key={project.id} delay={i * 70}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
