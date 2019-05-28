<template>
  <home-section>
    <template #title>
      <CpuIcon />Skills
    </template>
    <div class="columns is-multiline">
      <div v-for="skill in skills" :key="skill.topic" class="column is-4">
        <SkillCard :skill="skill" />
      </div>
    </div>
  </home-section>
</template>

<script>
import { CpuIcon } from 'vue-feather-icons'
import SkillCard from './SkillCard.vue'

export default {
  components: {
    CpuIcon,
    SkillCard
  },

  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
