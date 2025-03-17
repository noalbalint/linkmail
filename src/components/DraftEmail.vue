<template>
  <!-- TODO: compress common groups into reusable custom tailwind classes -->
  <div
    class="draft-email max-w-3xl w-full shadow-md border-solid rounded-lg pt-4 border-black border-2 text-left min-h-[60vh] flex flex-col"
  >
    <section class="flex m-1">
      <span class="pl-2 pt-3 w-16"> To </span>
      <ChipsInput
        v-model="state.toInput"
        class="flex-grow"
      />
    </section>

    <section
      v-if="state.showCC"
      class="flex m-1"
    >
      <span class="pl-2 pt-3 w-16"> Cc </span>
      <ChipsInput
        v-model="state.ccInput"
        class="flex-grow"
      />
    </section>

    <section
      v-if="state.showBcc"
      class="flex m-1"
    >
      <span class="pl-2 pt-3 w-16"> Bcc </span>
      <ChipsInput
        v-model="state.bccInput"
        class="flex-grow"
      />
    </section>

    <section class="flex m-1">
      <span class="pl-2 pt-3 w-16"> Subject </span>
      <Input
        v-model="state.subjectInput"
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
          @toggleField="state.showCC = !state.showCC"
          :currentValue="state.showCC"
          fieldName="Cc"
        />
        <AdditionalField
          @toggleField="state.showBcc = !state.showBcc"
          :currentValue="state.showBcc"
          fieldName="Bcc"
          class="mb-2"
        />
      </div>
      <TextArea
        class="flex-grow"
        v-model="state.bodyInput"
      ></TextArea>
    </section>
  </div>
</template>

<script setup lang="ts">
import ChipsInput from './ChipsInput.vue';
import AdditionalField from './AdditionalField.vue';
import Input from './Input.vue';
import TextArea from './TextArea.vue';
import { reactive, watchEffect } from 'vue';
import { emailStore } from '../modules/store.ts';

const emit = defineEmits<{
  (emit: 'update:modelValue', type: string): void;
}>()

interface IState {
  showCC: boolean;
  showBcc: boolean;
  toInput: string[];
  ccInput: string[];
  bccInput: string[];
  subjectInput: string;
  bodyInput: string;
}

const state: IState = reactive({
  showCC: false,
  showBcc: false,
  toInput: [''],
  ccInput: [''],
  bccInput: [''],
  subjectInput: '',
  bodyInput: '',
});

watchEffect(() => {
  emailStore.to = state.toInput;
  emailStore.cc = state.ccInput;
  emailStore.bcc = state.bccInput;
  emailStore.subject = state.subjectInput;
  emailStore.body = state.bodyInput;
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
