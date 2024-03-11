<template>
  <div class="max-w-5xl lg:pt-12 w-full flex flex-col items-center">
    <DraftEmail
      class="mb-6 lg:mt-16"
      v-model="mailtoLink"
    />

    <div>
      <Button
        v-if="!linkCreated && !linkLoading"
        label="Create Link"
        type="primary"
        minWidth="140px"
        @click="createNewLinkmail()"
      />

      <LoadingSpinner v-else-if="linkLoading"/>

      <div v-else-if="linkCreated" class="flex items-center">
        <a
          :href="linkmailCode"
          target="_blank"
          class="underline text-lg"
        >{{ linkmailCode }}</a>
        <Button
          type="secondary"
          minWidth="100px"
          class="ml-4"
          @click="copyLinkToClipboard()"
        >
          <div class="flex justify-center">
            <i
              @click="copyLinkToClipboard()"
              class="material-icons pr-1"
            >content_copy</i>
            {{ linkCopied ? 'Copied!' : 'Copy' }}
          </div>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: @ alias; avoid relative imports
import DraftEmail from '../components/DraftEmail.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue';
import Button from '../components/Button.vue'
import { ref } from 'vue';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase.ts'

let mailtoLink = ref('');
let linkmailCode = ref('');
let linkCopied = ref(false);
let linkLoading = ref(false);
let linkCreated = ref(false);

async function setEmailInDB() {
  const docRef = await addDoc(collection(db, "emails"), {
    mailto: mailtoLink.value,
  });
  return docRef.id;
}

async function createNewLinkmail() {
  linkLoading.value = true;
  const newId = await setEmailInDB();
  linkmailCode.value = `https://linkmail.co/consume?mailcode=${newId}`;
  linkCreated.value = true;
  linkLoading.value = false;
}

async function copyLinkToClipboard() {
  await navigator.clipboard.writeText(linkmailCode.value);
  linkCopied.value = true;
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