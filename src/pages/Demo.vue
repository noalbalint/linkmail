<template>
  <div class="max-w-2xl">

    <p class="mt-6 px-5 lg:px-0"> Linkmail is an <a
        target="_blank"
        href="https://github.com/noalbalint/linkmail"
      >opensource project</a> for accelerating sociopolitical movements. It creates a double efficiency: enabling
      activists to more easily write and share email templates, and enabling audiences to more easily send them.
      <br>
      <br>
      Our service is particularly useful for social media activists who don't have the capacity/budget for
      a website, let alone a dedicated email engine like <a
        href="https://www.newmode.net/home"
        target="_blank"
      >newmode</a>. However, larger organizations will also benefit from our low-friction technology.
      <br>
      <br>
      We also hope to encourage more people to become micro-campaigners.
      Political offices put more weight on individual/unique emails, so <b> a large number
        of individuals writing emails for their peers is more influential than a handful of NGOs writing emails
        for thousands of members. </b> This is our vision for Linkmail.
    </p>

    <section class="flex flex-col-reverse items-center lg:flex-row pt-6">
      <video
        controls
        preload="auto"
        type="video/MP4"
        :src="video1"
        style="max-width: 200px;"
      />
      <div class="pl-5 flex flex-col py-2">
        <span>
          The current flow for a standard social media email drive is some derivative of the following:
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
        </ul>
        <span class="pb-4 lg:pb-0">
          In the dopamine-saturated instant-gratification environment of Instagram, for most users this is simply too
          many steps and they abandon their message without sending it.
        </span>
      </div>
    </section>

    <section class="lg:h-[456px] flex flex-col-reverse items-center lg:flex-row pt-6">
      <video
        controls
        preload="auto"
        type="video/MP4"
        :src="video2"
        style="max-width: 200px;"
      />
      <div class="pl-5 flex flex-col py-2 h-full">
        <span>
          <a
            href="linkmail.co/create"
            target="_blank"
          >Linkmail</a> vastly simplifies this by compressing more information into the link being shared.
          The new flow is:
        </span>
        <ul class="pl-5 py-4 list-decimal">
          <li>Click link</li>
          <li>Add name</li>
          <li>Send!</li>
        </ul>
        <span>
          This minor improvement makes a huge the difference – when it's easier to take action, more people do!
        </span>
        <br>
        <div class="h-full" />
        <span class="pb-4 lg:pb-0">
          NOTE: in both demos, you'll see that I must slightly reformat the email content. This is due to a
          problem with my phone specifically, and most users won't experience this.
        </span>
      </div>
    </section>
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
