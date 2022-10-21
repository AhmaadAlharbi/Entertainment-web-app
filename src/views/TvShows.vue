<template>
  <div class="flex md:flex-col items-baseline lg:container">
    <Navbar class="hidden lg:flex" />
    <div
      class="
        flex flex-col
        justify-center
        lg:translate-x-32 lg:-translate-y-[53rem]
      "
    >
      <Navbar class="lg:hidden" />

      <Search />

      <!-- Recomnded -->
      <div
        class="flex flex-col mx-auto justify-center items-center lg:my-5 px-10"
      >
        <h1 class="text-3xl text-left text-white self-start mb-3">TV Series</h1>

        <div
          v-if="data.length"
          class="
            grid grid-cols-1
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
            justify-items-center
            content-center
          "
        >
          <div v-for="show in getData()" :key="show">
            <Recomended :show="show" :data="data" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Navbar from "../components/Navbar.vue";
import Search from "../components/Search.vue";
import Trending from "../components/Trending.vue";
import Recomended from "../components/Recomended.vue";
import Movie from "../components/Movie.vue";
import json from "../json.json";

export default {
  components: { Navbar, Search, Trending, Recomended, Movie },
  data() {
    return {
      data: json,
    };
  },
  methods: {
    getData() {
      let data = this.data;
      return data.filter((item) => {
        return item.category == "TV Series";
      });
    },
  },
};
</script>
  
  <style>
</style>