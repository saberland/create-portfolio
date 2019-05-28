<template>
  <div class="wrap">
    <div class="container">
      <HomeProfile />
      <div class="main">
        <HomeProjects :projects="$themeConfig.projects" />
        <HomePosts v-if="page.posts" id="posts" :posts="page.posts" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeProjects from '../components/HomeProjects.vue'
import HomePosts from '../components/HomePosts.vue'
import HomeProfile from '../components/HomeProfile.vue'

export default {
  components: {
    HomeProjects,
    HomePosts,
    HomeProfile
  },

  props: ['page'],

  head() {
    return {
      title: this.$siteConfig.title
    }
  }
}
</script>
