<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <span class="text-2xl pb-4"> Opening default email app... {{ timeoutComplete ? 'None found!' : '' }} </span>
    <span> {{ errorMessage }} </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { db } from '../../firebase.ts'
import { doc, getDoc } from "firebase/firestore";

setTimeout(() => {
  timeoutComplete.value = true;
}, 5000);

let timeoutComplete = ref(false);
let emailNotFound = ref(false);

const errorMessage = computed((): string => {
  if (emailNotFound.value) {
    return 'Sorry, that link is invalid!'
  }

  if (!emailNotFound.value && timeoutComplete.value) {
    return 'Please check your device settings and try again :)'
  }

  return '';
});

const urlParams = new URLSearchParams(window.location.search);
const mailCode = urlParams.get('mailcode');

async function getEmail(): Promise<string | null> {
  try {
    const docRef = await doc(db, "emails", `${mailCode}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data()?.mailto;
    } else {
      emailNotFound.value = true;
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
  return null;
}

async function createMailtoLink(): Promise<string | null> {
  const email = await getEmail();
  if (email === null) {
    return null;
  }
  const mailtoLink = `mailto:${email}`;
  return mailtoLink;
}

async function openEmailClient() {
  const mailtoLink = await createMailtoLink();
  if (mailtoLink !== null) {
    window.location.href = mailtoLink;
  }
}

openEmailClient();

</script>
