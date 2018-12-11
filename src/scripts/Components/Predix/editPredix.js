// import predixAPIfunctions from "./fetching";
// import predixDom from "./displayPredix";

// function editPredix(value, predixId) {
//   console.log("editing?", value, predixId)
//   predixAPIfunctions.editPredix(value, predixId)
//   .then(() => {
//     predixDom()
//   })
// }

// export default editPredix;


import predixAPIfunctions from "./fetching"
import predixDom from "./displayPredix"

function editPredix(value, id) {
  console.log("edit predix?", value, id)
  predixAPIfunctions.patchPredix(value, id)
    .then(() => {
      document.querySelector(".domEntry").innerHTML = ""
      predixDom()
    })
}