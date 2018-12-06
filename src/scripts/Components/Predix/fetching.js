// const predixAPIfunctions = {

//   getPredix() {
//     return fetch("")
//     .then(predix => predix.json() )
//     .then(parsedPredix => parsedPredix)
//   },

//   postPredix() {
//     return fetch("", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(predix)
//     })
//   },

//   patchPredix() {
//     return fetch (``, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(predix)
//     })
//     .then(r => r.json() )
//     .then(r => console.log(r) )
//   },

//   deletePredix() {
//     return fetch(``, {
//       method: "DELETE",
//     })
//       .then(deleting => deleting.json() )
//   }
// }

// export default predixAPIfunctions