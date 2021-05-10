import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// estado global
export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    countDouble(state) {
      return state.count * 2;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrementar(state) {
      state.count--;
    },
  },
});
