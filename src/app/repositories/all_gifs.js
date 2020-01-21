import GiphyApi from '../services/giphy_api'
import Axios from 'axios'

export default class AllGifs {
  constructor() { 
    this.api = new GiphyApi();
  }

  getBySearchQuery(query) {
    const queryUrl = this.api.searchQueryUrl(query)
    console.log(queryUrl)
    return Axios.get(queryUrl)
    .then(({data}) => {
      console.log(data)
    });
  }

  getGifMedia(gifId) {
    return Axios.get(this.api.queryUrl(gifId))
    .then(({data}) => {
      console.log(data)
    });
  } 

}
