<template>
  <button>
    <slot> </slot>
  </button>
</template>

<script setup lang="ts" />

<style scoped>
button {
  outline: none;
  border: none;
  margin: 0.5rem;
  border-radius: 8px;
  background-color: unset;
  position: relative;
}

button::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: black;
  transition: width 0.3s ease;
}

button:hover {
  color: black;
}

button:hover::after {
  width: 100%;
}
</style>
