<template>
  <label class="w-full p-2 flex">
    <span>{{ label }}</span>
    <input
      type="text"
      @input="onInput"
      class="outline-none w-full pl-2 opacity-100"
      :placeholder="placeholder"
    />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label?: string,
  placeholder?: string,
}>()

const emit = defineEmits<{
  (name: 'update:modelValue', type: string): void;
}>();

function onInput(event: Event): void {
  // Send the updated value to the parent
  const input = event.target as HTMLInputElement;
  emit('update:modelValue', input.value);
}
</script>
