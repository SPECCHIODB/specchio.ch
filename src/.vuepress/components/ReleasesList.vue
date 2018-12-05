<template>
  <div>

    <release 
      v-for="(release, index) in $page.releases"
      :key="index"
      :release="release"
      />

  </div>  
</template>

<script>
export default {
  data () {
    return {      
    }
  }
}
</script>
