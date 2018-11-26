<template>
  <div>

    <section class="hero is-info is-medium is-bold">
      <div class="hero-head">

          <navbar/>
          
      </div>
      <div class="hero-body">
          <div class="container has-text-centered">
              <h1 class="title">
              The new standard in &lt;insert industry here&gt;
              </h1>
              <h2 class="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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