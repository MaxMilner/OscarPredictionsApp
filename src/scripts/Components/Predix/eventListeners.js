import submitPredix from "./submitPredix";
import deletePredix from "./deletePredix";
import doneEditPredix from "./doneEdit";

const eventListening = {
  submitButton() {
    document.addEventListener("click", e => {
      if (e.target.id === "subPredix") console.log("submit to me")
      submitPredix()
    })
  },

  deleteButton(e) {
    console.log(e)
    const predixId = e.target.id;
    console.log("parentid", predixId)
    deletePredix(predixId)
  },

  editButton() {
    document.addEventListener("click", e => {
      if (e.target.id === "editPick") {
        console.log("editing?")
        let id = e.target.className
        let userId = sessionStorage.user_id
        let predixPicture = document.querySelector("#predixPicture")
        let obj = {
          picture: predixPicture.value,
          user_id: userId
        }
      }
    })
  },

  doneButton() {
    document.addEventListener("click", (e) => {
      if (e.target.id === "donePick") {
        console.log("done?")
        console.log(e.target.id)
        e.target.parentElement.id
        console.log("words!", e.target.getAttribute("predictionsId"))
        doneEditPredix(e.target.getAttribute("predictionsId"))
      }
    })
  }
}

export default eventListening
