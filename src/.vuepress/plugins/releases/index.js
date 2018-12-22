const Vue = require('vue')
const request = require('sync-request')

let apiResonse = {
  "url": "https://api.github.com/repos/rhwilr/vue-nestable/releases/14556930",
  "assets_url": "https://api.github.com/repos/rhwilr/vue-nestable/releases/14556930/assets",
  "upload_url": "https://uploads.github.com/repos/rhwilr/vue-nestable/releases/14556930/assets{?name,label}",
  "html_url": "https://github.com/rhwilr/vue-nestable/releases/tag/1.0.0",
  "id": 14556930,
  "node_id": "MDc6UmVsZWFzZTE0NTU2OTMw",
  "tag_name": "1.0.0",
  "target_commitish": "master",
  "name": "v1.0.0",
  "draft": false,
  "author": {
  "login": "rhwilr",
  "id": 4346833,
  "node_id": "MDQ6VXNlcjQzNDY4MzM=",
  "avatar_url": "https://avatars0.githubusercontent.com/u/4346833?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rhwilr",
  "html_url": "https://github.com/rhwilr",
  "followers_url": "https://api.github.com/users/rhwilr/followers",
  "following_url": "https://api.github.com/users/rhwilr/following{/other_user}",
  "gists_url": "https://api.github.com/users/rhwilr/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rhwilr/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rhwilr/subscriptions",
  "organizations_url": "https://api.github.com/users/rhwilr/orgs",
  "repos_url": "https://api.github.com/users/rhwilr/repos",
  "events_url": "https://api.github.com/users/rhwilr/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rhwilr/received_events",
  "type": "User",
  "site_admin": false
  },
  "prerelease": false,
  "created_at": "2018-12-16T10:25:49Z",
  "published_at": "2018-12-16T10:27:42Z",
  "assets": [],
  "tarball_url": "https://api.github.com/repos/rhwilr/vue-nestable/tarball/1.0.0",
  "zipball_url": "https://api.github.com/repos/rhwilr/vue-nestable/zipball/1.0.0",
  "body": ":tada: I'm proud to announce that version 1.0 has landed. :tada: \r\n\r\nNo changes since the last beta release, but if you are upgrading from a 0.x release, please note that the polyfill for the [experimental support](https://github.com/vuejs/vue/pull/7765) for binding scopedSlots was removed. See [Installation](https://github.com/rhwilr/vue-nestable#installation) for details on how to import the component."
  }

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