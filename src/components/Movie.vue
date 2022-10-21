<template>
  <div class="">
    <!-- <h1 class="text-white">{{ show.title }}</h1> -->
    <div v-for="(value, key, index) in show.thumbnail.regular" :key="key">
      <div v-if="show.category === 'Movie'">
        <!-- <h1 class="text-red-400">
            {{ value }} ==== {{ key }} ====== {{ index }}
          </h1> -->
        <img
          v-if="index == 0"
          class="md:hidden rounded-xl"
          :src="value"
          alt=""
        />
        <img
          v-if="index == 1"
          class="hidden md:flex rounded-xl"
          :src="value"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  props: ["show", "data"],
};
</script>
    
    <style>
</style>