import GiphyApi from '../services/GiphyApi'
import Axios from 'axios'
import GifsFactory from '../factories/GifsFactory';

export default class AllGifs {
  constructor() {
    this.api = new GiphyApi();
    this.gifsFactory = new GifsFactory();
  }

  getBySearchQuery(query) {
    const queryUrl = this.api.searchQueryUrl(query)
    console.log(queryUrl)
    return Axios.get(queryUrl)
    .then(({data}) => {
      console.log(data.data)
      const Gifs = this.gifsFactory.createFromObjects(data.data)
      return Gifs
    });
  }

  getGifMedia(gifId) {
    return Axios.get(this.api.queryUrl(gifId))
    .then(({data}) => {
      console.log(data)
    });
  }

}
