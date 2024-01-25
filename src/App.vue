<template>
  <div class="px-8 max-w-3xl w-full flex flex-col items-center">
    <h1 class="text-2xl"> Linkmail: Create and Share Prewritten Emails </h1>
    <h2 class="text-md pt-2"> (Where mailto links wouldn't usually work - eg instagram) </h2>

    <span class="pt-8 pb-2"> 1. Draft your email </span>
    <DraftEmail v-model="mailtoLink" />

    <span class="pt-8 pb-2"> 2. Test your link </span>
    <a
      :href="mailtoLink"
      target="_blank"
    >{{ mailtoLink }}</a>

    <span class="pt-8 pb-1"> 3. Shorten your link </span>
    <span class="pb-2 text-xs"> (generally optional, but necessary for instagram) </span>

    <span> Integrated link shortening coming soon! For now, please use <a href="tinyurl.com/app"> tinyurl.com </a></span>
  </div>
</template>

<script setup lang="ts">
import DraftEmail from './components/DraftEmail.vue'
import { ref } from 'vue';

let mailtoLink = ref('');

</script>

<style scoped>
a {
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>