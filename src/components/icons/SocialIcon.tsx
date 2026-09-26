import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconFileText,
  IconMail,
} from '@tabler/icons-react';
import type { SocialId } from '../../types/portfolio';

interface SocialIconProps {
  id: SocialId;
  size?: number;
}

/** Maps a plain `SocialId` from the data layer onto a Tabler glyph. */
export const SocialIcon = ({ id, size = 22 }: SocialIconProps) => {
  const props = { size, stroke: 1.6, 'aria-hidden': true } as const;

  switch (id) {
    case 'github':
      return <IconBrandGithub {...props} />;
    case 'linkedin':
      return <IconBrandLinkedin {...props} />;
    case 'whatsapp':
      return <IconBrandWhatsapp {...props} />;
    case 'email':
      return <IconMail {...props} />;
    case 'resume':
      return <IconFileText {...props} />;
  }
};
