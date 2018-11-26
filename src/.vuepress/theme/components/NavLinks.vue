<template>
  <div 
    v-if="userLinks.length || repoLink"
    class="tabs is-right">

    <!-- user links -->
    <ul>
      <nav-link 
      v-for="item in userLinks"
      :key="item.link"
      :item="item"
      />            
    </ul>

    <!-- repo link -->
    <a
      v-if="repoLink"
      :href="repoLink"
      class="repo-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ repoLabel }}
      <OutboundLink/>
    </a>
  </div>
</template>

<script src="@vuepress/theme-default/components/NavLinks.vue">
</script>