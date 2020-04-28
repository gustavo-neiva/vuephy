export default class GiphyApi {
  constructor(
    api_key = "btrAmYnPogIdOxAztZfRL2JrUT7Y5Ofs", 
    api_url = "https://api.giphy.com/v1/gifs/", 
    type = "search", 
    limit = 10, 
    offset = 0, 
    rating = "G", 
    lang = "en"
    ) {
    this.api_url   = api_url;
    this.api_key   = api_key
    this.type      = type
    this.limit     = limit
    this.offset    = offset
    this.rating    = rating
    this.lang      = lang
  }

  mediaUrl(mediaId) {
    return `https://media1.giphy.com/media/${mediaId}/200.gif`;
  }
  
  searchQueryUrl(query) {
    return `${this._apiUrl()}&q=${query}`
  }
  
  _apiUrl() {
    return `${this.api_url}${this.type}?api_key=${this.api_key}&limit=${this.limit}&offset=${this.offset}&rating=${this.rating}&lang=${this.lang}`
  }

}
