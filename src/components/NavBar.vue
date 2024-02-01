<template>
  <div class="nav-bar">
    <div class="flex items-center">
      <NavButton
        to="/"
        class="pr-4"
      >
        <img
          :src="favicon"
          class=" max-h-8"
        />
      </NavButton>
      <NavButton
        to="/create"
        label="Create"
      />
      <NavButton
        to="/demo"
        label="How does it work?"
      />
    </div>
    <NavButton
      to="/donate"
      label="❤️ Donate"
    />
  </div>
</template>

<script setup lang="ts">
import favicon from '../../public/favicon.svg';
import NavButton from './NavButton.vue';
</script>

<style scoped>
.nav-bar {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  padding: 0 4rem;
  width: 100vw;
  background-color: #cecbbe83;
}

</style>
