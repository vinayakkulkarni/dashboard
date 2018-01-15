// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vue2Leaflet from 'vue2-leaflet';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import App from './App';
import router from './router';
import '../node_modules/leaflet/dist/leaflet.css';

Vue.component('icon', Icon);
Vue.component('v-map', Vue2Leaflet.Map);
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
Vue.component('v-marker', Vue2Leaflet.Marker);
Vue.component('v-geo-json', Vue2Leaflet.GeoJSON);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
