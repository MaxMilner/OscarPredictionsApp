const posterAPIfunctions = {

  getMoviePoster(predixPicture) {
    return fetch("http://www.omdbapi.com/?t=Ex-Drummer&apikey=9f106d04")
    .then(e => e.json())
    // .then( (e) => JSON.stringify(e))
    .then((e) => console.log(e.Poster))
  }
}

export default posterAPIfunctions