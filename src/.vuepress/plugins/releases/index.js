const Vue = require('vue')
const request = require('sync-request')

let apiResonse = null

async function getRelease (githubApiUrl) {
  // reqeust the latest release from the github repository
  const res = request('GET', `${githubApiUrl}/releases/latest`, {
    headers: {
      'user-agent': 'vuepress',
    }
  }).getBody('utf8')

  if (!res) {
    apiResonse = {}
  } else {
    // save the response to the cache variable
    apiResonse = JSON.parse(res)
  }

  return apiResonse
}

module.exports = (options, ctx) => {
  return {  
    extendPageData ($page) {
      // use the cached response or request it from the api
      const release = apiResonse || getRelease($page._context.themeConfig.githubApiUrl)

      $page.release = release
    }
  }
}