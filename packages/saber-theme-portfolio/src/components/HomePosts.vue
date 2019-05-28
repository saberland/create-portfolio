<template>
  <home-section>
    <template #title>
      <Edit3Icon />Posts
    </template>
    <div class="columns is-multiline">
      <div
        v-for="post in posts"
        :key="post.attributes.permalink"
        class="column is-half"
      >
        <PostCard :post="post" />
      </div>
    </div>
    <saber-link class="view-all" to="/posts">
      View all<ChevronRightIcon />
    </saber-link>
  </home-section>
</template>

<script>
import { Edit3Icon, ChevronRightIcon } from 'vue-feather-icons'
import PostCard from './PostCard.vue'

export default {
  components: {
    Edit3Icon,
    PostCard,
    ChevronRightIcon
  },

  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.view-all {
  display: inline-flex;
  align-items: center;
  color: var(--text-color-lighter);

  & svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    color: var(--text-color);
  }
}
</style>
