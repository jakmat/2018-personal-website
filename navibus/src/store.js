import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    variable: 0,
    tabs: [
        {
            title: 'About Me',
            component: 'content-about'
        },
        {
            title: 'Projects',
            component: 'content-projects'
        },
        {
            title: 'Inspirations',
            component: 'content-inspirations'
        },
        {
            title: 'Maps',
            component: 'content-maps'
        },
        {
            title: 'Contact',
            component: 'content-contact'
        }
    ],
    activeContent: 'content-projects'
  },
  getters: {
    variable(state) {
      return state.variable;
    },
    tabs(state) {
      return state.tabs;
    },
    activeContent(state) {
      return state.activeContent;
    }
  },
  mutations: {
    setVariable(state, payload) {
      state.variable = payload;
    },
    setActiveContent(state, payload) {
      state.activeContent = payload;
      console.log('Active content:', state.activeContent);
    }
  },
  actions: {
    async changeVariable(context, payload) {
      console.log(payload);
      await context.commit('setVariable', payload);
    },
    changeActiveContent(context, payload) {
      context.commit('setActiveContent', payload);
    }
  },
});
