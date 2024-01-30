<template>
  <div class="px-8 max-w-3xl w-full flex flex-col items-center">
    <h1 class="text-2xl"> Linkmail: Create and Share Prewritten Emails </h1>
    <h2 class="text-md pt-2"> (Where mailto links wouldn't usually work - eg instagram) </h2>

    <span class="pt-8 pb-2 font-bold"> 1. Draft your email </span>
    <DraftEmail v-model="mailtoLink" />


    <a
      :href="mailtoLink"
      target="_blank"
      class="pt-2"
    >{{ mailtoLink }}</a>
    <div>
      <Button
        label="test link"
        minWidth="100px"
        class=" min-w-32"
        @click="testLink()"
      >
        <a
          :href="mailtoLink"
          target="_blank"
        ></a>
      </Button>
      <Button
        minWidth="100px"
        :label="linkCopied ? 'copied!' : 'copy link'"
        @click="copyLinkToClipboard()"
      />
    </div>


    <span class="pt-8 pb-1 font-bold"> 2. Shorten your link with <a href="tinyurl.com/app"> tinyurl.com </a></span>
    <span class="pb-2 text-xs"> (technically optional, but necessary for instagram) </span>
    <span class="pb-4"> Integrated link shortening coming soon! </span>

    <span class="pt-8 pb-2 font-bold"> 3. Share </span>
    <span class="pb-4"> You're all set, go change the world :) </span>
  </div>
</template>

<script setup lang="ts">
// TODO: @ alias; avoid relative imports
import DraftEmail from '../components/DraftEmail.vue'
import Button from '../components/Button.vue'
import { ref } from 'vue';

let mailtoLink = ref('');

let linkCopied = ref(false);

function testLink() {
  window.open(mailtoLink.value, '_blank');
}

async function copyLinkToClipboard() {
  await navigator.clipboard.writeText(mailtoLink.value);
  linkCopied.value = true;

  setTimeout(() => {
    linkCopied.value = false;
  }, 3000);
}
</script>

<style scoped>
a {
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>