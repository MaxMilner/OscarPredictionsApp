import predixAPIfunctions from "./fetching"
import predixDiv from "./predix"

let domEntry = document.getElementById("domEntry")
  function domPredix(parsedPredix) {
    parsedPredix.forEach(predix => {
      let predixContent = predixDiv(predix)
      domEntry.innerHTML += predixContent
    })
  }

  let predixDom = () => {
    domEntry.innerHTML=""
    predixAPIfunctions.getPredix()
    .then(parsedPredix => {
      console.log(parsedPredix)
      return domPredix(parsedPredix)})
  }

  export default predixDom