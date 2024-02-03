<template>
  <div
    v-show="isVisible"
    class="menu-content"
    ref="menuElement"
  >
    <slot :closeMenu="closeMenu"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  activator: {
    type: String,
    required: true,
  },
});

const isVisible = ref(false);
const menuElement = ref<HTMLElement | null>(null);

function closeMenu() {
  isVisible.value = false;
}

function toggleMenu(event: any) {
  if (event.target.id === props.activator) {
    isVisible.value = !isVisible.value;
  }
};

function handleClickOutside(event: any) {
  if (menuElement.value && !menuElement.value.contains(event.target) && event.target.id !== props.activator) {
    isVisible.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', toggleMenu);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', toggleMenu);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.menu-content {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 12px;
}
</style>