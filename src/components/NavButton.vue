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
  padding: 0.5rem;
  border-radius: 8px;
  background-color: unset;
}

button:hover {
  background-color: #cecbbeb4;
}
</style>
