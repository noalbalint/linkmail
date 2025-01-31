<template>
  <div class="space-y-2">
    <div class="flex flex-shrink flex-wrap items-center border rounded p-1 max-w-2xl mx-5">
      <input
        v-model="inputValue"
        type="text"
        class="flex-grow border-none outline-none min-w-24 p-1 m-1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: string
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

let inputValue = ref(props.modelValue);

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>