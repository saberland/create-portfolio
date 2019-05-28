// Saber config file
// https://saber.land/docs/saber-config.html

module.exports = {
  siteConfig: {
    description: 'An unsung artist.'
  },

  // Use the package `saber-theme-portfolio`
  // More: https://saber.land/docs/themes.html
  theme: '../packages/saber-theme-portfolio/src',

  // Configure the theme
  themeConfig: {
    style: 'dark',
    github: 'egoist',
    twitter: '_egoistlily',
    sponsorLink: 'https://patreon.com/egoist',
    sponsorTip: 'Support my work',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      }
    ],
    skills: [
      {
        topic: 'nodejs',
        description: `I love Node.js and I use it every single day.`
      },
      {
        topic: 'vue',
        description: `I contribute to Vue ecosytem every a few days`
      },
      {
        topic: 'webpack',
        description: `I'm pretty good at webpack, probably`
      }
    ]
  },

  permalinks: {
    page: '/:slug',
    post: '/posts/:slug'
  },

  plugins: [
    {
      resolve: 'saber-plugin-query-posts'
    }
  ]
}
