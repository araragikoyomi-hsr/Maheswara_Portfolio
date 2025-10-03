import { motion } from 'framer-motion';
import { IconBrandCodepen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';

export const Projects = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A showcase of my portfolio projects.';
  const portfolios = [
    {
      id: 1,
      name: 'Basic Weather App',
      image: '/Weather.svg',
      link: ' https://curious-gnome-8a56aa.netlify.app',
      description: 'My first project. A simple weather app that fetches and displays weather data.',
    },
    {
      id: 2,
      name: 'Automation Notifier',
      image: '/AutomationLogo.png',
      link: '#', // no live link yet
      description: 'An automation notifier for GitHub, EAS, and Jenkins. Project is in progress.',
    },
  ];

  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconBrandCodepen />}
        label="Portfolio"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <ProjectCard key={portfolio.id} {...portfolio} />
        ))}
      </div>
    </motion.section>
  );
};
