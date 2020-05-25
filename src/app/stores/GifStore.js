import AllGifs from '../repositories/AllGifs';
import Gif from '../domain/Gif';

const allGifs = new AllGifs();
const gif = new Gif();

const GifStore = {
  namespaced: true,
  state: {
    gifs: [gif, gif],
    selectedGif: gif,
    loading: false,
  },
  getters: {
  },
  mutations: {
    buildGifs(state, gifs) {
      state.gifs = gifs;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setGif(state, gif) {
      state.selectedGif = gif;
    }
  },
  actions: {
    getGifs({commit}, query) {
      commit('setLoading', true)
      return allGifs.getBySearchQuery(query)
      .then(gifs => {
        commit('setLoading', false)
        commit('buildGifs', gifs)
        return gifs
      })
      .catch(error => {
        commit('setLoading', false)
        throw error
      })
    },
    selectGif({commit}, gif) {
      commit('setGif', gif)
    }
  },
}
export default GifStore