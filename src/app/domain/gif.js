export default class Gif {
  constructor(id = 'BlVnrxJgTGsUw') {
      this._id = id;
      this._base_url = 'https://i.giphy.com/media/'
      this._suffix = '/200w.gif'
  }

  gifUrl() {
      return `${this._base_url}${this._id}${this._suffix}`
  }

  get id() { this._id }

}