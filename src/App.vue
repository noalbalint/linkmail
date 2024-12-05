<template>
  <div class="flex h-full min-h-screen flex-col items-center">
    <NavBar />
    <router-view class="p-4 max-w-7xl w-full" />
    <span class="beta-banner">beta preview - <a
        target="_blank"
        href="https://linkmail.co/consume?mailcode=6x4ChBKrQ9pXzcVudSQe"
      >your
        feedback</a> is apprecaited!!</span>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
.beta-banner {
  position: fixed;
  background-color: yellow;
  width: 100%;
  text-align: center;
  bottom: 0;
  font-weight: 600;
}
</style>
