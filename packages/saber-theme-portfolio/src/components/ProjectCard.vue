<template>
  <a :href="project.url" class="card project" target="_blank">
    <div class="project-title">{{ project.name }}</div>
    <div class="project-description">{{ project.description }}</div>
    <div class="project-meta">
      <span v-if="project.language" class="project-language">
        <CodeIcon />
        {{ project.language }}
      </span>
      <span class="project-stars">
        <StarIcon />
        {{ project.stars }}
      </span>
    </div>
  </a>
</template>

<script>
import { CodeIcon, StarIcon } from 'vue-feather-icons'

export default {
  components: {
    CodeIcon,
    StarIcon
  },

  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.project-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.project-description {
  margin-bottom: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.project-meta {
  display: flex;
}

.project-meta > span {
  display: flex;
  align-items: center;

  & svg {
    width: 1rem;
    height: 1rem;
    margin-right: 5px;
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
