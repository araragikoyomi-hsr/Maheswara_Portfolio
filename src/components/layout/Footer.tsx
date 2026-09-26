import { profile } from '../../data/portfolio';

export const Footer = () => (
  <footer className="border-t border-navy-lighter/60 py-8">
    <p className="font-mono text-xs text-slate-dim">
      Built with React, TypeScript, Tailwind CSS and Motion. Deployed on Vercel.
    </p>
    <p className="mt-2 font-mono text-xs text-slate-dim">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </p>
  </footer>
);
