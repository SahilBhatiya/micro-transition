import { routesData } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    ...routesData.home,
    component: () => import("../pages/Dashboard/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  document.title = to.name + " - Micro Transition";
  scroll(0, 0);
});

export default router;
