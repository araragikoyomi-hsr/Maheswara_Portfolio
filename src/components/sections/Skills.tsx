import {
  IconApi,
  IconDeviceMobile,
  IconHierarchy,
  IconTerminal2,
  IconWorld,
} from '@tabler/icons-react';
import type { ReactNode } from 'react';
import { skillGroups } from '../../data/portfolio';
import type { SkillGroupId } from '../../types/portfolio';
import { Reveal } from '../primitives/Reveal';
import { Section } from '../primitives/Section';
import { SectionHeading } from '../primitives/SectionHeading';
import { SpotlightCard } from '../primitives/SpotlightCard';
import { Tag } from '../primitives/Tag';

const groupIcons: Record<SkillGroupId, ReactNode> = {
  mobile: <IconDeviceMobile size={18} stroke={1.6} aria-hidden="true" />,
  web: <IconWorld size={18} stroke={1.6} aria-hidden="true" />,
  architecture: <IconHierarchy size={18} stroke={1.6} aria-hidden="true" />,
  platform: <IconApi size={18} stroke={1.6} aria-hidden="true" />,
  tools: <IconTerminal2 size={18} stroke={1.6} aria-hidden="true" />,
};

export const Skills = () => (
  <Section id="skills">
    <SectionHeading id="skills-heading" index="04" title="Skills" />

    <p className="mt-6 max-w-2xl text-sm">
      Grouped by where I actually use them, not by how impressive the list looks.
    </p>

    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group, index) => (
        <li key={group.id} className="h-full">
          <Reveal delay={index * 0.04} className="h-full">
            <SpotlightCard className="h-full">
              <h3 className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent">
                {groupIcons[group.id]}
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
);
