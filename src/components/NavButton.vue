<template>
  <div>
    <RouterLink
      :to="to"
      class="router-link"
    >
      <button>
        <slot>
          {{ label }}
        </slot>
      </button>
    </RouterLink>
  </div>
</template>

<script
  setup
  lang="ts"
>
defineProps<{
  to: string,
  label?: string,
}>()
</script>

<style scoped>
.router-link {
  color: unset;
  margin: 0 0.5rem;
}

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
