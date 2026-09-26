import type {
  IEducationItem,
  IExperienceItem,
  INavItem,
  IProfile,
  IProjectItem,
  ISkillGroup,
  ISocial,
} from '../types/portfolio';

/**
 * Single source of truth for the whole site.
 *
 * Notes on honesty (kept deliberately conservative):
 * - No percentage or "X% faster" claims appear anywhere: none were measured
 *   and recorded, so none are published.
 * - Employer work is described at the level of feature and technical
 *   responsibility only. No internal metrics, designs, data or integration
 *   specifics.
 */

export const profile: IProfile = {
  name: 'Maheswara Akilla',
  role: 'Mobile Frontend Engineer',
  tagline: 'React Native · Expo · TypeScript',
  location: 'Bangalore, India',
  email: 'maheswara.akilla@gmail.com',
  phone: '+91 73376 70458',
  avatar: '/Maheswara_image.jpg',
  resumeUrl: '/Maheswara_resume.pdf',
  siteUrl: 'https://maheswara-portfolio.vercel.app',
  intro:
    "I'm a mobile frontend engineer specialising in React Native (Expo) and TypeScript. I've shipped production features across payments, invoice capture and bank connectivity for finance platforms — owning the work end to end, from Figma implementation and product discussions through to release.",
  about: [
    'Most of the last two years were spent on production mobile and web in fintech: an Expo React Native app for bills, reimbursements and payments, and the Next.js dashboard behind it. That work sat in a regulated domain — payment states, upload queues, bank-account verification — where "the happy path works" is not the bar.',
    'I care about the parts of the job that are easy to skip: honest loading and failure states, component boundaries that keep a high-traffic screen fast, and turning a Figma file into something a finance team can actually use. I took part in PRD and feasibility discussions rather than only picking up tickets.',
    'Before that I owned the release pipeline at Salesken.ai — Expo EAS CI/CD and Google Play distribution for production Android releases — and learned React Native from scratch while shipping real-time call flows. Release ownership is the thing I under-sold for the longest time.',
    'Right now I am building ProofDrop: an offline-first proof-of-delivery app where SQLite is the source of truth, uploads are idempotent, and a courier can finish a delivery inside a dead zone and still trust it to sync.',
  ],
};

export const socials: ISocial[] = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/araragikoyomi-hsr' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/maheswara-akilla-94401b229/',
  },
  { id: 'email', label: 'Email', url: 'mailto:maheswara.akilla@gmail.com' },
  { id: 'whatsapp', label: 'WhatsApp', url: 'https://wa.me/+917337670458' },
  { id: 'resume', label: 'Résumé', url: '/Maheswara_resume.pdf' },
];

export const navSections: INavItem[] = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'experience', label: 'Experience', index: '02' },
  { id: 'projects', label: 'Projects', index: '03' },
  { id: 'skills', label: 'Skills', index: '04' },
  { id: 'education', label: 'Education', index: '05' },
  { id: 'contact', label: 'Contact', index: '06' },
];

export const experience: IExperienceItem[] = [
  {
    id: 'mysa',
    company: 'Mysa',
    role: 'Frontend Engineer',
    start: 'Oct 2025',
    end: 'Oct 2026',
    period: 'Oct 2025 — Oct 2026',
    location: 'Bangalore, India',
    summary: 'Banking, accounts-payable and expense-management platform.',
    highlights: [
      'Primary contributor on the Expo React Native app covering bills, reimbursements and payments — shipped invoice capture end to end: camera, crop, upload queue and AI-scan status.',
      'Built L0/L1 payment surfaces including failure reasons, comment threads and Ready-to-Pay flows, so finance teams can see exactly why a payment is blocked instead of chasing support.',
      'Implemented multi-bank connect and edit flows on the Next.js dashboard (major Indian banks), plus bank-account verification and reimbursement settings used by finance teams.',
      'Built TypeScript UI with controller/view separation and Jotai for shared client state; translated Figma designs into production screens and fed UX and feasibility input into PRD discussions.',
      'Improved customer-facing loading and interaction states across core payment and upload screens, and tuned component boundaries and re-renders for smoother navigation in high-traffic flows.',
    ],
    tech: [
      'React Native',
      'Expo',
      'TypeScript',
      'Jotai',
      'Next.js',
      'Figma',
      'REST',
    ],
  },
  {
    id: 'salesken',
    company: 'Salesken.ai',
    role: 'Software Development Engineer — I',
    start: 'Jan 2025',
    end: 'Sep 2025',
    period: 'Jan 2025 — Sep 2025',
    location: 'Bangalore, India',
    summary: 'Conversation-intelligence and sales-call platform.',
    highlights: [
      'Built cross-platform React Native (Expo) features on a modular, feature-based architecture.',
      'Implemented real-time call flows — initiation, logging and CDR sync — for CRM interoperability.',
      'Owned the Expo EAS CI/CD pipeline and Google Play Store distribution for production Android releases.',
      'Implemented role-based auth and modularised the Dialer, Recording and QA areas, using Zustand for shared state.',
    ],
    tech: ['React Native', 'Expo', 'EAS', 'TypeScript', 'Zustand', 'REST'],
    logo: '/SaleskenLogo.jpeg',
  },
];


