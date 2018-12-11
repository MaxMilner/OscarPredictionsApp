const predixAPIfunctions = {
  getPredix() {
    return fetch("http://localhost:3000/predictions")
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

  patchPredix(value, id) {
    console.log("patching?", value, id)
    return fetch(`http://localhost:3000/predictions/${predixId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value)
    })
    .then(nothing => nothing.json())
    .then(nothing => console.log(nothing))
  }

//   editPredix(value, predixId) {
//     console.log("editing", predixId);
//     return fetch(`http://localhost:3000/predictions/${predixId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(value)
//     })
//     .then(x => x.json())
//     .then(x => console.log(x))
//   }
}

export default predixAPIfunctions
