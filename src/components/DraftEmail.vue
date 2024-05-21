<template>
  <!-- TODO: find a formatter that will newline wrap classes like attributes -->
  <div class="draft-email w-full shadow-md border-solid border-black border-2 text-left min-h-[60vh] flex flex-col">
    <section class="flex items-center">
      <Input
        label="To:"
        placeholder="example@gmail.com"
        v-model="toInput"
        customClass="ml-[46px]"
      />
      <Button
        class="mr-2 mt-2 text-sm"
        minWidth="48px"
        type="secondary"
        label="Cc:"
        tabindex="-1"
        @click="showCc = !showCc"
      />
      <Button
        class="mr-2 mt-2 text-sm"
        minWidth="48px"
        type="secondary"
        label="Bcc:"
        tabindex="-1"
        @click="showBcc = !showBcc"
      />
    </section>

    <TextArea
      v-if="showCc"
      label="Cc:"
      placeholder="cc addresses"
      customClass="ml-11"
      v-model="ccInput"
    />

    <TextArea
      v-if="showBcc"
      label="Bcc:"
      placeholder="bcc addresses"
      customClass="ml-9"
      v-model="bccInput"
    />

    <Input
      label="Subject:"
      placeholder="[no subject]"
      customClass="ml-2"
      v-model="subjectInput"
    />

    <hr>

    <TextArea
      label="Body:"
      placeholder="Dear representitive ..."
      customClass="ml-[26px]"
      class="flex-grow"
      v-model="bodyInput"
    />
  </div>
</template>

<script
  setup
  lang="ts"
>
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