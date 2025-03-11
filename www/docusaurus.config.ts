import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'UtilScript',
  tagline: 'A utility library for TypeScript',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
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

  themeConfig: {
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
