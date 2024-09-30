import { defineConfig } from 'vitepress';

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
      { text: 'Example', link: '/example' }
    ],

    sidebar: [
      {
        text: 'Example',
        items: [
          { text: 'Markdown Examples', link: '/example' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
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
    ]
  }
});
