import Vue from 'vue';
import Vuex from 'vuex';
import leaflet from 'leaflet';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(
  Vuex,
  store,
  leaflet,
);

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
