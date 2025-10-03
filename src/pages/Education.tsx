import { motion } from 'framer-motion';
import { IconBallpen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Education = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My education history';

  const educations = [
    {
      id: 1,
      image: '/AcharyaLogo.png',  
      name: 'Acharya Polytechnic',
      position: 'Diploma in Automobile Engineering',
      startDate: 'Jun 2018',
      endDate: '2022',
      duration: '4 Years',
      location: 'Bengaluru, India',
    },
    {
      id: 2,
      image: '/MasaiLogo.png', 
      name: 'Masai Institute',
      position: 'Full Stack Web Development',
      startDate: 'Jun 2024',
      endDate: 'Dec 2024',
      duration: '6 Months',
      location: 'Bengaluru, India',
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
        icon={<IconBallpen />}
        label="Education"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {educations.map((education) => (
          <CommonCard key={education.id} {...education} />
        ))}
      </div>
    </motion.section>
  );
};
