import Vue from 'vue';
import Vuex from 'vuex';
import leaflet from 'leaflet';
import JmApp from './JmApp.vue';
import store from './store';

console.clear();
Vue.config.productionTip = false;

Vue.use(
  Vuex,
  store,
  leaflet,
);

new Vue({
  render: h => h(JmApp),
  store,
}).$mount('#jm-app');
