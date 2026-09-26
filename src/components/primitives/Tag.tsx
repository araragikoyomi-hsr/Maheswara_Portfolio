import { cn } from '../../lib/cn';

interface TagProps {
  children: string;
  className?: string;
  /** Accent styling used for the primary technologies of a project/role. */
  accent?: boolean;
}

export const Tag = ({ children, className, accent }: TagProps) => (
  <li
    className={cn(
      'rounded-full px-3 py-1 font-mono text-xs leading-5 ring-1',
      accent
        ? 'bg-accent/10 text-accent ring-accent/25'
        : 'bg-navy/60 text-slate-dim ring-navy-lighter',
      className,
    )}
  >
    {children}
  </li>
);
