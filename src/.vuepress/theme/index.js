const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  extend: '@vuepress/theme-default',
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/search'
  ]
})