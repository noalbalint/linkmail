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

    <section
      v-if="showCC"
      class="flex m-1"
    >
      <span class="pl-2 pt-3 w-16"> Cc </span>
      <ChipsInput
        v-model="ccInput"
        class="flex-grow"
      />
    </section>

    <section
      v-if="showBcc"
      class="flex m-1"
    >
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

    <section class="flex m-1 flex-grow">
      <div class="flex flex-col items-center">
        <span class="pl-2 pt-3 w-[72px]"> Body </span>
        <div class="h-full" />
        <span class="py-1 underline"> More </span>
        <AdditionalField
          @toggleField="showCC = !showCC"
          :currentValue="showCC"
          fieldName="Cc"
        />
        <AdditionalField
          @toggleField="showBcc = !showBcc"
          :currentValue="showBcc"
          fieldName="Bcc"
          class="mb-2"
        />
      </div>
      <TextArea
        class="flex-grow"
        v-model="bodyInput"
      ></TextArea>
    </section>
  </div>
</template>

<script setup lang="ts">
import ChipsInput from './ChipsInput.vue';
import AdditionalField from './AdditionalField.vue';
import Input from './Input.vue';
import TextArea from './TextArea.vue';
import { ref, watchEffect } from 'vue';
import { emailStore } from '../modules/store.ts';

const emit = defineEmits<{
  (emit: 'update:modelValue', type: string): void;
}>()

let showCC = ref(false);
let showBcc = ref(false);

let toInput = ref(['']);
let ccInput = ref(['']);
let bccInput = ref(['']);
let subjectInput = ref('');
let bodyInput = ref('');

watchEffect(() => {
  emailStore.to = toInput.value;
  emailStore.cc = ccInput.value;
  emailStore.bcc = bccInput.value;
  emailStore.subject = subjectInput.value;
  emailStore.body = bodyInput.value;
});

</script>

<style>
.draft-email {
  background-color: white;
}

.underline {
  text-decoration: underline;
  text-decoration-thickness: 0.5px;
  text-underline-offset: 4px;
}
</style>
