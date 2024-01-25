<template>
  <button>
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<style scoped>
button {
  outline: none;
  border: 2px solid #76B39D;
  opacity: 0.5;
  padding: 0.5rem;
  margin: 0.5rem;
  min-width: 4rem;
}

button:hover {
  background-color: #76B39D;
}
</style>