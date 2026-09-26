import { useEffect, useState } from 'react';

/**
 * Tracks which page section is currently in view so the nav can highlight it.
 * Uses one IntersectionObserver and a middle-band root margin, which behaves
 * far better than scroll math on mobile (address-bar resize) and on short pages.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');
  // A joined string keeps the effect dependency stable for callers that pass an
  // inline array literal.
  const key = sectionIds.join('|');

  useEffect(() => {
    const ids = key.split('|').filter(Boolean);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
