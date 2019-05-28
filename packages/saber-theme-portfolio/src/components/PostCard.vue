<template>
  <saber-link class="post" :to="post.attributes.permalink">
    <div class="post-title">
      {{ post.attributes.title }}
    </div>
    <PostMeta :attributes="post.attributes" />
    <div
      class="post-excerpt"
      :class="{ 'fixed-height': fixedExcerptHeight }"
      v-html="getExcerpt(post.excerpt)"
    />
  </saber-link>
</template>

<script>
import PostMeta from './PostMeta.vue'

export default {
  components: {
    PostMeta
  },

  props: {
    post: {
      type: Object,
      required: true
    },
    fixedExcerptHeight: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    getExcerpt(excerpt) {
      const limit = 240
      return excerpt.length > limit ? `${excerpt.slice(0, limit)}...` : excerpt
    }
  }
}
</script>

<style scoped>
.post {
  display: block;
  padding: 20px;
  border-radius: 3px;
  color: var(--text-color);
  background-color: var(--card-bg);

  &:hover {
    box-shadow: inset 0 0 0 1px var(--border-color);
  }
}

.post-title {
  margin-bottom: 5px;
  font-size: 1.4rem;
  line-height: 1.4;
}

.post-excerpt.fixed-height {
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
}

/deep/ .post-excerpt > *:first-child {
  margin-top: 0;
}

/deep/ .post-excerpt > *:last-child {
  margin-bottom: 0;
}
</style>
