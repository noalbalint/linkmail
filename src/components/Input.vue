<template>
  <div class="space-y-2">
    <div class="flex flex-shrink flex-wrap items-center border rounded p-1 max-w-2xl mx-5">
      <span
        v-for="(item, index) in chips"
        :key="index"
        class="bg-primary rounded-full px-3 py-1 m-1 flex items-center space-x-1"
      >
        <span>{{ item }}</span>
        <button
          @click="removeChip(index)"
          class="text-sm font-bold"
        >
          &times;
        </button>
      </span>


      <input
        v-model="inputValue"
        @keydown.enter.prevent="addChip"
        @keydown.backspace="removeLastChip"
        type="text"
        class="flex-grow border-none outline-none min-w-24 p-1 m-1"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ChipsInput',
  setup(_, { emit }) {
    const inputValue = ref('');
    const chips = ref([]);

    const addChip = () => {
      const trimmedValue = inputValue.value.trim();
      if (trimmedValue && !chips.value.includes(trimmedValue)) {
        chips.value.push(trimmedValue);
        inputValue.value = '';
        emit('update:chips', chips.value);
      }
    };

    const removeChip = (index) => {
      chips.value.splice(index, 1);
      emit('update:chips', chips.value);
    };

    const removeLastChip = (event) => {
      if (inputValue.value === '' && event.key === 'Backspace') {
        chips.value.pop();
        emit('update:chips', chips.value);
      }
    };

    return {
      inputValue,
      chips,
      addChip,
      removeChip,
      removeLastChip,
    };
  },
};
</script>

<style scoped>
</style>