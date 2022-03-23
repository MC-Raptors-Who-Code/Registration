import { createRouter, createWebHistory } from "vue-router";
import Form from "../views/Form.vue";
import Grats from "../views/Grats.vue";
import NotFound from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "form",
    component: Form,
  },
  {
    path: "/congratulations",
    name: "grats",
    component: Grats,
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
