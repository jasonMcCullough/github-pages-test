// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lorem ipsum\'s Website',
  // tagline: '',
  url: 'https://jasonmccullough.github.io/',
  baseUrl: '/github-pages-test/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jasonMcCullough', // Usually your GitHub org/user name.
  projectName: 'github-pages-test', // Usually your repo name.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // navbar: {
      //   items: [
      //     {
      //       to: '/docs',
      //       label: '≡',
      //       position: 'left',
      //       //className: 'button button--secondary button--lg'
      //     },
      //   ],
      // }
      // navbar: {
      //   // title: 'Lorem ipsum',
      //   // logo: {
      //   //   alt: 'logo',
      //   //   src: 'img/logo.svg',
      //   // },
      //   // items: [
      //   //   // {
      //   //   //   type: 'doc',
      //   //   //   docId: 'intro',
      //   //   //   position: 'left',
      //   //   //   label: 'Tutorial',
      //   //   // },
      //   //   // {to: '/blog', label: 'Blog', position: 'left'},
      //   //   // {
      //   //   //   href: 'https://github.com/facebook/docusaurus',
      //   //   //   label: 'GitHub',
      //   //   //   position: 'right',
      //   //   // },
      //   // ],
      // },
      // footer: {
      //   style: 'dark',
      //   // links: [
      //   //   {
      //   //     title: 'Docs',
      //   //     items: [
      //   //       {
      //   //         label: 'Tutorial',
      //   //         to: '/docs/intro',
      //   //       },
      //   //     ],
      //   //   },
      //   //   {
      //   //     title: 'Community',
      //   //     items: [
      //   //       {
      //   //         label: 'Stack Overflow',
      //   //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //   //       },
      //   //       {
      //   //         label: 'Discord',
      //   //         href: 'https://discordapp.com/invite/docusaurus',
      //   //       },
      //   //       {
      //   //         label: 'Twitter',
      //   //         href: 'https://twitter.com/docusaurus',
      //   //       },
      //   //     ],
      //   //   },
      //   //   {
      //   //     title: 'More',
      //   //     items: [
      //   //       {
      //   //         label: 'Blog',
      //   //         to: '/blog',
      //   //       },
      //   //       {
      //   //         label: 'GitHub',
      //   //         href: 'https://github.com/facebook/docusaurus',
      //   //       },
      //   //     ],
      //   //   },
      //   // ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Lorem ipsum`,
      // },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
