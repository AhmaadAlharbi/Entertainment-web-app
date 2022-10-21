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
      <!-- Trending -->
      <div
        class="flex flex-col mx-auto justify-center items-center lg:my-10 px-10"
      >
        <h1 class="text-3xl text-left text-white self-start mb-3">Trending</h1>
        <div
          class="
            grid grid-col-1
            md:grid-cols-3
            lg:grid-col-4
            gap-x-4
            justify-items-center
          "
        >
          <div v-for="show in data" :key="show">
            <div v-if="show.isTrending">
              <Trending :show="show" />
            </div>
          </div>
        </div>
      </div>
      <!-- Recomnded -->
      <div
        class="flex flex-col mx-auto justify-center items-center lg:my-5 px-10"
      >
        <h1 class="text-3xl text-left text-white self-start mb-3">
          Recommended for you
        </h1>
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
          <div v-for="show in data" :key="show">
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
import json from "../json.json";

export default {
  components: { Navbar, Search, Trending, Recomended },
  data() {
    return {
      data: json,
    };
  },
  mounted() {
    console.log(JSON.parse(JSON.stringify(this.data.length)));
  },
};
</script>
