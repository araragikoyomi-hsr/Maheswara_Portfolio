import { Footer } from './components/layout/Footer';
import { MobileHeader } from './components/layout/MobileHeader';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Sidebar } from './components/layout/Sidebar';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { navSections, profile } from './data/portfolio';
import { useActiveSection } from './hooks/useActiveSection';
import { useDocumentMeta } from './hooks/useDocumentMeta';

/** Module-level constant so the scroll-spy effect never re-subscribes. */
const sectionIds = navSections.map((section) => section.id);

function App() {
  const activeId = useActiveSection(sectionIds);

  useDocumentMeta({
    title: `${profile.name} — ${profile.role} · React Native & Expo`,
    description: profile.intro,
    image: profile.siteUrl ? `${profile.siteUrl}/og-image.png` : undefined,
    url: profile.siteUrl || undefined,
  });

  return (
    <div className="relative">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-navy-light focus:px-4 focus:py-2 focus:text-accent focus:ring-1 focus:ring-accent/50"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <MobileHeader activeId={activeId} />
      <Sidebar activeId={activeId} />

      <main className="px-6 lg:ml-80 lg:px-12 xl:ml-96 xl:px-16">
        <div className="mx-auto max-w-3xl lg:max-w-4xl">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
