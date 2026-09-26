import { profile } from '../../data/portfolio';
import { Reveal } from '../primitives/Reveal';
import { Section } from '../primitives/Section';
import { SectionHeading } from '../primitives/SectionHeading';

export const About = () => (
  <Section id="about">
    <SectionHeading id="about-heading" index="01" title="About" />

    <Reveal className="mt-8">
      <div className="space-y-5 text-base">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <dl className="mt-10 grid gap-x-8 gap-y-4 border-t border-navy-lighter/60 pt-8 sm:grid-cols-2">
        <div className="flex items-baseline justify-between gap-4 sm:block">
          <dt className="font-mono text-xs uppercase tracking-widest text-slate-dim">
            Based in
          </dt>
          <dd className="text-sm text-slate-soft">{profile.location}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 sm:block">
          <dt className="font-mono text-xs uppercase tracking-widest text-slate-dim">
            Focus
          </dt>
          <dd className="text-sm text-slate-soft">
            Offline-first mobile, release pipelines, fintech UI
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 sm:block">
          <dt className="font-mono text-xs uppercase tracking-widest text-slate-dim">
            Core stack
          </dt>
          <dd className="text-sm text-slate-soft">
            React Native, Expo, TypeScript, Next.js
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 sm:block">
          <dt className="font-mono text-xs uppercase tracking-widest text-slate-dim">
            Currently
          </dt>
          <dd className="text-sm text-slate-soft">
            Building ProofDrop (offline-first proof of delivery)
          </dd>
        </div>
      </dl>
    </Reveal>
  </Section>
);
