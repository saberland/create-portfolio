<template>
  <div class="wrap">
    <div class="container">
      <HomeProfile />
      <div class="main">
        <div class="columns">
          <div class="column is-8">
            <h2 class="page-title">
              {{ page.attributes.title }}
            </h2>
            <div class="page-content">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeProfile from '../components/HomeProfile.vue'

export default {
  components: {
    HomeProfile
  },

  props: ['page'],

  head() {
    return {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`
    }
  }
}
</script>
