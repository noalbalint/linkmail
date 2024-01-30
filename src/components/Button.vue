<template>
  <button :style="`min-width: ${minWidth};`">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ label: string, minWidth?: string }>()
</script>

<style scoped>
button {
  outline: none;
  border: 2px solid gray;
  opacity: 0.5;
  padding: 0.5rem;
}

button:hover {
  background-color: darkgray;
}
</style>