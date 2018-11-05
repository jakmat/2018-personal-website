import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import leaflet from 'leaflet';
import { modules } from './store';

console.log(modules)

Vue.config.productionTip = false


Vue.use(
  Vuex,
  store,
  leaflet
  );
  
  const store = new Vuex.Store(modules);

new Vue({
  Vuex,
  store,
  render: h => h(App),
}).$mount('#app')