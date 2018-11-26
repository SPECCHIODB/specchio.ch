<template>
  <div
    v-if="$site.themeConfig.search !== false"
    class="nav-search-box">

    <SearchBox    
      class="navbar-end"/>

  </div>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  components: {SearchBox}
}
</script>