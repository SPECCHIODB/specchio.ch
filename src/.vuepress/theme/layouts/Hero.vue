<template>
  <div class="layout-hero">

    <section class="hero is-dark is-medium is-bold heading-hero">
      <div class="hero-background"/>
      <div class="hero-head">
        
        <navbar/>
          
      </div>
      <div class="hero-body">
          <div class="container has-text-centered">
              <h1 class="title">
                {{ $frontmatter.title || $title }}
              </h1>
              <h2 class="subtitle">
                {{ $description }}                
              </h2>
          </div>
      </div>
    </section>
    
    <!-- CTA -->
    <cta-box/>

    <!-- Content -->
    <div class="container content-container">
      <Content/>
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