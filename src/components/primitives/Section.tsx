import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Anchor target for one page section. `id` is what the scroll-spy observes. */
export const Section = ({ id, children, className }: SectionProps) => (
  <section
    id={id}
    aria-labelledby={`${id}-heading`}
    className={cn('scroll-mt-24 py-12 lg:py-16', className)}
  >
    {children}
  </section>
);
