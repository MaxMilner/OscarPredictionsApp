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
        let pictureName = document.querySelector("newPick")
        let obj = {
          picture: pictureName.value,
          user_id: userId
        }
        console.log("editing?", obj)
        editPick(obj, id)
      }
    })
  }

//   editButton = (v, e) => {
//       const predixId = e.target.parentNode.id
//       // const value = v.target.
//       console.log("hi")
//         editPredix(v, predixId)
//   }
}
export default eventListening