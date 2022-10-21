<template>
  <Search class="border" />
  <div
    class="flex flex-col container mx-auto items-center translate-y-32 border"
  >
    <h1 class="text-3xl text-left text-white self-start mn-6">Trending</h1>
    <div class="grid grid-col-1 md:grid-cols-3 gap-4">
      <div v-for="show in data" :key="show">
        <div v-if="show.isTrending">
          <Trending :show="show" />
        </div>
      </div>
    </div>
  </div>

  <Navbar />
</template>


<script>
import Navbar from "../components/Navbar.vue";
import Search from "../components/Search.vue";
import Trending from "../components/Trending.vue";
import json from "../json.json";

export default {
  components: { Navbar, Search, Trending },
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
