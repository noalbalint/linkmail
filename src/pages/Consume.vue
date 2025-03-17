<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <span class="text-2xl pb-4"> Opening default email app... </span>
    <span v-if="state.errorMessage"> {{ state.errorMessage }} </span>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { getEmail } from '../api';
import { reactive } from 'vue';

interface IState {
  errorMessage: string;
  emailClientTimeout: NodeJS.Timeout | undefined;
}

const state: IState = reactive({
  errorMessage: '',
  emailClientTimeout: undefined,
});

const mailcode = computed(() => {
  return new URLSearchParams(window.location.search).get('mailcode');
});

onMounted(async() => {
  await openMailtoLink();
});

async function openMailtoLink(): Promise<void> {
  if (mailcode.value === null) {
    return Promise.reject('Mailcode is null');
  }

  try {
    const mailtoLink = await getEmail(mailcode.value);
    setTimeout(() => {
      // If it takes >10s to redirect to a mail app, assume it's not configured - TODO: improve this...
      state.errorMessage = 'Have you configured a default email app on your device?';
    }, 10000);
    window.location.href = `mailto:${mailtoLink}`;
  } catch (error) {
    state.errorMessage = 'Sorry, that link appears to be invalid!';
    console.error(error);
  }
}
</script>
