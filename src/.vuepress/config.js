const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Netweak Docs',
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
    lastUpdated: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Plaform',
        link: '/platform/'
      },
      {
        text: 'Agent',
        link: '/agent/'
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: 'Back to Netweak',
        link: 'https://netweak.com'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'partnerships'
          ]
        }
      ],
      '/agent/': [
        {
          title: 'Agent',
          collapsable: false,
          children: [
            '',
            'debug',
            'uninstall'
          ]
        }
      ],
      '/api/': [
        {
          title: 'API',
          collapsable: false,
          children: [
            '',
            'auth',
            'teams',
            'rate-limiting'
          ]
        },
        {
          title: 'Resources',
          collapsable: false,
          children: [
            'resources/user',
            'resources/servers',
            'resources/status-pages'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
