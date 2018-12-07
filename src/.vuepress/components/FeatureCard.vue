<template>
  <!-- Render Relative Link -->
  <router-link 
    v-if="!absolute"
    :to="to">
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

  <!-- Render Absolute Link -->
  <a 
    v-else
    :href="to">
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
  </a>
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
  }
}
</script>
