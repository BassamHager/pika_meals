<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <section class="flex flex-col items-center justify-center gap-10 p-10 bg-stone-500 mt-[30vh] border-hot1 border-dashed rounded-full border-[1rem] text-hot1 mx-3 md:mx-10">
    <h1 class="text-9xl font-bold">{{ error?.statusCode }}</h1>
    <p class="text-xl sm:text-3xl">{{ error?.statusMessage }}</p>
    <BaseBtn class="m-auto" to="/" label="Go home" />
  </section>
</template>
