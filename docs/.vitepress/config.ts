import { defineConfig } from 'vitepress'

const META_URL = 'https://allen-1998.github.io/pinia-plugin-persist-uni/'
const META_TITLE = 'Pinia Plugin Persist Uni'
const META_DESCRIPTION = 'Persist pinia state data in uniAppStorage.'

export default defineConfig({
  base: '/pinia-plugin-persist-uni/',
  title: META_TITLE,
  description: META_DESCRIPTION,
  lang: 'en-US',
  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:title', content: META_TITLE }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Github', link: 'https://github.com/Allen-1998/pinia-plugin-persist-uni' },
    ],

    sidebar: [
      {
        text: 'Guide',
        children: [
          {
            text: 'Install',
            link: '/',
          },
          {
            text: 'Basic Usage',
            link: '/basic-usage',
          },
          {
            text: 'Advanced Usage',
            children: [
              {
                text: 'Strategies',
                link: '/advanced/strategies',
              },
              {
                text: 'Custom storage key',
                link: '/advanced/custom-key',
              },
            ],
          },
        ],
      },
    ],
  },
})
