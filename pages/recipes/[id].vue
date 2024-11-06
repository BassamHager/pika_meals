<script setup lang="ts">
import { type Recipe } from "../../types/types";

const { id } = useRoute().params;
const { data, error, status } = await useFetch<Recipe>(
  `https://dummyjson.com/recipes/${id}`
);

if (error.value?.data.message) {
  throw createError({
    statusCode: error.value?.statusCode,
    statusMessage: error.value?.data.message,
  });
}

// store
const { updateCurrentTab } = useNavStore();

useSeoMeta({
  title: data.value?.name,
  description: "Recipes for you to cook!",
  ogTitle: data.value?.name,
  ogDescription: "Recipes for you to cook!",
  ogImage: data.value?.image,
  ogUrl: `http:localhost:3001/recipes/${data.value?.id}`,
  twitterTitle: data.value?.name,
  twitterDescription: "Recipes for you to cook!",
  twitterImage: data.value?.image,
  twitterCard: "summary",
});
</script>

<template>
  <div class="flex flex-col max-w-screen-lg container py-20">
    <!-- Header -->
    <div class="flex flex-col mb-6">
      <div class="flex justify-between">
        <h2 class="text-5xl mb-4 font-semibold">{{ data?.name }}</h2>
        <BaseBtn to="/" label="Back" @click="updateCurrentTab('home')" />
      </div>

      <div class="flex gap-4 text-xl mb-6">
        <div class="flex items-center gap-1">
          <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
          <span>{{ data?.cookTimeMinutes }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:fire" style="color: #f79f1a" />
          <span>{{ data?.caloriesPerServing }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:star" style="color: #f79f1a" />
          <span>{{ data?.rating }} ({{ data?.reviewCount }})</span>
        </div>
      </div>
      <hr />
    </div>

    <!-- Image -->
    <Loader v-if="status !== 'success'" />
    <NuxtImg
      v-else
      :src="data?.image"
      densities="x1"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw"
      class="w-full max-h-[500px] object-cover rounded-md shadow-sm mb-12"
      alt=""
    />

    <!-- Ingredients -->
    <div class="mb-8">
      <h2 class="text-3xl font-semibold mb-4">Ingredients</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
        <li v-for="ingredient in data?.ingredients">
          <label class="flex gap-2 items-center">
            <input class="hidden peer" type="checkbox" />
            <div
              class="relative w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center peer-checked:after:absolute peer-checked:after:w-4 peer-checked:after:h-4 peer-checked:after:bg-hot1 peer-checked:after:rounded-full"
            ></div>
            <span class="peer-checked:line-through">
              {{ ingredient }}
            </span>
          </label>
        </li>
      </ul>
    </div>

    <!-- Instructions -->
    <div>
      <h2 class="text-3xl font-medium mb-4">Instructions</h2>
      <ul class="flex flex-col text-lg gap-4">
        <li
          v-for="(instruction, index) in data?.instructions"
          class="flex gap-2"
        >
          <span
            class="flex items-center justify-center bg-hot1 w-7 h-7 rounded-full text-white text-sm"
          >
            {{ index + 1 }}
          </span>
          <span class="flex-1">{{ instruction }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
