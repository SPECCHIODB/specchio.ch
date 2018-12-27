const Vue = require('vue')
const request = require('sync-request')

let apiResonse = null

async function getRelease (githubUrl) {
  // reqeust the latest release from the github repository
  const res = request('GET', `${githubUrl}/releases/latest`, {
    headers: {
      'user-agent': 'vuepress',
    }
  })

  // save the response to the cache variable
  apiResonse = JSON.parse(res.getBody('utf8'))

  return apiResonse
}

module.exports = (options, ctx) => {
  return {  
    extendPageData ($page) {
      // use the cached response or request it from the api
      const release = apiResonse || getRelease($page._context.themeConfig.githubUrl)

      $page.release = release
    }
  }
}