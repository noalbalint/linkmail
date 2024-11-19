<template>
  <div class="max-w-4xl w-full flex flex-col items-center">
    <p class="pb-2 pt-6">Get started by drafting your email here just like you normally would. Then click 'create link',
      copy it, and share! It's that easy :)</p>
    <DraftEmail
      class="mb-6"
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

      <LoadingSpinner v-else-if="linkLoading" />

      <div
        v-else-if="linkCreated"
        class="flex items-center flex-col lg:flex-row"
      >
        <a
          :href="linkmailCode"
          target="_blank"
        >{{ linkmailCode }}</a>
        <Button
          minWidth="100px"
          class="ml-4 mt-2 lg:mt-0"
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

<script
  setup
  lang="ts"
>
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
  max-width: 90vw;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>