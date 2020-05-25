export default class Gifs {
  constructor({gif_list = []}) { 
    this._gif_list = gif_list;
  }

  get gifList() { return this._gif_list }

}