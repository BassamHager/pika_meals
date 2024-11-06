<script setup lang="ts">
defineProps({
  label: String,
  to: String,
  active: Boolean,
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="px-4 py-2 text-white self-start bg-hot1-foreground rounded-md text-lg cursor-pointer hover:scale-[110%] hover:bg-hot1 hover:shadow-lg hover:transition-all duration-300 inline-block"
    :class="{ active: 'shadow-xl' }"
  >
    <slot>{{ label }}</slot>
  </NuxtLink>
</template>
