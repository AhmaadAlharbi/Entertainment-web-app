<template>
  <div class="">
    <!-- <h1 class="text-white">{{ show.title }}</h1> -->
    <div v-for="(value, key, index) in show.thumbnail.regular" :key="key">
      <!-- <h1 class="text-red-400">
        {{ value }} ==== {{ key }} ====== {{ index }}
      </h1> -->
      <div class="relative rounded-xl">
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
        <!-- Bookmark icon -->
        <div
          v-if="index == 0"
          class="
            cursor-pointer
            absolute
            top-0
            right-3
            bg-DarkBlue
            w-10
            h-10
            rounded-full
            opacity-40
          "
        >
          <svg
            class="absolute top-1 right-3"
            width="17"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="flex space-x-2 items-center">
      <h3 class="text-gray-500 my-2 text-left">{{ show.year }}</h3>

      <div v-if="show.category == 'Movie'">
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
            fill="#FFF"
            opacity=".75"
          />
        </svg>
      </div>
      <div v-else>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
            fill="#5A698F"
          />
        </svg>
      </div>

      <h3 class="text-gray-500 my-2 text-left">
        <span class="mr-3">{{ show.category }}</span> {{ show.rating }}
      </h3>
    </div>
    <h1 class="text-2xl text-white text-left">{{ show.title }}</h1>
  </div>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style>
</style>