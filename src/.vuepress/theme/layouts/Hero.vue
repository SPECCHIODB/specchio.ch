<template>
  <div class="layout layout-hero">

    <section class="hero is-dark is-medium is-bold heading-hero">
      <!-- Background image based on the current date -->
      <div 
        :style="backgroundImageStyle"
        class="hero-background"/>
      
      <!-- Navigation -->
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
    <div class="content-container">
      <Content class="container"/>
    </div>


    <!-- Content -->
    <div class="twitter-container">
      <Content 
        slot-key="twitter"
        class="container"/>
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
    components: { CtaBox, Navbar, PageFooter },

    computed: {
      /**
       * Get the image object for the day
       */
      backgroundImage () {
        // get all images from the congig
        let images = this.$themeConfig.backgroundImages

        // grab one image and use the current date as the index
        // this way we get a new image each day
        let index = new Date().getDate() % images.length
        return images[index]
      },

      /**
       * Constructs the style object for the background image
       */
      backgroundImageStyle () {
        return {
          'background-image': `url(${this.backgroundImage.src})`
        }
      }
    }
}
</script>

<style src="../styles/theme.scss" lang="scss"></style>