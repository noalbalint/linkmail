<template>
  <!-- TODO: find a formatter that will wrap these automatically like the attributes -->
  <div class="w-full border-solid border-black border-2 text-left min-h-[90vh] my-[5vh] flex flex-col">
    <section class="flex items-center">
      <Input label="To:" />
      <Button
        class="m-2"
        label="Cc:"
        @click="showCc = !showCc"
      />
      <Button
        class="m-2"
        label="Bcc:"
        @click="showBcc = !showBcc"
      />
    </section>
    <TextArea
      v-if="showCc"
      label="Cc:"
    />
    <TextArea
      v-if="showBcc"
      label="Bcc:"
    />
    <Input label="Subject:" />
    <hr>
    <TextArea
      label="Body:"
      class="flex-grow"
    />
  </div>
</template>

<script setup lang="ts">
import Input from './Input.vue';
import TextArea from './TextArea.vue';
import Button from './Button.vue'
import { ref } from 'vue';

let showCc = ref(false);
let showBcc = ref(false);
</script>
