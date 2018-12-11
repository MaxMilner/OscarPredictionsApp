import predixAPIfunctions from "./fetching"
import predixDiv from "./predix"
import eventListening from "./eventListeners"

let domEntry = document.getElementById("domEntry")
  function domPredix(parsedPredix) {
    parsedPredix.forEach(predix => {
      let predixContent = predixDiv(predix)
      domEntry.innerHTML += predixContent
    })
    assignDeleteListener()
    // assignEditListener()
  }

  function assignDeleteListener() {
    let deleting = document.getElementById("delPredix")
      deleting.addEventListener("click", (e) => {
        console.log("deleting?")
         eventListening.deleteButton(e)
       })
  }

  // function assignEditListener() {
  //   let editing = document.getElementById("edPredix")
  //     editing.addEventListener("click", (e) => {
  //       console.log("editing?")
  //       let v = document.getElementById("1").value
  //       eventListening.editButton(v, e)
  //     })
  // }

  let predixDom = () => {
    domEntry.innerHTML=""
    predixAPIfunctions.getPredix()
    .then(parsedPredix => {
      console.log(parsedPredix)
      return domPredix(parsedPredix)})
  }

  export default predixDom