export const projects: IProjectItem[] = [
  {
    id: 'proofdrop',
    name: 'ProofDrop',
    status: 'building',
    featured: true,
    tagline: 'Offline-first proof of delivery',
    description:
      'A courier proof-of-delivery app: a photo, a signature and a GPS-stamped timestamp captured at the doorstep, written to an on-device database that works with zero connectivity, then synced without duplicates once the network returns.',
    highlights: [
      'Design: SQLite is the source of truth for client-created records — not a cache of the API, so screens never need the network to render local work.',
      'Design: a transactional outbox, where the domain write and the outbox enqueue commit in one atomic transaction.',
      'Design: client-generated UUIDs double as idempotency keys, so at-least-once transport still yields exactly one server-side delivery.',
      'Design: an explicit sync state machine surfaced in the UI — pending, syncing, synced, retrying, dead-lettered — with persisted backoff.',
    ],
    tech: ['Expo', 'React Native', 'TypeScript', 'SQLite', 'EAS', 'Offline-first'],
    links: [
      { label: 'Repository', url: 'https://github.com/araragikoyomi-hsr/ProofDrop' },
    ],
  },
  {
    id: 'automation-atlas',
    name: 'Automation Atlas',
    status: 'building',
    tagline: 'CI/CD notifications in your pocket',
    description:
      'An Expo React Native app with a TypeScript backend that turns CI/CD events — GitHub Actions, EAS and Jenkins — into push notifications, so a failed build finds you instead of waiting to be discovered.',
    highlights: [
      'Expo push-notification pipeline driven from a small TypeScript backend service.',
      'Workflow-run events normalised into a single notification shape, whatever the source.',
      'Split into a mobile client and a backend repository so each can be deployed independently.',
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'Push notifications', 'Node.js'],
    links: [
      {
        label: 'App repo',
        url: 'https://github.com/araragikoyomi-hsr/Automation-Atlas',
      },
      {
        label: 'Backend repo',
        url: 'https://github.com/araragikoyomi-hsr/Automation-Atlas-Backend',
      },
    ],
  },
  {
    id: 'plan-tracker',
    name: 'The Plan Tracker',
    status: 'internal',
    tagline: 'A tracker I built to run my own prep plan',
    description:
      'A daily plan, backlog and phase tracker with ISO-week hour logging — built as a no-build-step PWA so it opens instantly on a phone and works offline.',
    highlights: [
      'Local-first data model with JSON export and import for backups.',
      'Installable PWA with a service worker, so it keeps working with no connectivity.',
      'Progress per phase, per day and per week, driven entirely from the browser.',
    ],
    tech: ['JavaScript', 'PWA', 'Service worker', 'HTML', 'CSS'],
    links: [
      {
        label: 'Repository',
        url: 'https://github.com/araragikoyomi-hsr/Tracker-App',
      },
    ],
  },
  {
    id: 'weather-app',
    name: 'Basic Weather App',
    status: 'live',
    tagline: 'The first thing I ever shipped',
    description:
      'A small React app that fetches and renders current weather for a city. Kept online because it is a useful reminder of where this started — and a snapshot of how much has changed since.',
    highlights: [
      'Async data fetching with loading and error states.',
      'Deployed as a static site and still live.',
    ],
    tech: ['React', 'JavaScript', 'REST API'],
    links: [
      { label: 'Live demo', url: 'https://curious-gnome-8a56aa.netlify.app' },
      {
        label: 'Repository',
        url: 'https://github.com/araragikoyomi-hsr/Weather-App',
      },
    ],
  },
];

export const skillGroups: ISkillGroup[] = [
  {
    id: 'mobile',
    category: 'Mobile',
    skills: [
      'React Native',
      'Expo (Router, EAS)',
      'TypeScript',
      'NativeWind / Tailwind',
      'Reanimated',
    ],
  },
  {
    id: 'web',
    category: 'Web',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'CSS3'],
  },
  {
    id: 'architecture',
    category: 'State & architecture',
    skills: [
      'Jotai',
      'Zustand',
      'Controller / view separation',
      'Reusable component design',
    ],
  },
  {
    id: 'platform',
    category: 'Platform & APIs',
    skills: ['REST', 'Auth0', 'Docker'],
  },
  {
    id: 'tools',
    category: 'Data & tooling',
    skills: [
      'SQLite',
      'MySQL',
      'MongoDB',
      'Git',
      'Postman',
      'Figma',
      'Linux (Arch)',
    ],
  },
];

export const education: IEducationItem[] = [
  {
    id: 'masai',
    institution: 'Masai School',
    credential: 'Full Stack Web Development',
    start: 'Jul 2024',
    end: 'Dec 2024',
    period: 'Jul 2024 — Dec 2024',
    location: 'Bangalore, India',
    logo: '/MasaiLogo.png',
  },
  {
    id: 'acharya',
    institution: 'Acharya Polytechnic',
    credential: 'Diploma in Automobile Engineering',
    start: 'Jun 2018',
    end: 'Oct 2022',
    period: 'Jun 2018 — Oct 2022',
    location: 'Bangalore, India',
    logo: '/AcharyaLogo.png',
  },
];
