<template>
  <!-- TODO: find a formatter that will newline wrap classes like attributes -->
  <div class="w-full border-solid border-black border-2 text-left min-h-[60vh] flex flex-col">
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
  let link = `http://localhost:5173/consume?mailto:${toInput.value}?`

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
