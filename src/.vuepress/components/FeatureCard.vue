<template>
  <div
    class="card is-shady feature-card"
    @click="navigation">
    <div class="card-image has-text-centered">
      <font-awesome :icon="icon"/>
    </div>
    <div class="card-content">
      <div class="content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: null
    },
    absolute: {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      type: Array,
      required: false,
      default: null
    },
  },

  methods: {
    navigation () {
      if (this.absolute) {
        return window.location.href = this.to
      }

      return this.$router.push(this.to)
    }
  }
}
</script>
