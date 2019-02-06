<template>
  <span 
    ref="email"
    class="email-address"/>
</template>

<script>
import EmailObfuscate from 'email-obfuscate'

export default {
  props: {
    name: {
      type: String,
      require: true,
      default: null
    },
    domain: {
      type: String,
      require: true,
      default: null
    },
    tld: {
      type: String,
      require: true,
      default: null
    }
  },

  mounted () {
    console.log(this.$refs.email)

    EmailObfuscate(this.$refs.email, {
      name: this.name,
      domain: this.domain,
      tld: this.tld,
      // Alternate Text
      altText: 'Email'
    })
  }
}
</script>

<style>
.email-address {
  vertical-align: middle;
  display: inline-block;
}
</style>
