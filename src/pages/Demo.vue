<template>
  <div class="max-w-2xl">

    <p class="text-xl underline text-center pb-4 lg:pb-8 pt-6"> The Problem: </p>

    <div class="flex flex-col-reverse items-center lg:flex-row">
      <video
        controls
        preload="auto"
        type="video/MP4"
        :src="video1"
        style="max-width: 200px;"
      />
      <div class="pl-5 flex flex-col py-2">
        <span>
          Email campaigns on Instagram have too much cognitive load, resulting in abandoned emails. Users must:
        </span>
        <ul class="pl-5 list-decimal py-8">
          <li>Click link in account bio</li>
          <li>Copy body text</li>
          <li>Open mail app + paste / reformat</li>
          <li>Switch to Instagram</li>
          <li>Copy subject</li>
          <li>Switch to mail app + paste</li>
          <li>Switch to Instagram</li>
          <li>Copy recipient email address(es)</li>
          <li>Switch to mail app + paste</li>
          <li>[[ Repeat as necessary ]]</li>
          <li>Send! ... if they get that far</li>
        </ul>
        <span class="pb-4 lg:pb-0">
          In the dopamine-saturated instant-gratification environment of Instagram, for most users this is simply too
          much.
        </span>
      </div>
    </div>

    <p class="text-xl underline text-center pb-4 lg:pb-8 pt-6">The Solution: </p>

    <div class="flex flex-col-reverse items-center lg:flex-row">
      <video
        controls
        preload="auto"
        type="video/MP4"
        :src="video2"
        style="max-width: 200px;"
      />
      <div class="pl-5 flex flex-col py-2">
        <span>
          Linkmail vastly simplifies this flow by compressing more information into the link being shared.
          Now all users have to do is:
        </span>
        <ul class="pl-5 py-4 list-decimal">
          <li>Click link</li>
          <li>Add name</li>
          <li>Send!</li>
        </ul>
        <span>
          This makes all the difference – when it's easier to take action, more people do!
        </span>
        <br>
        <div class="h-full" />
        <span class="pb-4 lg:pb-0">
          NOTE: in both demos, you'll see that I must slightly reformatt the email content. This is due to a
          problem with my phone specifically, and most users won't experience this.
        </span>
      </div>
    </div>
  </div>

  <RouterLink
    to="/create"
    class="mt-8 mb-12"
  >
    <Button
      minWidth="120px"
      type="primary"
      label="Try It Now"
    />
  </RouterLink>
</template>

<script
  setup
  lang="ts"
>
import Button from '../components/Button.vue';
import video1 from '../assets/videos/video1.MP4'
import video2 from '../assets/videos/video2.MP4'
</script>
<style scoped>
.list-disc li {
  padding-bottom: 5px;
}
</style>
