class api {

  url: URL

  constructor(url: string) {
    this.url = new URL(url)
  }

  calculatePrice(width: Number, height: Number, weight: Number, from: string, to: string) {
    return fetch(this.url, {
      method: "GET",
      body: JSON.stringify({width, height, weight, from, to})
    })
  }
}

