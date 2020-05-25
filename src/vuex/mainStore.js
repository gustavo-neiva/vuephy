import Vue from 'vue';
import Vuex from 'vuex';

import GifStore from '../app/stores/GifStore';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      GifStore
    },
  });

export default store;