import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductList from "../views/ProductList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/catalog/all",
  },
  {
    path: "/catalog",
    redirect: "/catalog/all",
  },
  {
    path: "/catalog/:id",
    name: "catalog",
    component: ProductList,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
