import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Secure from "../views/Secure.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: {
      name: "Login"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated === false) {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: "/secure",
    name: "Secure",
    component: Secure,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated === true) {
        next();
      } else {
        next(false);
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
