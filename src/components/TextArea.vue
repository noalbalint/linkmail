<template>
  <div>
    <div class="flex flex-col p-2">
      <label class="flex">
        <span class="opacity-50">{{ label }}</span>
        <textarea
          class="h-auto"
          @input="onInput"
          :style="`min-height: ${height}px;`"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string,
  height?: string,
}>()

const emit = defineEmits<{
  (name: 'update:modelValue', type: string): void;
}>();

function onInput(event: Event): void {
  // Resize text area
  const textarea = event.target as HTMLTextAreaElement;
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';

  // Send the updated value to the parent
  emit('update:modelValue', textarea.value);
}
</script>

<style scoped> 
textarea {
  outline: none;
  margin-left: 0.5rem;
  width: 100%;
}
</style>
