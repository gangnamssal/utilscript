import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'UtilScript',
  tagline: 'TypeScript를 위한 다양한 유틸리티 타입과 함수를 제공하는 라이브러리',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.utilscript.site',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gangnamssal', // Usually your GitHub org/user name.
  projectName: 'utilScript', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: 'UtilScript',
        url: 'https://www.utilscript.site/',
        logo: 'https://www.utilscript.site/img/logo.png',
      }),
    },
  ],

  themeConfig: {
    metadata: [
      {
        name: 'title',
        content: 'utility library for TypeScript | UtilScript',
      },
      {
        name: 'description',
        content:
          'TypeScript를 위한 다양한 유틸리티 타입과 함수를 제공하는 라이브러리로, 타입 조작과 유니온, 인터섹션 등 고급 타입 기능을 쉽게 활용할 수 있습니다.',
      },

      // Open Graph
      {
        property: 'og:title',
        content: 'utility library for TypeScript | UtilScript',
      },
      {
        property: 'og:description',
        content:
          'TypeScript를 위한 다양한 유틸리티 타입과 함수를 제공하는 라이브러리로, 타입 조작과 유니온, 인터섹션 등 고급 타입 기능을 쉽게 활용할 수 있습니다.',
      },
      {
        property: 'og:image',
        content: 'https://www.utilscript.site/img/logo.png',
      },
      {
        property: 'og:url',
        content: 'https://www.utilscript.site/',
      },
      {
        property: 'og:type',
        content: 'website',
      },

      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'utility library for TypeScript | UtilScript',
      },
      {
        name: 'twitter:description',
        content:
          'TypeScript를 위한 다양한 유틸리티 타입과 함수를 제공하는 라이브러리로, 타입 조작과 유니온, 인터섹션 등 고급 타입 기능을 쉽게 활용할 수 있습니다.',
      },
      {
        name: 'twitter:image',
        content: 'https://www.utilscript.site/img/logo.png',
      },
    ],
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'UtilScript',
      logo: {
        alt: 'UtilScript Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Docs',
        },
        {
          href: 'https://github.com/gangnamssal/utilScript',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Array(A)',
              to: '/docs/category/arraya',
            },
            {
              label: 'Commonness(C)',
              to: '/docs/category/commonnessc',
            },
            {
              label: 'Function(F)',
              to: '/docs/category/functionf',
            },
            {
              label: 'Object(O)',
              to: '/docs/category/objecto',
            },
            {
              label: 'Primitive(P)',
              to: '/docs/category/primitivep',
            },
            {
              label: 'String(S)',
              to: '/docs/category/strings',
            },
            {
              label: 'Union(U)',
              to: '/docs/category/unionu',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/tommy971013/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gangnamssal',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.naver.com/24691116',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UtilScript. Made by gangnamssal.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
