interface SectionHeadingProps {
  /** Two-digit index rendered in mono, e.g. `01`. */
  index: string;
  title: string;
  /** Must match the section id so `aria-labelledby` resolves. */
  id: string;
  className?: string;
}

/**
 * Section title with a monospace index and an accent rule — the pattern shared
 * by most of the popular open-source developer portfolios.
 */
export const SectionHeading = ({
  index,
  title,
  id,
  className,
}: SectionHeadingProps) => (
  <h2
    id={id}
    className={`flex items-center gap-4 text-xl font-semibold text-slate-bright md:text-2xl ${className ?? ''}`}
  >
    <span className="font-mono text-sm text-accent md:text-base">{index}.</span>
    <span className="whitespace-nowrap tracking-tight">{title}</span>
    <span className="h-px w-full max-w-[120px] flex-1 bg-navy-lighter" aria-hidden="true" />
  </h2>
);
