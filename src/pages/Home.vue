<template>
  <div class="flex items-center justify-center grow flex-col">
    <span class="hero text-6xl md:text-7xl">
      grassroots digital action
    </span>
    <span class="pb-4 pt-3 text-lg">
      quickly draft sharable emails
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
          label="Try It"
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
