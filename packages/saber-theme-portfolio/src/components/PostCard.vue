<template>
  <saber-link class="post post-card" :to="post.attributes.permalink">
    <div v-if="post.attributes.assets.cover" class="post-cover">
      <img
        class="post-cover__image"
        :src="post.attributes.assets.cover"
        alt="cover"
      />
    </div>
    <div class="card">
      <div class="post-title">
        {{ post.attributes.title }}
      </div>
      <div
        class="post-excerpt"
        :class="{ 'fixed-height': fixedExcerptHeight }"
        v-html="getExcerpt(post.excerpt)"
      />
      <PostMeta :attributes="post.attributes" />
    </div>
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
      // Strip HTML
      excerpt = excerpt.replace(/<(?:.|\n)*?>/gm, '')
      return excerpt.length > limit ? `${excerpt.slice(0, limit)}...` : excerpt
    }
  }
}
</script>

<style scoped>
.post {
  &:hover {
    text-decoration: none;
  }
}

.post-title {
  margin-bottom: 10px;
  font-size: 1.4rem;
  line-height: 1.4;
}

.post-excerpt {
  margin-bottom: 10px;
}

.post-excerpt.fixed-height {
  margin-bottom: 0;
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
