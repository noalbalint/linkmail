<template>
  <div class="flex h-full min-h-screen flex-col items-center">
    <NavBar />
    <router-view class="p-4 max-w-7xl w-full" />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>
