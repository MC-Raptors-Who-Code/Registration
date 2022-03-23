import { createRouter, createWebHistory } from "vue-router";
import Form from "../views/Form.vue";
import Grats from "../views/Grats.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/:pathMatch(.*)', component: Form }],
});

export default router;
