<template>
  <div class="flex items-center justify-center grow flex-col">
    <span class="hero text-6xl md:text-7xl">
      grassroots digital action
    </span>
    <span class="pb-4 pt-3 text-lg">
      write, link, share: multiply your impact
    </span>
    <div>
    </div>
    <Create />
  </div>
</template>

<script setup lang="ts">
import Create from '../components/Create.vue';
</script>

<style scoped>
.hero {
  font-family: 'Oranienbaum', serif;
  text-align: center;
}

.subtitle {
  text-align: center;
}
</style>
