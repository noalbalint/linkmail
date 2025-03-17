<template>
  <div class="space-y-2">
    <div class="flex flex-shrink flex-wrap items-center border rounded p-1 max-w-2xl mx-5">
      <div 
        v-for="(chip, index) in state.chips" 
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
        v-model="state.inputValue"
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
import { reactive, watch } from 'vue';

const emit = defineEmits<{
  (event: 'update:modelValue', value: string[]): void
}>();

interface IState {
  inputValue: string;
  chips: string[];
}

const state: IState = reactive({
  inputValue: '',
  chips: [],
});

watch((state.chips), (newValue) => {
  emit('update:modelValue', newValue);
});

const addChip = () => {
  const trimmedValue = state.inputValue.trim();
  if (trimmedValue && !state.chips.includes(trimmedValue)) {
    state.chips.push(trimmedValue);
    state.inputValue = '';
    emit('update:modelValue', state.chips);
  }
};

const removeChip = (index: number) => {
  state.chips.splice(index, 1);
  emit('update:modelValue', state.chips);
};

const removeLastChip = (event: KeyboardEvent) => {
  if (state.inputValue === '' && event.key === 'Backspace') {
    state.chips.pop();
    emit('update:modelValue', state.chips);
  }
};
</script>
