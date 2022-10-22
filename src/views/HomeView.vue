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

      <Search
        @display-answer-1="getTitle"
        :searchPlaceHolder="searchPlaceHolder"
      />
      <!-- Home page while typing to filter -->
      <div v-if="filter">
        <div
          class="
            flex flex-col
            mx-auto
            justify-center
            items-center
            lg:my-5
            px-10
          "
        >
          <h1 class="text-3xl text-left text-white self-start mb-3">
            Found {{ search.length }} results for {{ filter }}
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
            <div v-for="show in search" :key="show">
              <Recomended :show="show" />
            </div>
          </div>
        </div>
      </div>
      <!-- Home page without filtering -->
      <div v-if="!filter">
        <!-- Trending -->
        <div
          class="
            flex flex-col
            mx-auto
            justify-center
            items-center
            lg:my-10
            px-10
          "
        >
          <h1 class="text-3xl text-left text-white self-start mb-3">
            Trending
          </h1>
          <div
            class="
              grid grid-col-1
              md:grid-cols-3
              lg:grid-col-4
              gap-4
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
          class="
            flex flex-col
            mx-auto
            justify-center
            items-center
            lg:my-5
            px-10
          "
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
            <div v-for="show in getData()" :key="show">
              <Recomended :show="show" :data="data" />
            </div>
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
      filter: "",
      searchPlaceHolder: "Search for movies or TV series",
    };
  },
  methods: {
    getData() {
      let data = this.data;
      return data.filter((item) => {
        return item.isTrending == false;
      });
    },
    getTitle(title) {
      this.filter = title;
    },
  },

  computed: {
    search() {
      if (!this.data) {
        return [];
      }

      if (!this.filter) {
        return this.data;
      }
      return this.data.filter((item) => item.title.includes(this.filter));
    },
  },
  mounted() {
    // console.log(JSON.parse(JSON.stringify(this.data.length)));
  },
};
</script>
