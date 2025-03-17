<template>
  <div class="flex flex-col p-2">
    <label class="flex flex-grow">
      <textarea
        class="border-solid border-[1px] rounded border-grey-500 min-h-30 p-3 ml-1 max-w-2xl mx-3"
        @input="onInput"
      ></textarea>
    </label>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (name: 'update:modelValue', type: string): void;
}>();

function growTextArea(event: Event): void {
  const textarea = event.target as HTMLTextAreaElement;
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

function onInput(event: Event): void {
  const inputValue = (event.target as HTMLTextAreaElement).value;
  growTextArea(event);
  emit('update:modelValue', inputValue);
}
</script>

<style scoped>
textarea {
  outline: none;
  width: 100%;
}
</style>
