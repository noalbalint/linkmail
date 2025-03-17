<template>
  <div class="max-w-4xl w-full flex flex-col items-center">
    <DraftEmail class="mb-6" />

    <div>
      <Button
        v-if="!state.linkmailCode && !state.linkLoading"
        :disabled="!hasMailData"
        disabledMessage="Email must have body, subject, and recipient"
        label="Create Link"
        type="primary"
        minWidth="140px"
        @click="createNewLinkmail()"
      />

      <LoadingSpinner v-else-if="state.linkLoading" />

      <div
        v-else-if="state.linkmailCode"
        class="flex items-center flex-col lg:flex-row"
      >
        <a
          :href="state.linkmailCode"
          target="_blank"
          data-test-id="mail-link"
        >{{ state.linkmailCode }}</a>
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
            {{ state.linkCopied ? 'Copied!' : 'Copy' }}
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
import { pushEmail } from '../api';
import { computed, reactive } from 'vue';
import { emailStore } from '../modules/store';

interface IState {
  linkmailCode: string;
  linkCopied: boolean;
  linkLoading: boolean;
}

const state: IState = reactive({
  linkmailCode: '',
  linkCopied: false,
  linkLoading: false,
});

const hasMailData = computed(() => {
  const hasValidRecipients = emailStore.to.length > 0 && emailStore.to.every((recipient) => {
    return recipient.includes('@') && recipient.includes('.');
  });

  return hasValidRecipients && emailStore.subject.length > 0 && emailStore.body.length > 0;

});

async function createNewLinkmail() {
  state.linkLoading = true;
  const mailId = await pushEmail(emailStore.mailtoValue);
  state.linkmailCode = `https://linkmail.noal.dev/consume?mailcode=${mailId}`;
  state.linkLoading = false;
}

async function copyLinkToClipboard() {
  await navigator.clipboard.writeText(state.linkmailCode);
  state.linkCopied = true;  
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