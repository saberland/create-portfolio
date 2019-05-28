<template>
  <div class="wrap">
    <div class="container">
      <HomeProfile />
      <div class="main">
        <HomeProjects
          v-if="$themeConfig.projects"
          :projects="$themeConfig.projects"
        />
        <HomeSkills v-if="$themeConfig.skills" :skills="$themeConfig.skills" />
        <HomePosts v-if="page.posts" id="posts" :posts="page.posts" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeProjects from '../components/HomeProjects.vue'
import HomePosts from '../components/HomePosts.vue'
import HomeProfile from '../components/HomeProfile.vue'
import HomeSkills from '../components/HomeSkills.vue'

export default {
  components: {
    HomeProjects,
    HomePosts,
    HomeProfile,
    HomeSkills
  },

  props: ['page'],

  head() {
    return {
      title: this.$siteConfig.title
    }
  }
}
</script>
