<template>
  <div class="flex h-full min-h-screen flex-col items-center">
    <NavBar />
    <router-view class="content-main" />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
.content-main {
  padding: 1rem;
}
</style>
