<template>
  <home-section>
    <template #title>
      <LayersIcon /> Projects
    </template>
    <div class="columns is-multiline projects">
      <div
        v-for="project in projects"
        :key="project.name"
        class="column is-half"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </home-section>
</template>

<script>
import { LayersIcon } from 'vue-feather-icons'
import ProjectCard from './ProjectCard.vue'

export default {
  components: {
    LayersIcon,
    ProjectCard
  },

  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>
