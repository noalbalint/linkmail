<template>
  <!-- TODO: implement tooltips -->
  <button
    :style="`min-width: ${minWidth};`"
    :disabled="disabled"
    :title="disabled ? disabledMessage : ''"
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
  disabled?: boolean,
  disabledMessage?: string,
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

button:not([disabled]):hover {
  outline: none;
  background-color: #8fbc8fbb; 
}

button:not([disabled]):active {
  transform: scale(0.95);
}

button[disabled] {
  background-color: #d3d3d3;
}
</style>