import submitPredix from "./submitPredix"
import deletePredix from "./deletePredix"
import editPick from "./editPick";

const eventListening = {
  submitButton() {
    document.addEventListener("click", (e) => {
      if (e.target && e.target.id === "subPredix")
      console.log("submit to me")
      submitPredix()
    })
  },

  deleteButton(e) {
      const predixId = e.target.parentNode.id
      console.log("parentid", predixId)
        deletePredix(predixId)
    },

  editButton() {
    console.log("clicked editing?")
    document.addEventListener("click", (e) => {
      if (e.target && e.target.id === "editPick") {
        let id = e.target.className
        let userId = sessionStorage.user_id
        let predixPicture = document.querySelector("#predixPicture")
        let obj = {
          picture: predixPicture.value,
          user_id: userId
        }
        console.log("editing?", obj)
        editPick(obj, id)
      }
    })
  }
}

export default eventListening