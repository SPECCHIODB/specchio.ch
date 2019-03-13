<template>
  <div class="download-link">
    <a 
      :href="link"
      target="_blank"
      rel="noopener noreferrer">

      <font-awesome
        :icon="['fas', icon]"/>
      
      <span>
        {{ name }}
      </span>

    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      require: true,
      default: null
    },
    name: {
      type: String,
      require: true,
      default: null
    },
    icon: {
      type: String,
      require: true,
      default: 'file-pdf'
    }
  }
}
</script>
