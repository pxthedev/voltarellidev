import type { Project } from '../data/projects'
import { Icon } from './Icons'
import { ProjectArt } from './ProjectArt'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryHref = project.url ?? project.github

  return (
    <article
      className={`group flex overflow-hidden rounded-2xl border border-line bg-ink/40 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-24px_rgba(255,255,255,0.18)] ${
        project.size === 'featured' ? 'flex-col lg:grid lg:grid-cols-12' : 'flex-col'
      }`}
    >
      <div
        className={
          project.size === 'featured' ? 'h-52 lg:h-auto lg:col-span-5' : 'h-44 sm:h-52'
        }
      >
        <ProjectArt variant={project.art} />
      </div>

      <div
        className={`flex flex-1 flex-col ${
          project.size === 'featured' ? 'lg:col-span-7 lg:justify-center' : ''
        } p-6 sm:p-7 ${project.size === 'featured' ? 'lg:p-10' : ''}`}
      >
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            {project.category}
          </p>
        </div>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-fg transition-colors duration-200 group-hover:text-accent-soft sm:text-2xl">
          {project.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-ink/60 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors duration-200 group-hover:border-accent/30"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          {primaryHref ? (
            <a
              href={primaryHref}
              target={primaryHref.startsWith('http') ? '_blank' : undefined}
              rel={primaryHref.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft transition-colors hover:text-accent"
            >
              Ver projeto
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          ) : (
            <span className="text-sm text-dim">{project.privateNote}</span>
          )}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              <Icon name="github" className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
