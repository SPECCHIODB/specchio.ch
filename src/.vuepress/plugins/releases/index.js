const Vue = require('vue')
const request = require('sync-request')

function getRelease (githubApiUrl) {
  // reqeust the latest release from the github repository
  const res = request('GET', `${githubApiUrl}/releases/latest`, {
    headers: {
      'user-agent': 'vuepress',
    }
  }).getBody('utf8')

  // save the response to the cache variable
  if (!res) {
    apiResonse = '{}'
  } else {
    apiResonse = res
  }

  return apiResonse
}

module.exports = (options, context) => {
  return {
    clientDynamicModules() {
      const { themeConfig } = require('../../config.js')
      const release = getRelease(themeConfig.githubApiUrl)

      return {
        name: 'release.js',
        content: `module.exports = ${release}`
      }
    }
  }
}