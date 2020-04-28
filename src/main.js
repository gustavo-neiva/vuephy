import Vue from 'vue'
import store from './vuex/mainStore';
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
