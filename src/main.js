import Vue from 'vue'
import store from './vuex/mainStore';
import App from './App.vue';
import VueMasonry from 'vue-masonry-css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
Vue.use(VueMasonry);

new Vue({
  el: '#app',
  render: h => h(App),
  store
})