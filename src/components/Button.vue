<template>
  <button
    :style="`min-width: ${minWidth};`"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script
  setup
  lang="ts"
>
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
  background-color: #8fbc8f;
  color: black;
}

button:hover {
  outline: none;
  background-color: #8fbc8fbb; 
}

button:active {
  transform: scale(0.95);
}
</style>