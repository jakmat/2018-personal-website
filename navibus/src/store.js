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
            component: 'jm-about'
        },
        {
            title: 'Projects',
            component: 'jm-projects'
        },
        // {
        //     title: 'Inspirations',
        //     component: 'jm-inspirations'
        // },
        // {
        //     title: 'Maps',
        //     component: 'jm-maps'
        // },
        // {
        //     title: 'Blog',
        //     component: 'jm-blog',
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
        //     component: 'jm-contact'
        // },
        {
          title: 'Lab',
          component: 'jm-lab'
        }
    ],
    activeContent: 'jm-projects',
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
      console.log('Active content:', state.activeContent);
    },
    changeSelectedLines(state, payload) {
      state.selectedLines = [...payload];
      console.clear();
      console.log('selected lines:', state.selectedLines);
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
