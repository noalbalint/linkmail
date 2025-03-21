<template>
  <div class="max-w-3xl">

    <div class="mt-6"></div>
    <p class="px-5 lg:px-0"> Linkmail is an <a
        target="_blank"
        href="https://github.com/noalbalint/linkmail"
      >opensource project</a> for accelerating change.
      <br />
      <br />
      In the dopamine-saturated mobile landscape, small
      improvements in usability cause large increases in user engagement. With our unique one-click
      solution, we hope to do for mobile-first email campaigns what ApplePay did for online purchases: reduce friction
      to increase conversion.
      <br>
      <br>
    <p class="text-center font-extrabold">
      When it's easier to take action, more people do!
    </p>
    <br />
    The service is designed for grassroots social media campaigners who don't have the capacity/budget for
    a website, let alone a dedicated email engine like <a
      href="https://www.newmode.net/home"
      target="_blank"
    >newmode</a>. However, larger organizations will also benefit from the low-friction technology.
    <br>
    <br>
    Because government offices discount the value of bulk emails, thousands
    of individuals writing for dozens of peers is more impactful than dozens of NGOs writing
    for thousands of members. This is the vision for Linkmail.
    </p>

    <section class="flex flex-col-reverse start-center lg:flex-row pt-6">
      <video
        controls
        preload="auto"
        type="video/MP4"
        :src="video1"
        style="max-width: 200px;"
      />
      <div class="pl-5 flex flex-col py-2">
        <span>
          This is the current flow for a grassroots campaign:
        </span>
        <ul class="pl-5 list-decimal py-8">
          <li>Click link in account bio</li>
          <li>Copy body text</li>
          <li>Open mail app + paste / reformat</li>
          <li>Switch to Instagram</li>
          <li>Copy subject</li>
          <li>Switch to mail app + paste / reformat</li>
          <li>Switch to Instagram</li>
          <li>Copy recipient email address(es)</li>
          <li>Switch to mail app + paste / reformat</li>
          <li>[[ Repeat as necessary ]]</li>
        </ul>
        <span class="pb-4 lg:pb-0">
          Many users abandon this onerous process without sending their message.
        </span>
      </div>
    </section>

    <section class="lg:h-[456px] flex flex-col-reverse items-start lg:flex-row pt-6">
      <video
        controls
        preload="auto"
        type="video/MP4"
        :src="video2"
        style="max-width: 200px;"
      />
      <div class="pl-5 flex flex-col py-2 h-full">
        <span>
          Linkmail vastly simplifies this by compressing more information into the link being shared.
          <br />
          <br />
          The new flow is:
        </span>
        <ul class="pl-5 py-4 list-decimal">
          <li>Click link</li>
          <li>Add name (optional)</li>
          <li>Send!</li>
        </ul>
      </div>
    </section>
  </div>

  <RouterLink
    to="/"
    class="mt-8 mb-12"
  >
    <Button
      minWidth="120px"
      type="primary"
      label="Try It"
    />
  </RouterLink>
</template>

<script setup lang="ts">
import Button from '../components/Button.vue';
import video1 from '../assets/videos/video1.MP4'
import video2 from '../assets/videos/video2.MP4'
</script>
<style scoped>
.list-disc li {
  padding-bottom: 5px;
}
</style>
