<template>
  <section class="lg:flex">
    <div class="max-w-lg lg:pr-12">
      We couldn't do this without you!
      <br>
      <br>
      This <a href="https://github.com/noalbalint/linkmail">open source project</a> is proudly offered for free to the
      benefit of all, but it does take time to
      build and maintain, in addition to hosting and data storage costs.
      <br>
      <br>
      We also donate $250/month to Samburu Sovereignty (a grassroots food security project in Kenya), which
      your donation will directly
      support.
      <br>
      <br>
      If none of the donation options listed here are suitable for you, please
      <a
        style="color: blue;"
        href="mailto:thelinkmailco@gmail.com"
      >contact me</a>
      and we will find a solution.
      <br>
      <br>
      <span>Thank you! </span>
      <br>
      <br>
    </div>

    <div>
      <span class="underline"> Canadian e-transfer: </span>
      <br>
      Name: Noal Balint
      <br>
      Email: <a href="mailto:thelinkmailco@gmail.com">thelinkmailco@gmail.com</a>
      <br>
      <br>
      <span class="underline"> European SEPA transfer: </span>
      <br>
      Name: Noal Balint
      <br>
      IBAN: DE65 1001 1001 2622 2439 73
      <br>
      <br>
      <span class="underline"> PayPal: </span>
      <br>
      <a href="https://wwwpaypal.me/noalbalint">www.paypal.me/noalbalint</a>
      <br>
      <img
        :src="paypalQR"
        alt="paypal code"
        class="w-48"
      >
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
import paypalQR from '../assets/images/paypalQR.JPG';
</script>
<style scoped>
</style>
