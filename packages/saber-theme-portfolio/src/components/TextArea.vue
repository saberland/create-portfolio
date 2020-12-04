<template>
  <div class="text-input">
    <label>{{ label }}</label>
    <textarea :type="type" :name="name" required />
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
textarea {
  display: block;
  resize: none;
  width: 400px;
  height: 150px;
  padding: 10px;
  border: 1px solid var(--hover-border-color);
  border-radius: 3px;
  background: var(--card-bg);
  color: var(--text-color);
}
textarea:focus {
  outline: 1px solid var(--hover-border-color);
}
</style>
