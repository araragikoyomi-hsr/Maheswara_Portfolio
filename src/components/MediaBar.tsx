import { motion } from 'framer-motion';
import { MediaBarMotion } from '../common/motion/MediaBar';
import {
  IconBrandCampaignmonitor,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from '@tabler/icons-react';

export const MediaBar = () => {
  const media = [
    { icon: <IconBrandGithub />, link: 'https://github.com/araragikoyomi-hsr' },
    {
      icon: <IconBrandLinkedin />,
      link: 'https://www.linkedin.com/in/maheswara-akilla-94401b229/',
    },
    { icon: <IconBrandWhatsapp />, link: 'https://wa.me/+917337670458' },
    {
      icon: <IconBrandCampaignmonitor />,
      link: 'mailto:maheswara.akilla@gmail.com',
    },
  ];
  const { container } = MediaBarMotion;
  
  return (
    <motion.div
      initial={container.initial}
      animate={container.animated}
      transition={container.transition}
      className="hidden md:flex absolute z-10 flex-col w-10 p-2 bg-teal-500 items-center rounded-md bottom-0 md:bottom-auto md:top-80 space-y-4"
    >
      {media.map((item) => {
        const isMailto = item.link.startsWith('mailto:');
        const isExternal = item.link.startsWith('http') || isMailto;
        
        return (
          <a
            href={item.link}
            key={item.link}
            className="text-black hover:text-white"
            aria-label={item.link}
            {...(isExternal && !isMailto && { 
              target: "_blank", 
              rel: "noopener noreferrer" 
            })}
          >
            {item.icon}
          </a>
        );
      })}
    </motion.div>
  );
};