import { IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { navSections, profile, socials } from '../../data/portfolio';
import { cn } from '../../lib/cn';
import { linkTargetProps } from '../../lib/links';
import { SocialIcon } from '../icons/SocialIcon';

interface MobileHeaderProps {
  activeId: string;
}

/** Sticky mobile/tablet top bar with a full-screen section menu. */
export const MobileHeader = ({ activeId }: MobileHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = navSections.find((section) => section.id === activeId);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-lighter/60 bg-navy/85 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between px-6 py-4">
        <a href="#top" className="rounded-sm">
          <span className="text-base font-semibold text-slate-bright">
            {profile.name}
          </span>
          <span className="mt-0.5 block font-mono text-[0.65rem] text-accent">
            {activeSection ? activeSection.label : profile.role}
          </span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="rounded-md p-2 text-slate-bright transition hover:text-accent"
        >
          {isOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Sections"
          className="border-t border-navy-lighter/60 px-6 pt-4 pb-8"
        >
          <ul className="space-y-1">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setIsOpen(false)}
                  aria-current={activeId === section.id ? 'true' : undefined}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-2 py-3 font-mono text-sm uppercase tracking-[0.18em] transition',
                    activeId === section.id
                      ? 'text-accent'
                      : 'text-slate-dim hover:text-slate-bright',
                  )}
                >
                  <span aria-hidden="true">{section.index}.</span>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex items-center gap-5 border-t border-navy-lighter/60 pt-6">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  aria-label={social.label}
                  className="block text-slate-dim transition hover:text-accent"
                  {...linkTargetProps(social.url)}
                >
                  <SocialIcon id={social.id} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
