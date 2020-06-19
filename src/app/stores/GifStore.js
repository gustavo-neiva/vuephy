import AllGifs from '../repositories/AllGifs';
import Gif from '../domain/Gif';

const allGifs = new AllGifs();
const gif = new Gif();

const GifStore = {
  namespaced: true,
  state: {
    gifs: [],
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
      return allGifs.getBySearchQuery(query)
      .then(gifs => {
        commit('buildGifs', gifs)
        return gifs
      })
      .catch(error => {
        throw error
      })
    },
    selectGif({commit}, gif) {
      commit('setGif', gif)
    }
  },
}
export default GifStore