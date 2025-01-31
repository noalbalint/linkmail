<template>
  <!-- TODO: find a formatter that will newline wrap classes like attributes -->
  <div
    class="draft-email max-w-3xl w-full shadow-md border-solid rounded-lg pt-4 border-black border-2 text-left min-h-[60vh] flex flex-col"
  >
    <section class="flex m-1">
      <span class="pl-2 pt-3 w-16"> To </span>
      <ChipsInput
        v-model="toInput"
        class="flex-grow"
      />
    </section>

    <section class="flex m-1">
      <span class="pl-2 pt-3 w-16"> ReplyTo </span>
      <ChipsInput
        v-model="replyToInput"
        class="flex-grow"
      />
    </section>

    <section class="flex m-1">
      <span class="pl-2 pt-3 w-16"> Cc </span>
      <ChipsInput
        v-model="ccInput"
        class="flex-grow"
      />
    </section>

    <section class="flex m-1">
      <span class="pl-2 pt-3 w-16"> Bcc </span>
      <ChipsInput
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
import ChipsInput from './ChipsInput.vue';
import Input from './Input.vue';
import TextArea from './TextArea.vue';
import { ref, watchEffect } from 'vue';

const emit = defineEmits<{
  (emit: 'update:modelValue', type: string): void;
}>()

let toInput = ref(['']);
let replyToInput = ref(['']);
let ccInput = ref(['']);
let bccInput = ref(['']);
let subjectInput = ref('');
let bodyInput = ref('');

watchEffect(() => {
  let link = '';

  if (toInput.value.length) {
    const recipients = toInput.value.join(',');
    link += `${recipients}?`;
  }
  if (replyToInput.value.length) {
    link += `&replyToInput=${replyToInput.value}?`;
  }
  if (ccInput.value.length) {
    link += `&cc=${ccInput.value}`
  }
  if (bccInput.value.length) {
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
