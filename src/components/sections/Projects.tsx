import { IconArrowUpRight } from '@tabler/icons-react';
import { projects } from '../../data/portfolio';
import { cn } from '../../lib/cn';
import { isExternalUrl } from '../../lib/links';
import type { ProjectStatus } from '../../types/portfolio';
import { Reveal } from '../primitives/Reveal';
import { Section } from '../primitives/Section';
import { SectionHeading } from '../primitives/SectionHeading';
import { SpotlightCard } from '../primitives/SpotlightCard';
import { Tag } from '../primitives/Tag';

const statusStyles: Record<ProjectStatus, string> = {
  live: 'bg-accent/10 text-accent ring-accent/30',
  building: 'bg-amber-400/10 text-amber-200 ring-amber-400/30',
  internal: 'bg-sky-400/10 text-sky-200 ring-sky-400/30',
};

const statusLabels: Record<ProjectStatus, string> = {
  live: 'Live',
  building: 'In build',
  internal: 'Personal tool',
};

export const Projects = () => (
  <Section id="projects">
    <SectionHeading id="projects-heading" index="03" title="Projects" />

    <p className="mt-6 max-w-2xl text-sm">
      Everything here is mine, built on personal accounts and hardware. Where a
      project is still in progress it says so instead of pretending otherwise.
    </p>

    <ul className="mt-8 grid gap-4 md:grid-cols-2">
      {projects.map((project, index) => (
        <li
          key={project.id}
          className={cn('h-full', project.featured && 'md:col-span-2')}
        >
          <Reveal delay={index * 0.05} className="h-full">
            <SpotlightCard className="h-full">
              <article className="flex h-full flex-col">
                <header className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-bright">
                      {project.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-accent">
                      {project.tagline}
                    </p>
                  </div>
                  <span
                    className={cn(
                      'rounded-full px-3 py-1 font-mono text-[0.68rem] uppercase tracking-widest ring-1',
                      statusStyles[project.status],
                    )}
                  >
                    {statusLabels[project.status]}
                  </span>
                </header>

                <p className="mt-4 text-sm">{project.description}</p>

                <ul className="mt-5 space-y-3 text-sm">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Tag key={tech} accent={techIndex === 0}>
                      {tech}
                    </Tag>
                  ))}
                </ul>

                {project.links.length > 0 && (
                  <ul className="mt-auto flex flex-wrap gap-4 pt-6">
                    {project.links.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          {...(isExternalUrl(link.url)
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          className="inline-flex items-center gap-1.5 font-mono text-sm text-accent transition hover:text-ink"
                        >
                          {link.label}
                          <IconArrowUpRight size={15} aria-hidden="true" />
                          {isExternalUrl(link.url) && (
                            <span className="sr-only">(opens in a new tab)</span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </SpotlightCard>
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
);
