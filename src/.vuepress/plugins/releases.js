const Vue = require('vue')
const request = require('sync-request')

function getRelease (githubApiUrl) {
  // Request the latest release from the github repository
  try {
    const res = request('GET', `${githubApiUrl}/releases/latest`, {
      headers: {
        'user-agent': 'vuepress',
      }
    }).getBody('utf8')

    return res
  } catch (e) {
    return JSON.stringify({})
  }
}

module.exports = (options, context) => {
  return {
    clientDynamicModules() {
      const { themeConfig } = require('../config.js')
      const release = getRelease(themeConfig.githubApiUrl)

      return {
        name: 'release.js',
        content: `module.exports = ${release}`
      }
    }
  }
}
