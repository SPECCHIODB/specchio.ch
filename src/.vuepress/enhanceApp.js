import { library } from '@fortawesome/fontawesome-svg-core'
import { faDatabase, faBook, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  library.add(faDownload)
  library.add(faDatabase)
  library.add(faBook)
  Vue.component('font-awesome', FontAwesomeIcon)
}