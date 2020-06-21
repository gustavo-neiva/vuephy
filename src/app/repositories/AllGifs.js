import GiphyApi from '../services/GiphyApi'
import Axios from 'axios'
import GifsFactory from '../factories/GifsFactory';

export default class AllGifs {
  constructor() {
    this.api = new GiphyApi();
    this.gifsFactory = new GifsFactory();
  }

  getBySearchQuery(query, offset) {
    const searchParams = { query: query, offset: offset }
    const queryUrl = this.api.searchQueryUrl(searchParams)
    return Axios.get(queryUrl)
    .then(({data}) => {
      const Gifs = this.gifsFactory.createFromObjects(data.data)
      return Gifs
    });
  }

}
