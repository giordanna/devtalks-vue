import Vue from "vue";
import App from "@/App.vue";
import "@/index.css";
import Vuelidate from "vuelidate";
import store from "@/store";
import router from "@/routes";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
