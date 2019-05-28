<template>
  <a :href="project.url" class="project" target="_blank">
    <div class="project-title">{{ project.name }}</div>
    <div class="project-description">{{ project.description }}</div>
    <div class="project-meta">
      <span class="project-language">
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
.project {
  display: block;
  background-color: var(--card-bg);
  border-radius: 3px;
  padding: 20px;
  color: var(--text-color-light);
  transition: transform 0.3s ease;

  &:hover {
    box-shadow: inset 0 0 0 1px var(--border-color);
  }
}

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
