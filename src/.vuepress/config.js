module.exports = {
  title: 'SPECCHIO',
  description: 'Spectral Information System',

  plugins: [
    '@vuepress/medium-zoom',
  ],

  themeConfig: {
    // logo: 'http://specchio.ch/SPECCHIO_Icon_Mid_Res.jpg',
    backgroundImages: [
      {
        src: '/pexels-photo-286588-min.jpeg'
      },
      {
        src: '/pexels-photo-235732-min.jpeg'
      },
      {
        src: '/pexels-photo-753869-min.jpeg'
      },
      {
        src: '/pexels-photo-207960-min.jpeg'
      },
      {
        src: '/pexels-photo-920161-min.jpeg'
      },
      {
        src: '/pexels-photo-1619540-min.jpeg'
      }
    ],
    search: false,
    cta: {
      label: 'New',
      text: 'Specchio Client v3.5.0 is now available for <a href="/downloads/">download</a>.'
    },
    locales: {
      '/': {
        label: 'English',
        nav: require('./nav/en')
      },
    }
  }
}