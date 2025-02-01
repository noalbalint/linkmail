<template>
  <div class="space-y-2">
    <div class="flex flex-shrink flex-wrap items-center border rounded p-1 max-w-2xl mx-5">
      <div 
        v-for="(chip, index) in chips" 
        :key="index"
        class="rounded-full px-3 py-1 m-1 flex items-center space-x-1 border-[1px] border-solid"
      >
        <span>{{ chip }}</span>
        <button
          @click="removeChip(index)"
          class="text-sm font-bold"
        >
          &times;
        </button>
      </div>
      <input
        v-model="inputValue"
        @blur="addChip"
        @keyup.enter="addChip"
        @keydown="removeLastChip"
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
  (event: 'update:modelValue', value: string | string[]): void
}>();

let inputValue = ref(props.modelValue);

const chips = ref<string[]>([]);

watch((chips), (newValue) => {
  emit('update:modelValue', newValue);
});

const addChip = () => {
  const trimmedValue = inputValue.value.trim();
  if (trimmedValue && !chips.value.includes(trimmedValue)) {
    chips.value.push(trimmedValue);
    inputValue.value = '';
    emit('update:modelValue', chips.value);
  }
};

const removeChip = (index: number) => {
  chips.value.splice(index, 1);
  emit('update:modelValue', chips.value);
};

const removeLastChip = (event: KeyboardEvent) => {
  if (inputValue.value === '' && event.key === 'Backspace') {
    chips.value.pop();
    emit('update:modelValue', chips.value);
  }
};
</script>
