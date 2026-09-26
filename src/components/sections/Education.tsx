import { education } from '../../data/portfolio';
import { LogoBadge } from '../primitives/LogoBadge';
import { Reveal } from '../primitives/Reveal';
import { Section } from '../primitives/Section';
import { SectionHeading } from '../primitives/SectionHeading';
import { SpotlightCard } from '../primitives/SpotlightCard';

export const Education = () => (
  <Section id="education">
    <SectionHeading id="education-heading" index="05" title="Education" />

    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
      {education.map((item, index) => (
        <li key={item.id} className="h-full">
          <Reveal delay={index * 0.05} className="h-full">
            <SpotlightCard className="h-full">
              <div className="flex items-start gap-4">
                <LogoBadge name={item.institution} src={item.logo} />
                <div>
                  <h3 className="text-base font-semibold text-slate-bright">
                    {item.credential}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{item.institution}</p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-slate-dim">
                    {item.period}
                    <span className="mx-2">·</span>
                    {item.location}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
);
