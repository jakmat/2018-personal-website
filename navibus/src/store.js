import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    variable: 0,
    lab: true,
    tabs: [
        {
            title: 'Tech Stack',
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
            title: 'Blog',
            component: 'content-blog',
            topics: [
              'Aleksandrów',
              'Łódź',
              'Nijmegen',
              'Borszczów',
              'angielski / słówka',
              'niderlandzki / słówka'              
            ]
        },
        {
            title: 'Contact',
            component: 'content-contact'
        },
        {
          title: 'Lab',
          component: 'content-lab'
        }
    ],
    activeContent: 'content-projects'
  },
  getters: {
    variable(state) {
      return state.variable;
    },
    lab(state) {
      return state.lab;
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
