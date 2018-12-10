import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    variable: 0,
  },
  getters: {
    variable(state) {
      return state.variable;
    },
  },
  mutations: {
    setVariable(state, payload) {
      state.variable = payload;
    },
  },
  actions: {
    async changeVariable(context, payload) {
      console.log(payload);
      await context.commit('setVariable', payload);
    },
  },
});
