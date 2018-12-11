import signUser from "./Components/Login/signUser"
import hideDiv from "./Components/Login/hideAndShow"
import loginUser from "./Components/Login/loginUser"
import appearForm from "./Components/Predix/appearForm"
import predixDom from "./Components/Predix/displayPredix"
import submitPredix from "./Components/Predix/submitPredix"
import eventListening from "./Components/Predix/eventListeners"
// import editButton from "./Components/Predix/editListeners"

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
let signOut = document.getElementById("signOut")
// let pick = document.getElementById("editPick")

const session = sessionStorage.getItem("user_id")
  if (session === null) {
      hideDiv.toggleSignOutDiv()
  }

  signOut.addEventListener("click", () => {
    console.log("signing out?")
    hideDiv.signOut()
  })

/* After Signing Up, Predictions Form appears */
  newUsers.addEventListener("click", () => {
    console.log("signing up?")
    signUser()
    appearForm()
    hideDiv.hideSignUpDiv()
    hideDiv.hideLoginDiv()
    hideDiv.toggleSignOutDiv()
/* Making Submit event listener so Predictions can be Submitted to DOM */
    let submit = document.getElementById("subPredix")
    submit.addEventListener("click", () => {
      console.log("submitted?")
      submitPredix()
      predixDom()
      hideDiv.hidePredixFormDiv()
    })
  })

/* Upon login the user can see their predictions */
  existingUserButton.addEventListener("click", () => {
    console.log("logging in?")
    loginUser()
    predixDom()
    eventlistening.editButton()
  })

// pick.addEventListener("click", () => {
//   console.log("new pick?")
//   eventListening.editButton()
// })