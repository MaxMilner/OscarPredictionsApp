import submitPredix from "./submitPredix"

const eventListening = {
  submitButton() {
    document.addEventListener("click", (e) => {
      if (e.target && e.target.id === "subPredix")
      console.log("submit to me")
      submitPredix()
    })
  },

  deleteButton() {
    document.addEventListener("click", (e) => {
      if (e.target && e.target.id === "delPredix") {
        let predixIdNumber = e.target.className
        deletePredix(predixIdNumber)
      }
    })
  }

}

export default eventListening