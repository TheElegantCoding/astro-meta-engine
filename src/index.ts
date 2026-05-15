import type { BaseProps } from './component/base.astro';
import type { FaviconProps } from './component/favicon.astro';
import type { GoogleAnalyticProps } from './component/google_analytic.astro';
import type { LanguageAlternativeProps } from './component/language_alternative.astro';
import type { MetaAuthorProps } from './component/meta_author.astro';
import type { RobotsProps } from './component/robots.astro';
import type { RssProps } from './component/rss.astro';
import type { SeoProps } from './component/seo.astro';
import type { SitemapProps } from './component/sitemap.astro';
import type { TypographyProps } from './component/typography.astro';

export { default as Seo } from './component/seo.astro';
export { default as Rss } from './component/rss.astro';
export { default as Base } from './component/base.astro';
export { default as Robots } from './component/robots.astro';
export { default as Favicon } from './component/favicon.astro';
export { default as Sitemap } from './component/sitemap.astro';
export { default as OpenGraph } from './component/open_graph.astro';
export { default as Typography } from './component/typography.astro';
export { default as MetaAuthor } from './component/meta_author.astro';
export { default as GoogleAnalytic } from './component/google_analytic.astro';
export { default as StructuredData } from './component/structured_data.astro';
export { default as LanguageAlternative } from './component/language_alternative.astro';

export type {
  RssProps,
  SeoProps,
  BaseProps,
  RobotsProps,
  FaviconProps,
  SitemapProps,
  MetaAuthorProps,
  TypographyProps,
  GoogleAnalyticProps,
  LanguageAlternativeProps
};