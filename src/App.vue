<template>
  <div class="flex h-full flex-col items-center">
    <NavBar />
    <router-view style="padding: 1rem;" />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>
