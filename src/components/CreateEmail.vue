<template>
  <!-- TODO: find a formatter that will wrap these automatically like the attributes -->
  <div class="w-full border-solid border-black border-2 text-left min-h-[90vh] my-[5vh] flex flex-col">
    <section class="flex items-center">
      <Input
        label="To:"
        v-model="toInput"
      />
      <Button
        class="m-2"
        label="Cc:"
        tabindex="-1"
        @click="showCc = !showCc"
      />
      <Button
        class="m-2"
        label="Bcc:"
        tabindex="-1"
        @click="showBcc = !showBcc"
      />
    </section>

    <TextArea
      v-if="showCc"
      label="Cc:"
      v-model="ccInput"
    />
    <TextArea
      v-if="showBcc"
      label="Bcc:"
      v-model="bccInput"
    />
    <Input
      label="Subject:"
      v-model="subjectInput"
    />

    <hr>

    <TextArea
      label="Body:"
      class="flex-grow"
      v-model="bodyInput"
    />

    <a
      :href="mailtoLink"
      target="_blank"
    >{{ mailtoLink }}</a>
  </div>
</template>

<script setup lang="ts">
import Input from './Input.vue';
import TextArea from './TextArea.vue';
import Button from './Button.vue'
import { ref, computed } from 'vue';

let showCc = ref(false);
let showBcc = ref(false);

let toInput = ref('');
let ccInput = ref('');
let bccInput = ref('');
let subjectInput = ref('');
let bodyInput = ref('');

const mailtoLink = computed(() => {
  let link = `mailto:${toInput.value}?`

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

  // .replace only replaces the first instance
  link = link.replace("?&", "?");

  return link;
});

</script>
