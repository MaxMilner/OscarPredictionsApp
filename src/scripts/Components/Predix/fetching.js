const predixAPIfunctions = {
  getUserRunPredix() {
    let id = sessionStorage.getItem("user_id")
  if (id === null) {
  } else {
   return this.getPredix(id)
  }
  },

  getPredix(id) {
    return fetch(`http://localhost:3000/predictions?user_id=${id}`)
      .then(predix => predix.json())
      .then(parsedPredix => parsedPredix);
  },

  postPredix(predix) {
    console.log("postin up", predix);
    return fetch("http://localhost:3000/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(predix)
    })
  },

  deletePredix(predixId) {
    console.log("deleting", predixId);
    return fetch(`http://localhost:3000/predictions/${predixId}`, {
      method: "DELETE"
    }).then(x => x.json())
  },

  putPredix(value, predixId) {
    console.log("put?", value, predixId)
    return fetch(`http://localhost:3000/predictions/${predixId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value)
    })
    .then(nothing => nothing.json())
    .then(nothing => console.log(nothing))
  }
}

export default predixAPIfunctions
