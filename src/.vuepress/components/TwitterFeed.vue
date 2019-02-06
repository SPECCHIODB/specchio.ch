<template>
  <div class="twitter-feed">

    <!-- Show a button to agree to gdpr -->
    <div 
      v-if="hideTwitter"
      class="twitter-gdpr">
      <h3>Twitter Timeline</h3>
      <p>
        In order to show the Twitter Timeline, you need to agree to Twitters 
        <a href="https://gdpr.twitter.com/en/faq.html" target="_blank">GDPR Privacy Policy</a>.
      </p>

      <div class="button" @click="acceptTwitterGDPR">I accept, show me the timeline</div>
    </div>

    <!-- Show twitter -->
    <Timeline
      v-else
      id="SPECCHIO_DB" 
      sourceType="profile" 
      :options="{ tweetLimit: '3' }"/>

  </div>  
</template>

<script>
import { Timeline } from 'vue-tweet-embed'

export default {
  components: {
    Timeline
  },

  computed: {
    hideTwitter () {
      return this.$site.themeConfig.forceGdprForTwitterFeed && !this.agreedToTwitterGDPR
    }
  },

  data () {
    return {
      agreedToTwitterGDPR: false
    }
  },

  methods: {
    acceptTwitterGDPR () {
      this.agreedToTwitterGDPR = true
    }
  }
}
</script>
