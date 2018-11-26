<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">

        <!-- Logo -->
        <router-link
          :to="$localePath"
          class="navbar-item">
          <img
            class="logo"
            v-if="$site.themeConfig.logo"
            :src="$withBase($site.themeConfig.logo)"
            :alt="$siteTitle">
          <span
            ref="siteName"
            class="site-name"
            v-if="$siteTitle"
            :class="{ 'is-invisible': $site.themeConfig.logo }">
            {{ $siteTitle }}
          </span>
        </router-link>

        <!-- Burger Menu -->
        <span 
          class="navbar-burger burger"
          @click="toggleNavbar">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div
        :class="{'is-active': isActive}"
        class="navbar-menu">

        <div class="navbar-end">

          <!-- Search -->
          <nav-search/>

          <!-- Navigation Links -->
          <nav-links/>
        </div>
      </div>


    </div>
  </nav>
</template>

<script>
import NavLinks from './NavLinks.vue'
import NavSearch from './NavSearch.vue'

export default {
  components: { NavLinks, NavSearch },

  data () {
    return {
      isActive: false
    }
  },

  methods: {
    toggleNavbar () {
      this.isActive = !this.isActive
    }
  }
}
</script>
