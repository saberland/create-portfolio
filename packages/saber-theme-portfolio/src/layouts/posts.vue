<template>
  <div class="wrap">
    <div class="container">
      <HomeProfile />
      <div class="main">
        <div class="columns">
          <div class="column is-8">
            <h2 v-if="page.tag" class="page-title">
              <HashIcon />
              {{ page.tag }}
            </h2>
            <h2 v-else-if="page.attributes.title" class="page-title">
              {{ page.attributes.title }}
            </h2>
            <div v-if="page.posts" class="page-content">
              <div class="columns is-multiline">
                <div
                  v-for="post in page.posts"
                  :key="post.attributes.permalink"
                  class="column is-12"
                >
                  <PostCard :post="post" :fixed-excerpt-height="false" />
                </div>
              </div>
              <div v-if="page.pagination" class="pagination">
                <saber-link
                  v-if="page.pagination.hasPrev"
                  class="prev-link"
                  :to="page.pagination.prevLink"
                >
                  <ChevronLeftIcon />Prev
                </saber-link>
                <saber-link
                  v-if="page.pagination.hasNext"
                  class="next-link"
                  :to="page.pagination.nextLink"
                >
                  Next
                  <ChevronRightIcon />
                </saber-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon, HashIcon } from 'vue-feather-icons'
import HomeProfile from '../components/HomeProfile.vue'
import PostCard from '../components/PostCard.vue'

export default {
  components: {
    HomeProfile,
    PostCard,
    ChevronLeftIcon,
    ChevronRightIcon,
    HashIcon
  },

  props: ['page'],

  head() {
    return {
      title: `${this.pageTitle} - ${this.$siteConfig.title}`,
      meta: [
        {
          property: 'og:title',
          content: this.$siteConfig.title,
        },
        {
          property: 'og:description',
          content: this.$siteConfig.description,
        },
        {
          property: 'og:image',
          content: this.$themeConfig.profilePicture,
        },
      ]
    }
  },

  computed: {
    pageTitle() {
      return this.page.attributes.title || this.page.tag
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;

  & > a {
    display: flex;
    align-items: center;
    color: var(--text-color-lighter);

    &:hover {
      color: var(--text-color);
    }

    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  & svg {
    width: 1rem;
    height: 1rem;
  }
}
</style>
