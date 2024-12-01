<template>
  <div class="nav-bar px-2 lg:px-16 flex justify-center">
    <div class="flex items-center justify-between max-w-3xl w-full px-3 lg:px-15">
      <!-- logo -->
      <section class="flex items-center">
        <a
          href="https://github.com/noalbalint/linkmail"
          target="_blank"
        >
          <img
            :src="favicon"
            class="max-h-8 pr-2"
          />
        </a>
        <SecondaryButton
          v-if="isLargeScreen"
          to="/"
          label="linkmail.co"
        >
          <a
            href="https://github.com/noalbalint/linkmail"
            target="_blank"
          >
            linkmail.co
          </a>
        </SecondaryButton>
      </section>

      <section class="flex">
        <!-- new email-->
        <section>
          <div class="flex items-center">
            <NavButton
              to="/"
              label="new email"
            />
          </div>
        </section>
        <!-- about -->
        <section>
          <NavButton
            to="/demo"
            label="about"
          />
          <!-- donate hidden for now -->
          <NavButton
            v-if="false"
            to="/donate"
            label="❤️ Donate"
          />
        </section>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import favicon from '../assets/favicon.svg';
import NavButton from './NavButton.vue';
import SecondaryButton from './SecondaryButton.vue';

const isLargeScreen = window.matchMedia('(min-width: 600px)').matches;

</script>

<style scoped>
a {
  color: inherit !important;
  text-decoration: none !important;
}

.nav-bar {
  height: 4rem;
  width: 100vw;
  background-color: #8fbc8f;
  position: sticky;
  top: 0;
}

.nav-menu {
  margin-left: 46px;
  margin-top: 8px;
}

.nav-menu-content {
  display: flex;
  flex-direction: column;
}

#nav-menu__activator {
  padding: 0.5rem;
  border-radius: 8px;
}

#nav-menu__activator:hover {
  background-color: #8fbc8f;
}
</style>
