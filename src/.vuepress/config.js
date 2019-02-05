const fs = require('fs')
const backgroundsFolder = 'src/.vuepress/public/backgrounds'

const backgroundImages = fs.readdirSync(backgroundsFolder)
  .map(file => ({
    src: `/backgrounds/${file}`
  }))

module.exports = {
  title: 'SPECCHIO',
  description: 'Spectral Information System',

  plugins: [
    '@vuepress/medium-zoom',
    require('./plugins/releases')
  ],

  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/icons/favicon-32x32.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/icons/favicon-16x16.png` }],
    ['link', { rel: 'manifest', href: `/icons/site.webmanifest` }],
    ['link', { rel: 'mask-icon', color: '#5bbad5', href: `/icons/safari-pinned-tab.svg` }],
    ['link', { rel: 'shortcut icon', href: `/icons/favicon.ico` }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'msapplication-config', content: '/icons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],

  themeConfig: {
    backgroundImages,

    // Set this to true to add a search field to the header of the website
    search: false,

    // The Cta will add a notification at the top of the website if a new
    // version of the website is released.
    showCta: true,
    showCtaForDays: 30,

    // specchio webinterface url
    specchioWebinterface: 'http://v473.vanager.de:8080/SPECCHIO_Web_Interface',

    // github api url
    githubApiUrl: 'https://api.github.com/repos/SPECCHIODB/SPECCHIO',

    // Build server
    jenkinsUrl: 'https://jenkins.winpat.ch/job',

    locales: {
      '/': {
        label: 'English',
        nav: require('./nav/en')
      },
    }
  }
}