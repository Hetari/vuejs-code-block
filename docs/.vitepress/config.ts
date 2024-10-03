import { defineConfig } from 'vitepress';

const currentYear = new Date().getFullYear();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vuejs-code-block/',
  lang: 'en-US',
  title: 'Vuejs Code Block',
  description: 'Unstyled UI components to build powerful code blocks in Vue3',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      {
        text: 'Home',
        link: '/',
        activeMatch: '/home',
        target: '_self',
        rel: 'noopener'
      },
      { text: 'Guide', link: '/get-started' },
      // {
      //   text: 'Changelog',
      //   items: [{ text: 'v0.0.1', link: '/' }]
      // }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/hetari/vuejs-code-block'
      },
      {
        icon: 'x',
        link: 'https://x.com/4hetari'
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/4hetari'
      },
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/package/vuejs-code-block'
      }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          {
            text: 'Get Started',
            link: '/get-started'
          },
          {
            text: 'Why',
            link: '/why'
          }
        ]
      },
      {
        text: 'Components',
        collapsed: true
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright ©${currentYear}-present Hetari`
    }
  }
});
