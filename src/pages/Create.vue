<template>
  <div class="max-w-5xl lg:pt-12 w-full flex flex-col items-center">
    <DraftEmail
      class="mb-6 lg:mt-16"
      v-model="mailtoLink"
    />

    <div>
      <Button
        :label="linkCopied ? 'Copied!' : 'Copy'"
        type="primary"
        minWidth="100px"
        class="mr-4"
        @click="copyLinkToClipboard()"
      />
      <Button
        label="Test"
        type="primary"
        minWidth="100px"
        @click="testLink()"
      />
    </div>


    <span class="pt-8 pb-1 px-2 max-w-3xl">
      Note: many services (such as Instagram) do not support such long links. In the future Linkmail will
      provide automatic link shortening, but for now we recommend using <a
        href="https://tinyurl.com/app"
        class="underline"
      > tinyurl.com </a> :)
    </span>
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
  window.open(`/consume?mailto=${mailtoLink.value}`, '_blank');
}

async function copyLinkToClipboard() {
  const link = `linkmail.co/consume?mailto=${mailtoLink.value}`
  await navigator.clipboard.writeText(link);
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