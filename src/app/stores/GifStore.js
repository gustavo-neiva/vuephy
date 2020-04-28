import AllGifs from '../repositories/AllGifs';
import Gif from '../domain/Gif';

const allGifs = new AllGifs();
const gif = new Gif();

const GifStore = {
  namespaced: true,
  state: {
    query: '',
    gifId: null,
    gifs: [gif,gif,gif,gif,gif,gif,gif,gif,gif,gif,gif,],
    selectedGif: gif,
  },
  getters: {
  },
  actions: {
    getGifs({commits}, query) {
      allGifs.getBySearchQuery(query).then(data => {
        console.log(data)
        commits('BuildGifs')
      })
    }
  },
  mutations: {
  }
}
export default GifStore