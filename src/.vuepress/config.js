module.exports = {
  title: 'SPECCHIO',
  description: 'Spectral Information System',

  plugins: [
    '@vuepress/medium-zoom',
    require('./plugins/releases')
  ],

  head: [
    ['link', { rel: 'apple-touch-icon', size: '180x180', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'icon', type: 'image/png', size: '32x32', href: `/icons/favicon-32x32.png` }],
    ['link', { rel: 'icon', type: 'image/png', size: '16x16', href: `/icons/favicon-16x16.png` }],
    ['link', { rel: 'manifest', href: `/icons/site.webmanifest` }],
    ['link', { rel: 'mask-icon', color: '#5bbad5', href: `/icons/safari-pinned-tab.svg` }],
    ['link', { rel: 'shortcut icon', href: `/icons/favicon.ico` }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'msapplication-config', content: '/icons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],

  themeConfig: {
    // logo: 'http://specchio.ch/SPECCHIO_Icon_Mid_Res.jpg',
    backgroundImages: [
      {
        src: '/backgrounds/pexels-photo-286588-min.jpeg'
      },
      {
        src: '/backgrounds/pexels-photo-235732-min.jpeg'
      },
      {
        src: '/backgrounds/pexels-photo-753869-min.jpeg'
      },
      {
        src: '/backgrounds/pexels-photo-207960-min.jpeg'
      },
      {
        src: '/backgrounds/pexels-photo-920161-min.jpeg'
      },
      {
        src: '/backgrounds/pexels-photo-1619540-min.jpeg'
      }
    ],
    search: false,
    showCta: true,
    showCtaForDays: 30,
    githubUrl: 'https://github.com/SPECCHIODB/SPECCHIO',
    jenkinsUrl: 'https://jenkins.winpat.ch/job/SPECCHIO',
    locales: {
      '/': {
        label: 'English',
        nav: require('./nav/en')
      },
    }
  }
}