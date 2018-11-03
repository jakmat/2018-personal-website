import Vue from 'vue'
import App from './App.vue'
import leaflet from 'leaflet';

Vue.config.productionTip = false

Vue.use(leaflet);

new Vue({
  render: h => h(App),
}).$mount('#app')
