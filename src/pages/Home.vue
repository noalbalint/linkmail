<template>
  <div class="flex items-center justify-center grow flex-col">
    <span class="hero text-6xl md:text-8xl">
      EMAIL CANVASSING <br> FOR THE MODERN ERA
    </span>
    <nobr class="subtitle leading-6 md:text-2xl text-lg py-12">
      When it's easy to take action, <wbr> more people do.
    </nobr>
    <div>
      <RouterLink to="/#demo">
        <Button
          class="mr-8 text-lg"
          minWidth="120px"
          type="primary"
          label="Learn More"
        />
      </RouterLink>
      <RouterLink to="/create">
        <Button
          class="text-lg"
          minWidth="120px"
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
