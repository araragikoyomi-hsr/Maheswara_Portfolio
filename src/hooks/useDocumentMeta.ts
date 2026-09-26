import { useEffect } from 'react';

type MetaAttribute = 'name' | 'property';

function upsertMeta(attribute: MetaAttribute, key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

export interface DocumentMeta {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

/**
 * Keeps document metadata and Open Graph tags in sync with the page.
 * Static tags live in `index.html` for crawlers that do not execute JS; this
 * hook keeps them accurate once the app is running.
 */
export function useDocumentMeta({ title, description, image, url }: DocumentMeta) {
  useEffect(() => {
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);

    if (url) {
      upsertMeta('property', 'og:url', url);
    }

    if (image) {
      upsertMeta('property', 'og:image', image);
      upsertMeta('name', 'twitter:image', image);
    }
  }, [title, description, image, url]);
}
