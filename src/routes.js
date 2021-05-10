import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import NaoEncontrado from "@/views/NaoEncontrado";

Vue.use(VueRouter);

// rotas
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/sobre",
    // lazy loading
    component: () => import(/* webpackChunkName: "sobre" */ "@/views/Sobre"),
  },
  // passando parâmetro de url
  {
    path: "/usuario/:id",
    component: () =>
      import(/* webpackChunkName: "usuario" */ "@/views/Usuario"),
  },
  // 404
  {
    path: "/404",
    component: NaoEncontrado,
  },
  {
    path: "*",
    redirect: "/404",
  },
];

// history mode
// https://router.vuejs.org/guide/essentials/history-mode.html
export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
