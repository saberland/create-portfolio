<template>
  <a
    class="card"
    :href="`https://github.com/topics/${skill.topic}`"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      class="skill-cover"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="skill-description">
      {{ skill.description }}
    </div>
  </a>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  },

  computed: {
    image() {
      return (
        this.skill.image ||
        `https://cdn.jsdelivr.net/gh/github/explore/topics/${this.skill.topic}/${this.skill.topic}.png`
      )
    }
  }
}
</script>

<style scoped>
.skill-cover {
  height: 130px;
  background-size: 60px;
  background-position: center;
  background-repeat: no-repeat;
}

.skill-description {
  color: var(--text-color-light);
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
}
</style>
