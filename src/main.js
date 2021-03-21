import Vue from 'vue';
import Vuex from 'vuex';
import leaflet from 'leaflet';
import JakmatApp from './JakmatApp.vue';
import store from './store';

console.clear();
Vue.config.productionTip = false;

Vue.use(
  Vuex,
  store,
  leaflet,
);

new Vue({
  render: h => h(JakmatApp),
  store,
}).$mount('#jakmat-app');
