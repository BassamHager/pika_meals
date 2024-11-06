<script lang="ts" setup>
const { updateCurrentTab } = useNavStore();
</script>

<template>
  <div class="text-center text-3xl mt-10">
    <h1>lovely loading...</h1>

    <Loader />
    <BaseBtn
      to="/"
      label="Go back"
      class="mt-10"
      @click="updateCurrentTab('home')"
    />
  </div>
</template>
