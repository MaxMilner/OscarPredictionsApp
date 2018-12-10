const predixAPIfunctions = {

  getPredix() {
    return fetch("http://localhost:3000/predictions")
    .then(predix => predix.json() )
    .then(parsedPredix => parsedPredix)
  },

  postPredix(predix) {
  console.log("postin up", predix)
    return fetch("http://localhost:3000/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(predix)
  })
  }
}

export default predixAPIfunctions