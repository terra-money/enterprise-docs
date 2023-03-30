// @ts-check
const lightCodeTheme = require("./light.theme.js");
const darkCodeTheme = require("./dark.theme.js");
const theme = require("shiki/themes/material-default.json");
const { remarkCodeHike } = require("@code-hike/mdx");
/** @type {import('@docusaurus/types').Config} */
module.exports = async function config() {
  const math = (await import("remark-math")).default;
  const katex = (await import("rehype-katex")).default;
  return {
    title: "Enterprise Docs",
    tagline: "The official docs for Enterprise",
    url: "https://docs.enterprise.money",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "terra-money", // Usually your GitHub org/user name.
    projectName: "enterprise-docs", // Usually your repo name.
    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },
    plugins: [
      'docusaurus-plugin-sass', 
    [
      require.resolve("@gabrielcsapo/docusaurus-plugin-matomo"),
      {
        siteId: "4",
        matomoUrl: "https://terradocs.matomo.cloud/",
        siteUrl: "https://docs.enterprise.money",
      },
    ],
  ],
    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            beforeDefaultRemarkPlugins: [
              [
                remarkCodeHike,
                {
                  theme,
                  lineNumbers: true,
                  showCopyButton: true,
                  staticMediaQuery: "not screen, (max-width: 768px)",
                },
              ],
              math,
            ],
            rehypePlugins: [katex],
            sidebarPath: require.resolve("./sidebars.js"),
            routeBasePath: "/", // Serve the docs at the site's root
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: "https://github.com/terra-money/enterprise-docs/blob/main/",
          },
          blog: false,
          theme: {
            customCss: [
              require.resolve("@code-hike/mdx/styles.css"),
              require.resolve("./src/styles/main.scss"),
              require.resolve("katex/dist/katex.min.css"),
            ],
          },
        }),
      ],
    ],
    themes: ["mdx-v2"],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/banner.png',
        docs: {
          sidebar: {
            hideable: false,
            autoCollapseCategories: false,
          },
        },
        // algolia:{
        //   appId: 'Z6EOSIPZCY',
        //   apiKey: '532be63cd62ff0e733ccd844e799e8bb',
        //   indexName: 'terra-project',
        //   contextualSearch: true,
        // },
        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 4,
        },
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        navbar: {
          logo: {
            alt: "Enterprise Docs",
            src: "img/enterprise.svg",
            srcDark: "img/enterprise.svg",
          },
          items: [
            {
              href: "https://enterprise.money/", //front-end URL
              position: "right",
              label: "Enterprise App",
              className: "header-terra-link",
              "aria-label": "Enterprise App",
            },
            {
              href: "https://github.com/terra-money/enterprise-docs",
              position: "right",
              className: "header-github-link",
              "aria-label": "GitHub repository",
            },
          ],
        },
        footer: {},
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
      stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity:
            'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
      ],
  };
};
