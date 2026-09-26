import { navSections, profile, socials } from '../../data/portfolio';
import { cn } from '../../lib/cn';
import { linkTargetProps } from '../../lib/links';
import { SocialIcon } from '../icons/SocialIcon';

interface SidebarProps {
  activeId: string;
}

/**
 * Desktop shell: name, role and section nav pinned to the left while the
 * content scrolls beside it.
 */
export const Sidebar = ({ activeId }: SidebarProps) => (
  <header className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-80 lg:flex-col lg:justify-between lg:px-12 lg:py-20 xl:w-96 xl:px-16">
    <div>
      <a
        href="#top"
        className="inline-block rounded-sm text-slate-bright transition hover:text-accent"
      >
        <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
      </a>

      <h2 className="mt-3 text-lg font-medium text-slate-soft">{profile.role}</h2>
      <p className="mt-1 font-mono text-xs text-accent">{profile.tagline}</p>

      <p className="mt-6 font-mono text-xs text-slate-dim">{profile.location}</p>

      <nav aria-label="Sections" className="mt-12">
        <ul className="space-y-1">
          {navSections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'group flex items-center gap-4 py-2 font-mono text-xs uppercase tracking-[0.2em] transition',
                    isActive
                      ? 'text-accent'
                      : 'text-slate-dim hover:text-slate-bright',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'h-px bg-current transition-all duration-300',
                      isActive ? 'w-12' : 'w-6 group-hover:w-12',
                    )}
                  />
                  <span>
                    <span className="mr-1.5">{section.index}.</span>
                    {section.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>

    <ul className="flex items-center gap-4">
      {socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.url}
            aria-label={social.label}
            title={social.label}
            className="block rounded-sm p-1 text-slate-dim transition hover:-translate-y-0.5 hover:text-accent"
            {...linkTargetProps(social.url)}
          >
            <SocialIcon id={social.id} />
          </a>
        </li>
      ))}
    </ul>
  </header>
);
