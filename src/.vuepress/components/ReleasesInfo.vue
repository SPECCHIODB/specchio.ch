<template>
<div class="card">

    <div class="card-content">

      <!-- Title -->
      <p class="title is-2">{{ release.name }}</p>
      <p class="subtitle is-6 is-spaced">{{ date }}</p>

      <!-- Downloads -->
      <div class="title is-3">Downloads</div>

      <ul>
        <li>
          <a :href="downloadClientLink">
            <font-awesome :icon="['fas', 'desktop']"/>

            <span>
              specchio-installer.jar
            </span>
          </a>
        </li>
        <li>
          <a :href="downloadVMLink">
            <font-awesome :icon="['fas', 'box-open']"/>

            <span>
              specchio-centos-7.6-vbox-x86_64.ova
            </span>
          </a>
        </li>
        <li>
          <a :href="downloadWebappLink">
            <font-awesome :icon="['fas', 'server']"/>

            <span>
              webapp.war
            </span>
          </a>
        </li>
      </ul>

      <!-- Changelog -->
      <template v-if="changelog">
        <div class="title is-3">Changelog</div>
        <p
          class="release-changelog"
          v-html="changelog"/>
      </template>

    </div>

  </div>
</template>

<script>
import moment from 'moment'
import filesize from 'filesize'
import RELEASE from '@dynamic/release'
const md = require('markdown-it')()

export default {
  computed: {
    release () {
      return RELEASE
    },
    date () {
      if (!this.release.created_at) return
      return moment(this.release.created_at).format('LL')
    },
    changelog () {
      if (!this.release.body) return
      return md.render(this.release.body)
    },
    downloadClientLink () {
      const jenkinsUrl = this.$site.themeConfig.jenkinsUrl
      return `${jenkinsUrl}/SPECCHIO/lastSuccessfulBuild/artifact/src/client/build/distributions/specchio-installer.jar`
    },
    downloadVMLink () {
      const jenkinsUrl = this.$site.themeConfig.jenkinsUrl
      return `${jenkinsUrl}/VM_Appliance/lastSuccessfulBuild/artifact/output-virtualbox-iso/specchio-centos-7.6-vbox-x86_64.ova`
    },
    downloadWebappLink () {
      const jenkinsUrl = this.$site.themeConfig.jenkinsUrl
      return `${jenkinsUrl}/SPECCHIO/lastSuccessfulBuild/artifact/src/webapp/build/libs/src/webapp-3.3.0.war`
    }
  },

  methods: {
    filesize (size) {
      return filesize(size)
    }
  }
}
</script>

<style lang="scss">
.release-changelog {
  h1 {
    font-size: 1.4em;
    margin-bottom: 0.2em;
  }

  h2 {
    font-size: 1em;
    margin-bottom: 0.2em;
  }

  ul {
    margin-top: 0.2em;
    margin-bottom: 0.2em;
  }
}
</style>

<style lang="scss" scoped>
.subtitle {
  margin-top: -1.75rem !important;
}
</style>
