<template>
  <section class="home-section">
    <div v-if="title" class="section-title">
      {{ title }}
    </div>
    <div v-else class="section-title">
      <slot name="title" />
    </div>
    <div class="section-body">
      <slot name="default" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
  props: ['title']
}
</script>

<style scoped>
.home-section:not(:last-child) {
  margin-bottom: 60px;
}

.section-title {
  font-size: 1.6rem;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 10px;
  }
}
</style>
