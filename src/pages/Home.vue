<template>
  <div class="flex items-center justify-center grow flex-col">
    <span class="hero text-6xl md:text-8xl">
      EMAIL CANVASSING <br> FOR THE MODERN ERA
    </span>
    <span class="subtitle leading-6 md:text-2xl text-sm py-12">
      Create ultra-simple one-click engagement links:
      <br>
      when it's easy to take action, more people do.
    </span>
    <div>
      <RouterLink to="/#demo">
        <Button
          class="mr-4"
          type="primary"
          label="Learn More"
        />
      </RouterLink>
      <RouterLink to="/create">
        <Button
          type="primary"
          label="Try Now"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../components/Button.vue';
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
