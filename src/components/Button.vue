<template>
  <button
    :style="`min-width: ${minWidth};`"
    :class="{
      'primary': type === 'primary',
      'opacity-50': type === 'secondary',
    }"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string,
  minWidth?: string,
  type?: string,
}>()
</script>

<style scoped>
button {
  outline: none;
  border: none;
  padding: 0.5rem;
  background-color: #f1f1f1;
}

button.primary {
  background-color: #4713f3;
  color: white;
}

button.primary:hover {
  outline: none;
  background-color: #4713f3bb;
}

button:hover {
  outline: none;
  background-color: whitesmoke;
}
</style>