import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { linkTargetProps } from '../../lib/links';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

export const ButtonLink = ({
  href,
  children,
  variant = 'primary',
  className,
}: ButtonLinkProps) => (
  <a
    href={href}
    {...linkTargetProps(href)}
    className={cn(
      'inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm transition',
      variant === 'primary'
        ? 'bg-accent/10 text-accent ring-1 ring-accent/40 hover:bg-accent/20'
        : 'text-slate-bright ring-1 ring-navy-lighter hover:text-accent hover:ring-accent/50',
      className,
    )}
  >
    {children}
  </a>
);
