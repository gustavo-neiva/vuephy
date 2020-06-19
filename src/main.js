import Vue from 'vue'
import store from './vuex/mainStore';
import App from './App.vue';
import VueMasonry from 'vue-masonry-css'

Vue.use(VueMasonry);

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
