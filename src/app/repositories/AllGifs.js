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
    return Axios.get(queryUrl)
    .then(({data}) => {
      const Gifs = this.gifsFactory.createFromObjects(data.data)
      return Gifs
    });
  }

}
