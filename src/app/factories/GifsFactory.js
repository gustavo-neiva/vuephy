import GiphyParser from '../services/GiphyParser';
import Gif from '../domain/Gif';

export default class GifsFactory {
  constructor() {
      this.giphyParser = new GiphyParser();
    }
  createFromObjects(objects) {
    let gifs = objects.map(object => {
      let gifParams = this.giphyParser.parse(object);
      let gifObject = new Gif(gifParams);
      return gifObject
    });
    return gifs
  }
}