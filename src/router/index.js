import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Movies from "../views/Movies.vue";
import TvShows from "../views/TvShows.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/tv-shows",
    name: "TvShows",
    component: TvShows,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
