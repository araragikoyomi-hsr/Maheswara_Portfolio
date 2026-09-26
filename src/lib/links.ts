/** True for absolute http(s) URLs. */
export const isExternalUrl = (url: string) => /^https?:\/\//i.test(url);

/** True when a link should open in a new tab (external site or a PDF asset). */
export const opensInNewTab = (url: string) =>
  isExternalUrl(url) || /\.pdf($|\?)/i.test(url);

/** Spreads the correct `target`/`rel` pair for a link, or nothing for in-page links. */
export const linkTargetProps = (url: string) =>
  opensInNewTab(url)
    ? ({ target: '_blank', rel: 'noopener noreferrer' } as const)
    : {};
