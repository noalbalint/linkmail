<template>
  <div class="flex flex-col p-2">
    <label class="flex flex-grow">
      <textarea
        :class="customClass"
        class="min-h-52 p-1 ml-1 border-solid border-[1px] rounded border-grey-500
        max-w-2xl mx-3"
        @input="onInput"
        :placeholder="placeholder"
      ></textarea>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  placeholder?: string,
  customClass?: string,
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
  width: 100%;
}
</style>
