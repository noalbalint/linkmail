<template>
  <label class="pr-2 w-full p-2 flex">
    <span class="opacity-50">{{ label }}</span>
    <input
      type="text"
      @input="onInput"
      class="outline-none w-full px-2 opacity-100"
    />
  </label>
</template>

<script setup lang="ts">
defineProps<{ label: string }>()

const emit = defineEmits<{
  (name: 'update:modelValue', type: string): void;
}>();

function onInput(event: Event): void {
  // Send the updated value to the parent
  const textarea = event.target as HTMLTextAreaElement;
  emit('update:modelValue', textarea.value);
}
</script>
