<img src="./.github/asset/illustration/wave_header.svg" width="100%" />

<h1 id="top" align="center">
  <img src="./.github/asset/icon/html.svg" alt="icon" width="28px" align="center" />
  Astro meta engine
</h1>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<pre align="center">
  <a href="#installation">📦 SETUP</a> • <a href="#configuration">⚙️ CONFIGURATION</a> • <a href="#usage">⚡ USAGE</a>
</pre>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<img src="./.github/asset/illustration/astro_meta_engine_cover.svg" width="100%" />

<br />

<div align="center">
  <img src="./.github/asset/illustration/bun_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/astro_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/github_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/typescript_badge.svg" height="34px" />
</div>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="about">
  <img src="./.github/asset/icon/information.svg" width="24px" align="center"/>
  About
</h2>

<table border="0">
<tr>
<td>
Astro meta engine is a powerful tool that allows you to easily manage metadata for your Astro projects. It provides a simple and intuitive components for defining metadata, which can be used to enhance the SEO and social media presence of your website. With Astro meta engine, you can create custom metadata for each page, including Open Graph tags, Twitter cards, and more, all while maintaining a clean and organized codebase.
</td>
</tr>
</table>

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="table-of-content">
  <img src="./.github/asset/icon/book.svg" width="24px" align="center"/>
  Table of content
</h2>

- [<img src="./.github/asset/icon/information.svg" width="16px" align="center" /> About](#about)
- [<img src="./.github/asset/icon/thunder.svg" width="16px" align="center" /> Requirements](#requirements)
- [<img src="./.github/asset/icon/package.svg" width="16px" align="center" /> Installation](#installation)
- [<img src="./.github/asset/icon/rocket.svg" width="16px" align="center" /> Usage](#usage)

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="requirements">
  <img src="./.github/asset/icon/thunder.svg" width="24px" align="center"/>
  Requirements
</h2>

- <img src="./.github/asset/icon/node.svg" width="20px" align="center" /> node >= **22.17.0**
- <img src="./.github/asset/icon/bun.svg" width="20px" align="center" /> bun >= **1.1.0**

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="installation">
  <img src="./.github/asset/icon/package.svg" width="24px" align="center" />
  Installation
</h2>

<h3><img src="./.github/asset/icon/bun.svg" width="24px" align="center" /> Bun</h3>

```bash
bun i -D astro-meta-engine
```

<h3><img src="./.github/asset/icon/npm.svg" width="24px" align="center" /> Npm</h3>

```bash
npm i -D astro-meta-engine
```

<h3><img src="./.github/asset/icon/pnpm.svg" width="24px" align="center" /> Pnpm</h3>

```bash
pnpm i -D astro-meta-engine
```

<h3><img src="./.github/asset/icon/yarn.svg" width="24px" align="center" /> Yarn</h3>

```bash
yarn i -D astro-meta-engine
```

<br />

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
/>

<h2 id="usage">
  <img src="./.github/asset/icon/rocket.svg" width="24px" align="center" />
  Usage
</h2>

To use this packages you have the principal component Seo, that is the main component to manage all the metadata of your website, and the OpenGraph component, that is a subcomponent of Seo, to manage all the open graph metadata of your website.

```tsx
---
import { Seo } from "astro-meta-engine";
---

<Seo 
  title="Astro"
  description="Astro"
  keywords={["astro", "meta", "engine", "seo", "metadata", "open graph", "twitter cards"]}
/>
```

You can use separate components for each type of metadata, such as OpenGraph, TwitterCard, etc. For example:

```tsx
---
import { MetaAuthor } from "astro-meta-engine";
---

<MetaAuthor
  copyright="Copyright © All rights reserved"
  author={{
    web: "https://google.com",
    name: "LuisdaByte",
    email: ""
  }}
/>
```

<br />

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
/>

<h2 id="configuration">
  <img src="./.github/asset/icon/gear.svg" width="24px" align="center" />
  Configuration
</h2>

Here is the Seo component full configuration:


```tsx
---
import { Seo } from "astro-meta-engine";
---

type Props = {
  schema?: Record<string, unknown>;
};

<Seo 
  title="Astro"
  description="Astro"
  keywords={["astro", "meta", "engine", "seo", "metadata", "open graph", "twitter cards"]}
  charset="UTF-8"
  xUACompatible="IE=edge"
  viewportValue="width=device-width, initial-scale=1.0"
  googleAnalytic={{ googleAnalyticId: "G-XXXXXXXXXX", showGoogleAnalytic: true }}
  showCanonical={true}
  rss={{
    rssPath: "/rss.xml",
    siteName: "Astro SEO Kit",
    showRss: true
  }}
  favicon={{
    png: "/favicon.png",
    svg: "/favicon.svg",
    ico: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    manifest: "/site.webmanifest"
  }}
  sitemap={{
    sitemapPath: "/sitemap.xml",
    showSitemap: true
  }}
  metaRobot={{
    noIndex: "noindex",
    noFollow: "nofollow",
    extraRobots: "max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  }}
  metaAuthor={{
    copyright: "Copyright © All rights reserved",
    author: {
      web: "https://google.com",
      name: "LuisdaByte",
      email: ""
    }
  }}
  openGraph={{
    title: "Astro",
    description: "Astro",
    url: "https://google.com",
    type: "website",
    siteName: "Astro SEO Kit",
    locale: "en_US",
    image: {
      url: "https://google.com/og-image.png",
      alt: "Astro SEO Kit Open Graph Image"
    }
  }}
  languageAlternative={{
    defaultLanguage: "en",
    languages: ['en', 'es', 'fr'],
  }}
  schema={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Astro SEO Kit",
    "url": "https://google.com",
    "sameAs": [
      "https://www.facebook.com/google",
      "https://www.twitter.com/google",
      "https://www.linkedin.com/company/google"
    ]
  }}
/>
```

<br />

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
/>

<pre align="center">
  <a href="#top">BACK TO TOP</a>
</pre>

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
/>

<pre align="center">
  Copyright © All rights reserved,
  developed by LuisdaByte and
</pre>
<div align="center">
  <img src="./.github/asset/illustration/astralys_logo.svg" width="120px" align="center" />
</div>

<img src="./.github/asset/illustration/wave_footer.svg" width="100%" />