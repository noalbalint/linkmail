<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <span class="text-2xl pb-4"> {{ linkValidButNoEmailApp ? 'No email app found!' : 'Opening default email app...' }}
    </span>
    <span> {{ errorMessage }} </span>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref, computed } from 'vue';
import { db } from '../../firebase.ts'
import { doc, getDoc } from "firebase/firestore";

setTimeout(() => {
  timeoutComplete.value = true;
}, 10000);

let timeoutComplete = ref(false);
let emailNotFound = ref(false);

const linkValidButNoEmailApp = computed((): boolean => {
  return (emailNotFound.value === false) && timeoutComplete.value;
});

const errorMessage = computed((): string => {
  if (emailNotFound.value) {
    return 'Sorry, that link is invalid!'
  }

  if (timeoutComplete.value) {
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
