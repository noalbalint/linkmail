<template>
  <div class="flex h-full min-h-screen flex-col items-center">
    <NavBar />
    <router-view class="p-4" />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>
