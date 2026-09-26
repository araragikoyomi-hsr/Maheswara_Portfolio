import { experience } from '../../data/portfolio';
import { LogoBadge } from '../primitives/LogoBadge';
import { Reveal } from '../primitives/Reveal';
import { Section } from '../primitives/Section';
import { SectionHeading } from '../primitives/SectionHeading';
import { SpotlightCard } from '../primitives/SpotlightCard';
import { Tag } from '../primitives/Tag';

export const Experience = () => (
  <Section id="experience">
    <SectionHeading id="experience-heading" index="02" title="Experience" />

    <ol className="mt-8 space-y-4">
      {experience.map((item, index) => (
        <li key={item.id}>
          <Reveal delay={index * 0.06}>
            <SpotlightCard className="h-full">
              <div className="md:grid md:grid-cols-[auto_minmax(0,1fr)] md:gap-6">
                <LogoBadge
                  name={item.company}
                  src={item.logo}
                  className="mb-4 md:mb-0"
                />

                <div>
                  <h3 className="text-base font-semibold text-slate-bright">
                    {item.role}
                    <span className="mx-2 text-slate-dim">at</span>
                    <span className="text-accent">{item.company}</span>
                  </h3>

                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-slate-dim">
                    {item.period}
                    <span className="mx-2">·</span>
                    {item.location}
                  </p>

                  <p className="mt-3 text-sm italic text-slate-soft">
                    {item.summary}
                  </p>

                  <ul className="mt-5 space-y-3 text-sm">
                    {item.highlights.map((highlight) => (
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
                    {item.tech.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </ul>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);
