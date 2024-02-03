<template>
  <button
    :style="`min-width: ${minWidth};`"
    :class="{
      'primary': type === 'primary',
      'secondary': type === 'secondary',
    }"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label?: string,
  minWidth?: string,
  type?: string,
}>()
</script>

<style scoped>
button {
  outline: none;
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
}

button.primary {
  background-color: #4713f3;
  color: white;
}

button.secondary {
  background-color: whitesmoke;
}

button.primary:hover {
  outline: none;
  background-color: #4713f3bb;
}

button:active {
  transform: scale(0.95);
}
</style>