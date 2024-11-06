<script setup lang="ts">
const navStore = useNavStore();
const { tabs, currentTab } = storeToRefs(navStore);
</script>

<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center cursor-pointer">
        <NuxtImg width="56px" format="webp" src="/pikachu.png" alt="" />
        <span class="text-3xl font-bold">Pika Meals</span>
      </NuxtLink>

      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          @click="navStore.updateCurrentTab(tab.title)"
          class="hover:text-hot1 cursor-pointer"
          :class="{
            'shadow-xl bg-hot1 rounded-lg scale-[110%]':
              tab.title === currentTab,
          }"
        >
          <BaseBtn :to="tab.to" :label="tab.title" />
        </li>
      </ul>
    </nav>
  </header>
</template>
