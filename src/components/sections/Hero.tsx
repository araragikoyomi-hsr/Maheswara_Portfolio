import { IconArrowDown, IconDownload } from '@tabler/icons-react';
import { motion, useReducedMotion } from 'motion/react';
import { profile } from '../../data/portfolio';
import { ButtonLink } from '../primitives/ButtonLink';
import { Reveal } from '../primitives/Reveal';

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[80vh] flex-col justify-center py-14 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="grid-backdrop pointer-events-none absolute inset-x-0 top-0 -z-10 h-full"
      />

      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_220px]">
        <Reveal>
          <p className="font-mono text-xs text-accent">
            {profile.location}
            <span className="mx-2 text-slate-dim">·</span>
            <span aria-hidden="true" className="inline-block animate-waving-hand">
              👋
            </span>{' '}
            Open to React Native / Expo roles
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-bright sm:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-3 text-xl font-medium text-slate-soft sm:text-2xl">
            {profile.role}
          </p>

          <p className="mt-2 font-mono text-sm text-accent">{profile.tagline}</p>

          <p className="mt-6 max-w-xl text-base">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={profile.resumeUrl}>
              <IconDownload size={16} aria-hidden="true" />
              Download résumé
            </ButtonLink>
            <ButtonLink href="#projects" variant="outline">
              See my work
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              Get in touch
            </ButtonLink>
          </div>
        </Reveal>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-40 sm:w-48 md:mx-0 md:ml-auto md:w-full md:max-w-[220px]"
        >
          <div className="relative">
            <img
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              width={440}
              height={586}
              decoding="async"
              className="aspect-[3/4] w-full rounded-lg object-cover object-top ring-1 ring-navy-lighter"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-accent/25 transition duration-300 hover:ring-accent/70"
            />
          </div>
        </motion.div>
      </div>

      <p className="mt-14 hidden items-center gap-2 font-mono text-xs text-slate-dim/80 lg:flex">
        <IconArrowDown size={14} aria-hidden="true" />
        Scroll for the details
      </p>
    </section>
  );
};
