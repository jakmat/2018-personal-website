import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    variable: 0,
    lab: false,
    tabs: [
        {
            title: 'Tech Stack',
            component: 'jakmat-about'
        },
        {
            title: 'Projects',
            component: 'jakmat-projects'
        },
        // {
        //     title: 'Inspirations',
        //     component: 'jakmat-inspirations'
        // },
        // {
        //     title: 'Maps',
        //     component: 'jakmat-maps'
        // },
        // {
        //     title: 'Blog',
        //     component: 'jakmat-blog',
        //     topics: [
        //       'Aleksandrów',
        //       'Łódź',
        //       'Nijmegen',
        //       'Borszczów',
        //       'angielski / słówka',
        //       'niderlandzki / słówka'              
        //     ]
        // },
        // {
        //     title: 'Contact',
        //     component: 'jakmat-contact'
        // },
        {
          title: 'Lab',
          component: 'jakmat-lab'
        }
    ],
    activeContent: 'jakmat-projects',
    lines: [
      {
        id: '1',
        name: 'Doły - Chojny',
        isSelected: false
      },
      {
        id: '2',
        name: 'Teofilów - Dąbrowa',
        isSelected: false
      },
      {
        id: '3',
        name: 'Marysin - Augustów',
        isSelected: false
      },
      {
        id: '4',
        name: 'Helenówek - Dąbrpwa',
        isSelected: false
      },
      {
        id: '5',
        name: 'Żabieniec - Kurczaki',
        isSelected: false
      },
      {
        id: '6',
        name: 'Doły - Kurczaki',
        isSelected: false
      },
      {
        id: '7',
        name: 'Koziny - Niższa',
        isSelected: false
      },
      {
        id: '8',
        name: 'Kochanówka - Lodowa',
        isSelected: false
      },
      {
        id: '9',
        name: 'Olechów - Zdrowie',
        isSelected: false
      },
      {
        id: '10',
        name: 'Olechów - Retkinia',
        isSelected: false
      },
    ],
    selectedLines: []
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
    },
    lines(state) {
      return state.lines;
    }
  },
  mutations: {
    setVariable(state, payload) {
      state.variable = payload;
    },
    setActiveContent(state, payload) {
      state.activeContent = payload;
    },
    changeSelectedLines(state, payload) {
      state.selectedLines = [...payload];
    }
  },
  actions: {
    async changeVariable(context, payload) {
      await context.commit('setVariable', payload);
    },
    changeActiveContent(context, payload) {
      context.commit('setActiveContent', payload);
    }
  },
});
