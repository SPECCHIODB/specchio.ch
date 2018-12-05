<template>
  <router-link :to="to">
    <div class="card is-shady feature-card">
      <div class="card-image has-text-centered">
        <font-awesome :icon="icon"/>
      </div>
      <div class="card-content">
        <div class="content">
          <slot/>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: null
    },
    icon: {
      type: Array,
      required: false,
      default: null
    },
  }
}
</script>
