<template>
  <div class="twitter-feed">

    <Timeline 
      id="SPECCHIO_DB" 
      sourceType="profile" 
      :options="{ tweetLimit: '3' }"/>

  </div>  
</template>

<script>
import Timeline from 'vue-tweet-embed/timeline'

export default {
  components: {
    Timeline
  }
}
</script>
