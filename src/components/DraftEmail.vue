<template>
  <!-- TODO: find a formatter that will newline wrap classes like attributes -->
  <div
    class="draft-email max-w-3xl w-full shadow-md border-solid rounded-lg pt-4 border-black border-2 text-left min-h-[60vh] flex flex-col"
  >
    <section class="flex m-1">
      <span class="pl-2 pt-3 w-16"> To </span>
      <Input
        v-model="toInput"
        class="flex-grow"
      />
    </section>

    <section class="flex m-1">
      <span class="pl-2 pt-3 w-16"> ReplyTo </span>
      <Input
        v-model="replyToInput"
        class="flex-grow"
      />
    </section>

    <section class="flex m-1">
      <span class="pl-2 pt-3 w-16"> Cc </span>
      <Input
        v-model="ccInput"
        class="flex-grow"
      />
    </section>

    <section class="flex m-1">
      <span class="pl-2 pt-3 w-16"> Bcc </span>
      <Input
        v-model="bccInput"
        class="flex-grow"
      />
    </section>

    <section class="flex m-1">
      <span class="pl-2 pt-3 w-16"> Subject </span>
      <Input
        v-model="subjectInput"
        class="flex-grow"
      />
    </section>

    <hr class="mt-2 mb-1">

    <section class="flex m-1">
      <span class="pl-2 pt-3 w-16"> Body </span>
      <TextArea
        class="flex-grow"
        v-model="bodyInput"
      ></TextArea>
    </section>
  </div>
</template>

<script setup lang="ts">
import Input from './Input.vue';
import TextArea from './TextArea.vue';
import Button from './Button.vue'
import { ref, watchEffect } from 'vue';

const emit = defineEmits<{
  (emit: 'update:modelValue', type: string): void;
}>()

let showCc = ref(false);
let showBcc = ref(false);

let toInput = ref('');
let ccInput = ref('');
let bccInput = ref('');
let subjectInput = ref('');
let bodyInput = ref('');

watchEffect(() => {
  // TODO: update to linkmail.co
  let link = '';

  if (toInput.value) {
    link += `${toInput.value}?`;
  }
  if (ccInput.value) {
    link += `&cc=${ccInput.value}`
  }
  if (bccInput.value) {
    link += `&bcc=${bccInput.value}`
  }
  if (subjectInput.value) {
    link += `&subject=${encodeURIComponent(subjectInput.value)}`
  }
  if (bodyInput.value) {
    link += `&body=${encodeURIComponent(bodyInput.value)}`
  }

  // .replace only replaces the first instance :)
  link = link.replace("?&", "?");

  emit('update:modelValue', link);

  return link;
});
</script>

<style>
.draft-email {
  background-color: white;
}
</style>
