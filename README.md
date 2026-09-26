# Maheswara Akilla — Portfolio

A single-page portfolio for **Maheswara Akilla**, mobile frontend engineer
(React Native · Expo · TypeScript). Live at
<https://maheswara-portfolio.vercel.app/>.

---

## Stack

| Concern | Choice |
| --- | --- |
| Framework | React 19 + TypeScript 5.9 (strict) |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 (CSS-first `@theme` tokens, no JS config file) |
| Animation | `motion` (Framer Motion 13) — reveals, spotlight cards, scroll progress |
| Icons | `@tabler/icons-react` |
| Fonts | Self-hosted Inter Variable (weight axis) + JetBrains Mono 400/500/600 |
| Linting | ESLint 9 flat config + typescript-eslint |
| Hosting | Vercel (SPA rewrite in `vercel.json`) |

---

## Editing content

**All site content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).**

Nothing else needs to change to update the portfolio:

- `profile` — name, role, tagline, location, email, phone, avatar, résumé path,
  `siteUrl`, hero intro and About prose
- `socials` — the links in the sidebar, mobile menu and contact section
- `navSections` — the section list; `index` is the `01.` … `06.` label
- `experience` — roles with `highlights`, `tech`, optional `logo`
- `projects` — `status` is `live` | `building` | `internal` and drives the badge
- `skillGroups` — grouped skills; the group icon is chosen in
  `src/components/sections/Skills.tsx`
- `education`

Types for every shape are in `src/types/portfolio.ts`.

### Honesty rules followed by this site

Your own readiness notes treat unverifiable claims as a failure mode, so:

- No performance percentages or user counts are published — none were measured.
- Employer work is described by feature and responsibility only: no internal
  metrics, designs, screenshots, data or bank-integration specifics.
- `ProofDrop` is labelled **In build** because the repository is public but the
  implementation is still in progress. Move it to `live` only when the EAS
  preview link and demo video exist.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | `tsc` type-check, then a production build into `dist/` |
| `npm run preview` | Serves the built output on http://localhost:4173 |
| `npm run lint` | ESLint over the whole repo, fails on any warning |
| `npm run og-image` | Regenerates `public/og-image.png` from `scripts/generate-og-image.mjs` |

### Deploying

`vercel.json` rewrites every non-asset path to `/`, so the single page also
works on deep links. Push to `main` and let Vercel build, or run
`npm run build` and deploy `dist/`.

After the first deploy on a new domain, update `profile.siteUrl` plus the
absolute `og:*` URLs and the sitemap in `index.html`, `public/robots.txt` and
`public/sitemap.xml`.

---

## Assets

| File | Notes |
| --- | --- |
| `public/Maheswara_resume.pdf` | Served by the "Download résumé" buttons |
| `public/Maheswara_image.jpg` | Hero portrait (portrait crop, `object-top`) |
| `public/og-image.png` | 1200×630 social preview, generated |
| `public/favicon.svg` | Monogram favicon |
| `public/*Logo.*` | Company / school logos, with a monogram fallback in `LogoBadge` |

---

## Project layout

```
src/
├── data/portfolio.ts           # every fact the site renders
├── types/portfolio.ts          # content contracts
├── hooks/                      # scroll-spy + document metadata
├── lib/                        # cn() class merge, link helpers
├── index.css                   # Tailwind entry, design tokens, spotlight/grid effects
└── components/
    ├── layout/                 # sidebar, mobile header, scroll progress, footer
    ├── primitives/             # section, heading, card, tag, badge, button, reveal
    ├── sections/               # hero, about, experience, projects, skills, education, contact
    └── icons/                  # social icon mapping
```

---

## Design credits

The layout language — dark navy canvas with a single bright accent, a fixed left
sidebar with scroll-spy navigation, monospace section indices and spotlight-hover
cards — is inspired by the most widely forked open-source developer portfolios,
in particular [Brittany Chiang's v4](https://github.com/bchiang7/v4) (MIT,
attribution requested) and
[Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) by Once UI.
No code or assets were copied; the implementation here is original and the
content is mine.
