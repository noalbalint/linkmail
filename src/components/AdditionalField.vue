<template>
  <div
    @click="$emit('toggleField')"
    class="additionalField"
    :data-after-content="afterContent"
  >
    <p class="text-center w-10 fieldName">
      {{ props.fieldName }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
  fieldName: string,
  currentValue: boolean
}>();

const emits = defineEmits<{
  (event: 'toggleField'): void;
}>();

const afterContent = computed(() => {
  return props.currentValue ? 'x' : '+';
});
</script>

<style scoped>
.additionalField {
  position: relative;
  height: 32px;
  border: 1px solid transparent; 
  border-radius: 10px;
}

.additionalField:hover {
  border-color: black;
  cursor: pointer;
}

.additionalField:hover .fieldName {
  visibility: hidden;
}

.additionalField:hover::after {
  content: attr(data-after-content);
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: visible;
}
</style>
