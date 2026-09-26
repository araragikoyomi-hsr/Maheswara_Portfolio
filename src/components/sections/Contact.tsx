import { IconDownload, IconMail, IconMapPin } from '@tabler/icons-react';
import { profile, socials } from '../../data/portfolio';
import { linkTargetProps } from '../../lib/links';
import { SocialIcon } from '../icons/SocialIcon';
import { ButtonLink } from '../primitives/ButtonLink';
import { Reveal } from '../primitives/Reveal';
import { Section } from '../primitives/Section';
import { SectionHeading } from '../primitives/SectionHeading';

export const Contact = () => (
  <Section id="contact">
    <SectionHeading id="contact-heading" index="06" title="Contact" />

    <Reveal className="mt-8">
      <p className="max-w-2xl text-base">
        I am open to mobile frontend roles — React Native and Expo — in
        Bangalore or remote. Email is the fastest way to reach me and I usually
        reply within a day. If you want the short version first, the résumé
        below is one page.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${profile.email}`}>
          <IconMail size={16} aria-hidden="true" />
          {profile.email}
        </ButtonLink>
        <ButtonLink href={profile.resumeUrl} variant="outline">
          <IconDownload size={16} aria-hidden="true" />
          Download résumé
        </ButtonLink>
      </div>

      <ul className="mt-10 flex flex-wrap gap-6 border-t border-navy-lighter/60 pt-8">
        {socials
          .filter((social) => social.id !== 'email' && social.id !== 'resume')
          .map((social) => (
            <li key={social.id}>
              <a
                href={social.url}
                className="inline-flex items-center gap-2.5 text-sm text-slate-dim transition hover:text-accent"
                {...linkTargetProps(social.url)}
              >
                <SocialIcon id={social.id} size={20} />
                {social.label}
              </a>
            </li>
          ))}
      </ul>

      <p className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs text-slate-dim">
        <IconMapPin size={14} aria-hidden="true" />
        {profile.location}
        <span className="mx-1">·</span>
        {profile.phone}
      </p>
    </Reveal>
  </Section>
);
