<template>
  <div class="flex flex-col items-center justify-center">
    <span class="text-2xl pb-2"> Opening default email client... </span>
    <span v-if="timeoutComplete"> No client not found! :( </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mailtoTarget = window.location.href.match(/mailto=(.*)/) ?? '';
const mailtoLink = `mailto:${mailtoTarget[1]}`;

let timeoutComplete = ref(false);

setTimeout(() => {
  timeoutComplete.value = true;
}, 5000);

window.location.href = mailtoLink;

</script>
