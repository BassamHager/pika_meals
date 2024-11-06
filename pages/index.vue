<script setup lang="ts">
import { type RecipeResponse } from "../types/types";

const { data, error } = await useFetch<RecipeResponse>(
  "https://dummyjson.com/recipes?limit=12"
);

const { updateCurrentTab } = useNavStore();

useSeoMeta({
  title: "Pika Meals",
  description: "Recipes for you to cook!",
  ogTitle: "Pika Meals",
  ogDescription: "Recipes for you to cook!",
  ogImage: "/pikachu.png",
  ogUrl: `http:localhost:3000`,
  twitterTitle: "Pika Meals",
  twitterDescription: "Recipes for you to cook!",
  twitterImage: "pikachu.png",
  twitterCard: "summary",
});
</script>

<template>
  <main>
    <section class="bg-[#f1f1f1]">
      <div
        class="container flex flex-col lg:flex-row items-center py-20 gap-10"
      >
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Master the Kitchen with Ease: Unleash Your Inner Chef Today!
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Discover recipes helping you to find the easiest way to cook.
          </p>
          <BaseBtn to="#recipe-list" label="Browse Recipes" />
        </div>

        <div class="flex-1 order-1 lg:order-2">
          <NuxtImg
            sizes="xs:100vw sm:667px"
            src="/pika_meal.jpg"
            format="webp"
            densities="x1"
            alt="pika meal"
            class="rounded-xl"
          />
        </div>
      </div>
    </section>

    <section class="text-center my-10 text-3xl">
      <h2 class="mb-10">A Few More Beautiful Buttons</h2>
      <div class="flex w-full gap-5 justify-center">
        <BaseBtn
          to="/cute-error"
          label="Cute Error"
          @click="updateCurrentTab(undefined)"
        />
        <BaseBtn
          to="/lovelyLoading"
          label="Lovely Loading"
          @click="updateCurrentTab(undefined)"
        />
      </div>
    </section>

    <section class="py-20 container" id="recipe-list">
      <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
      <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>

      <div
        v-if="!error"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
      >
        <RecipeCard
          v-for="recipe in data?.recipes"
          :key="recipe.id"
          :recipe="recipe"
        />
      </div>

      <p v-else class="text-xl">
        Oops!, something went wrong. Please try again later
      </p>
    </section>
  </main>
</template>
