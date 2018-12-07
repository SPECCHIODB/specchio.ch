<template>
  <div class="card">

    <div class="card-content">

      <!-- Title -->
      <p class="title is-3">{{ release.version }}</p>
      <p class="subtitle is-6 is-spaced">{{ date }}</p>

      <!-- Downloads -->
      <div class="title is-4">Downloads</div>

      <ul>
        <li
          v-for="(asset, index) in release.assets"
          :key="index">
          <a :href="asset.url">

            <!-- Icon -->
            <font-awesome 
              v-if="asset.type === 'vm'"
              :icon="['fas', 'box-open']"/>
            <font-awesome 
              v-if="asset.type === 'client'"
              :icon="['fas', 'desktop']"/>
            
            <span>
              {{ asset.name }}
            </span>
            <small>
              ({{ filesize(asset.size) }})
            </small>         
          </a>
        </li>
      </ul>

      <!-- Changelog -->
      <div class="title is-4">Changelog</div>
      <p 
        v-if="changelog"
        class="release-changelog"
        v-html="changelog"/>

    </div>

  </div>
</template>

<script>
import moment from 'moment'
import filesize from 'filesize'
const md = require('markdown-it')()

export default {
  props: {
    release: {
      type: Object,
      require: true,
      default: null
    }
  },

  computed: {
    date () {
      return moment(this.release.date).format('LL')
    },
    changelog () {
      if (!this.release.changelog) return
      return md.render(this.release.changelog)
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
