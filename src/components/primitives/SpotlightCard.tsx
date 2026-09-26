import type { MouseEvent, ReactNode } from 'react';
import { useRef } from 'react';
import { cn } from '../../lib/cn';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Renders the card as an anchor when a URL is provided. */
  href?: string;
  external?: boolean;
}

/**
 * Card with a soft glow that follows the cursor. The glow is pure CSS driven by
 * two custom properties, so hovering never triggers a React re-render.
 */
export const SpotlightCard = ({
  children,
  className,
  href,
  external,
}: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const trackPointer = (event: MouseEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    element.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    element.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  };

  const classes = cn(
    'spotlight group/card rounded-lg bg-navy-light/60 ring-1 ring-navy-lighter/60',
    'transition duration-200 hover:ring-accent/40 hover:bg-navy-light',
    className,
  );

  if (href) {
    return (
      <div ref={ref} className={classes}>
        <a
          href={href}
          className="block h-full p-5 focus-visible:outline-offset-4 md:p-6"
          onMouseMove={trackPointer}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      </div>
    );
  }

  return (
    <div ref={ref} className={classes} onMouseMove={trackPointer}>
      <div className="h-full p-5 md:p-6">{children}</div>
    </div>
  );
};
