<template>
  <div class="flex items-center justify-center grow flex-col">
    <span class="hero text-6xl md:text-7xl">
      The New Email Templating Engine
    </span>
    <span class="pb-12 pt-6">
      Replace cumbersome forms with a one-click magic link
    </span>
    <div>
      <RouterLink to="/demo">
        <Button
          class="mr-8"
          minWidth="120px"
          type="primary"
          label="Learn More"
        />
      </RouterLink>
      <RouterLink to="/create">
        <Button
          minWidth="120px"
          type="primary"
          label="Try Now"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
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
