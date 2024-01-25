<template>
  <div class="px-8 max-w-3xl w-full flex flex-col items-center">
    <h1 class="text-2xl"> Linkmail: Create and Share Prewritten Emails </h1>

    <span class="pt-16 pb-2"> 1. Draft your email </span>
    <DraftEmail v-model="mailtoLink" />

    <span class="pt-16 pb-2"> 2. Test your link </span>
    <a
      :href="mailtoLink"
      target="_blank"
    >{{ mailtoLink }}</a>

    <span class="pt-16 pb-2"> 3. (optional) shorten your link with tinyurl </span>
    <iframe
      src="https://tinyurl.com/app"
      frameborder="0"
    ></iframe>

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