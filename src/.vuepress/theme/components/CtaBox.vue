<template>
  <div 
    v-if="$site.themeConfig.cta"
    class="box cta">
      <p class="has-text-centered">
          <span class="tag is-primary">
              {{$site.themeConfig.cta.label}}
          </span>
          <span v-html="$site.themeConfig.cta.text"/>
      </p>
  </div>
</template>

<script>
export default {

}
</script>