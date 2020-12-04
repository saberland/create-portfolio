<template>
  <div class="text-input">
    <label>{{ label }}</label>
    <input :type="type" :name="name" required />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.text-input {
  padding-bottom: 20px;
}
label {
  font-size: 20px;
}
input {
  display: block;
  width: 300px;
  padding: 10px;
  border: 1px solid var(--hover-border-color);
  border-radius: 3px;
  background: var(--card-bg);
  color: var(--text-color);
}
input:focus {
  outline: 1px solid var(--hover-border-color);
}
</style>
