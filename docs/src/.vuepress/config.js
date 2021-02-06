const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'The Software Source',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Products',
        link: '/products/lists',
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Contact Us',
        link: '/contact-us/'
      },
      {
        text: 'Download',
        link: 'http://tss.net.in/download/'
      }
    ],
    sidebar: [
        '/products/lists',
      '/career',  '/contact-us'
  ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          let d =  new Date(timestamp).toLocaleDateString("en-IN")
          let t = new Date(timestamp).toLocaleTimeString("en-IN")
          return d + " " + t;
        }
      }
    ],
  ]
}
