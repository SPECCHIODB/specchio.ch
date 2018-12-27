<template>
  <div 
    v-if="showCta"
    class="box cta">
      <p class="has-text-centered">
          <span class="tag is-primary">
             New
          </span>
          <span v-html="text"/>
      </p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  computed: {
    showCta () {
      return this.$site.themeConfig.showCta && this.recentlyReleased
    },
    recentlyReleased () {
      if (!this.release.created_at) return false
      return moment(this.release.created_at).add(this.$site.themeConfig.showCtaForDays, 'days').isAfter()
    },
    release () {
      return this.$page.release
    },
    version () {
        return this.release.name
    },
    text () {
      return `Specchio Client ${this.version} is now available for <a href="/downloads/">download</a>.`
    }
  }
}
</script>