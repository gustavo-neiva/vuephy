import AllGifs from '../repositories/AllGifs';
import Gif from '../domain/Gif';

const allGifs = new AllGifs();
const defaultGif = new Gif();

const GifStore = {
  namespaced: true,
  state: {
    gifs: [],
    selectedGif: defaultGif,
    loading: false,
    lastQuery: '',
    offset: 0,
  },
  getters: {
  },
  mutations: {
    appendGifs(state, gifs) {
      state.gifs = state.gifs.concat(gifs);
    },
    buildGifs(state, gifs) {
      state.gifs = gifs;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setGif(state, gif) {
      state.selectedGif = gif;
    },
    setLastQuery(state, lastQuery) {
      state.lastQuery = lastQuery;
    },
    addOffset(state) {
      state.offset = state.gifs.length;
    }
  },
  actions: {
    getGifs({commit, state}, query) {
      return allGifs.getBySearchQuery(query, state.offset)
      .then(gifs => {
        commit('setLastQuery', query)
        commit('buildGifs', gifs)
        commit('addOffset')
        return gifs
      })
      .catch(error => {
        throw error
      })
    },
    selectGif({commit}, gif) {
      commit('setGif', gif)
    },
    searchMore({commit, state}) {
      return allGifs.getBySearchQuery(state.lastQuery, state.offset)
      .then(gifs => {
        commit('appendGifs', gifs)
        commit('addOffset')
        return gifs
      })
      .catch(error => {
        throw error
      })
    }
  },
}
export default GifStore