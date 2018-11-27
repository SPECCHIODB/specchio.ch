<template>
  <div class="layout layout-404">

    <section class="hero is-dark is-medium is-bold heading-hero">
      <div class="hero-head">

          <navbar/>
          
      </div>    
    </section>

    <!-- CTA -->
    <cta-box/>

    <!-- Content -->
    <div class="container content-container">
      
      <!-- 404 Error Page -->
      <h1 class="title">404 - Page not found</h1>
      <h3 class="subtitle">The page you are looking for can't be found.</h3>

    </div>

    <!-- Footer -->
    <page-footer/>

  </div>
</template>

<script>
import CtaBox from '../components/CtaBox.vue'
import Navbar from '../components/Navbar.vue'
import PageFooter from '../components/PageFooter.vue'

export default {
    components: { CtaBox, Navbar, PageFooter }
}
</script>

<style src="../styles/theme.scss" lang="scss"></style>