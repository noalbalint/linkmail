<template>
  <div class="flex flex-col p-2">
    <label class="flex flex-grow">
      <span>{{ label }}</span>
      <textarea
        :class="customClass"
        class="h-auto"
        @input="onInput"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>

<script
  setup
  lang="ts"
>
defineProps<{
  label: string,
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
