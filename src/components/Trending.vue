<template>
  <div class="">
    <h1 class="text-white">{{ show.title }}</h1>
    <div v-for="(value, key, index) in show.thumbnail.trending" :key="key">
      <!-- <h1 class="text-red-400">
        {{ value }} ==== {{ key }} ====== {{ index }}
      </h1> -->
      <img v-if="index == 0" class="md:hidden" :src="value" alt="" />
      <img v-if="index == 1" class="hidden md:flex" :src="value" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style>
</style>