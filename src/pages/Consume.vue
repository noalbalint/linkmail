<template>
  <div class="flex flex-col items-center">
    <span class="text-2xl pb-2"> Opening default email client... </span>
    <span v-if="timeoutComplete"> No client not found! :( </span>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const mailtoLink = `mailto:${useRoute().query.mailto}`;

let timeoutComplete = ref(false);

setTimeout(() => {
  console.log('timeout complete');
  timeoutComplete.value = true;
}, 5000);

window.location.href = mailtoLink;

</script>
<style scoped>
</style>
