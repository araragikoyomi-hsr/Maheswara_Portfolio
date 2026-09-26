/**
 * Content contracts for the portfolio.
 *
 * Everything the site renders comes from `src/data/portfolio.ts`, so updating
 * the portfolio means editing data — never JSX.
 */

export type SocialId = 'github' | 'linkedin' | 'email' | 'whatsapp' | 'resume';

export type SkillGroupId =
  | 'mobile'
  | 'web'
  | 'architecture'
  | 'platform'
  | 'tools';

/** `live` = deployed, `building` = actively in progress, `internal` = personal tool. */
export type ProjectStatus = 'live' | 'building' | 'internal';

export interface IProfile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  resumeUrl: string;
  /** Deployed origin; used for canonical + Open Graph URLs. Empty disables them. */
  siteUrl: string;
  /** One-paragraph pitch used in the hero. */
  intro: string;
  /** Longer prose for the About section. */
  about: string[];
}

export interface ISocial {
  id: SocialId;
  label: string;
  url: string;
}

export interface INavItem {
  id: string;
  label: string;
  /** Two-digit index rendered next to the label, e.g. `01`. */
  index: string;
}

export interface IExperienceItem {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
  logo?: string;
  url?: string;
}

export interface IProjectLink {
  label: string;
  url: string;
}

export interface IProjectItem {
  id: string;
  name: string;
  status: ProjectStatus;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: IProjectLink[];
  image?: string;
  /** Marks the project that best represents current work. */
  featured?: boolean;
}

export interface ISkillGroup {
  id: SkillGroupId;
  category: string;
  skills: string[];
}

export interface IEducationItem {
  id: string;
  institution: string;
  credential: string;
  start: string;
  end: string;
  period: string;
  location: string;
  logo?: string;
}
