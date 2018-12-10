import predixAPIfunctions from "./fetching"
import predixDiv from "./predix"
import predixFormDiv from "./formPredix"

let domEntry = document.getElementById("domEntry")
  function domPredix(parsedPredix) {
    parsedPredix.forEach(predix => {
      let predixContent = predixDiv(predix)
      domEntry.innerHTML += predixContent
    })
  }

  let predixDom = () => {
    domEntry.innerHTML=""
    // domEntry.innerHTML += predixFormDiv()
    predixAPIfunctions.getPredix()
    .then(parsedPredix => {
      console.log(parsedPredix)
      return domPredix(parsedPredix)})
  }

  export default predixDom