<template>
  <div class="post-meta">
    <span class="post-date">
      <CalendarIcon />
      {{ getDate(attributes.createdAt) }}
    </span>
  </div>
</template>

<script>
import { CalendarIcon } from 'vue-feather-icons'

export default {
  components: {
    CalendarIcon
  },

  props: {
    attributes: {
      type: Object,
      required: true
    }
  },

  methods: {
    getDate(date) {
      const d = new Date(date)
      return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
    }
  }
}
</script>

<style scoped>
.post-meta {
  margin-bottom: 5px;
  color: var(--text-color-lighter);

  & > span {
    display: flex;
    align-items: center;

    & svg {
      width: 0.875rem;
      margin-right: 5px;
    }
  }
}
</style>
