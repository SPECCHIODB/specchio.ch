module.exports = {
  title: 'SPECCHIO',
  description: 'Spectral Information System',
  
  plugins: [
    '@vuepress/search',
    '@vuepress/blog'
  ],

  themeConfig: {
    // logo: 'http://specchio.ch/SPECCHIO_Icon_Mid_Res.jpg',
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