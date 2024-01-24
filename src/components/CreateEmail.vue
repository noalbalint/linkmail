<template>
  <!-- TODO: find a formatter that will wrap these automatically like the attributes -->
  <div class="w-full border-solid border-black border-2 border-b-0 text-left min-h-[90vh] mt-[10vh]">
    <Input label="To:" />
    <TextArea label="Cc:" />
    <Input label="Subject:" />
    <hr>
    <TextArea
      label="Body:"
      height="400"
    />
  </div>
</template>

<script setup lang="ts">
import Input from './Input.vue';
import TextArea from './TextArea.vue';
</script>
