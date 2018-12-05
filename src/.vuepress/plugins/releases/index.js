const changelog1 = `
## Added
- Includes can now be requested with underscores and hyphens as the separator and will be converted to camelCase

## Fixed
- Ensure that pagination data is always an integer by explicitly casting pages to Numbers
`

const changelog2 = `
## Fixed
- **compiler**: wrap scoped slots v-if conditions in parens (#9119) ef8524a, closes #9119 #9114
- **compiler**: maybeComponent should return true when "is" attribute exists (#8114) aef2a5f, closes #8114 #8101
- **compiler**: normalize potential functional component children in v-for (#8558) d483a49, closes #8558 #8468
- **compiler**: should keep newline after unary tags in <pre> (#8965) 05001e6, closes #8965 #8950
- **compiler**: templates inside v-pre should be rendered to HTML (#8146) ecac831, closes #8146 #8041
- **component**: clean up memory leak after loading async component completes (fix #8740) (#8755) 2e472c5, closes #8740 #8755
- **core**: avoid mutating original children when cloning vnode 097f622, closes #7975
- **core**: properly handle reused vnodes 530ca1b, closes #7913
- **core**: skip mixins and extends if child is already merged (#8870) 80f17fa, closes #8870 #8865
`

function getReleasesList () {
  return [
    {
      version: '3.3.1',
      date:    new Date(),
      changelog: changelog2,
      assets: [
        {
          type: 'vm',
          name: 'VirtualBoxVM_3.3.1',
          url: 'ftp://v473.vanager.de/SPECCHIO-3.3.0.0-VM.ova',
          size: 4568972564
        }, {
          type: 'client',
          name: 'ClientInstaller_3.3.1',
          url: 'ftp://v473.vanager.de/specchio-client-installer-generic-3.3.0.1.zip',
          size: 21516483
        }
      ]
    },
    {
      version: '3.3.0',
      date:    new Date(),
      changelog: changelog1,
      assets: [
        {
          type: 'vm',
          name: 'VirtualBoxVM_3.3.0',
          url: 'ftp://v473.vanager.de/SPECCHIO-3.3.0.0-VM.ova',
          size: 4768972564
        }, {
          type: 'client',
          name: 'ClientInstaller_3.3.0',
          url: 'ftp://v473.vanager.de/specchio-client-installer-generic-3.3.0.1.zip',
          size: 21614833
        }
      ]
    }
  ]
}

module.exports = (options, ctx) => {
  return {

    /**
     * Inject the releases array in to the page.
     */
    extendPageData ($page) {
      $page.releases = getReleasesList()
    },

    async ready() {
      console.log('hello fron releases')
    }
  }
}