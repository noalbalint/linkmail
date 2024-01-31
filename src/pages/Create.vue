<template>
  <div class="max-w-3xl w-full flex flex-col items-center">
    <DraftEmail
      class="mb-6"
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
      >
        <a
          :href="mailtoLink"
          target="_blank"
        ></a>
      </Button>
    </div>


    <span class="pt-8 pb-1 max-w-xl">
      Note: many services (such as Instagram) have limits on how long a link can be. In the future Linkmail will
      automatically
      shorten
      links, but for now we recommend using <a href="tinyurl.com/app"> tinyurl.com </a> :)
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