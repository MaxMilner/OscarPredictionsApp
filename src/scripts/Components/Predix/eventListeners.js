import submitPredix from "./submitPredix"

const eventListening = {
  submitButton() {
    document.addEventListener("click", (e) => {
      if (e.target && e.target.id === "subPredix")
      console.log("submit to me")
      submitPredix()
    })
  }
}

export default eventListening