import predixAPIfunctions from "./fetching"
import predixDom from "./displayPredix"

function deletePredix(predixId) {
  predixAPIfunctions.deletePredix(predixId)
  .then(() => {
    predixDom()
  })
}

export default deletePredix