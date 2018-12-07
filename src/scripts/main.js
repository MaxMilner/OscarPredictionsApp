import signUser from "./Components/Login/signUser"
import hideDiv from "./Components/Login/hideAndShow"
import loginUser from "./Components/Login/loginUser"
import appearForm from "./Components/Predix/appearForm"
// import eventListening from "./Components/Predix/eventListeners"
// import submitPredix from "./Components/Predix/submitPredix";
import predixDom from "./Components/Predix/displayPredix";
// import predixFormDiv from "./Components/Predix/formPredix";

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
let signOut = document.getElementById("signOut")
// let subPredix = document.getElementById("subPredix")

const session = sessionStorage.getItem("user_id")
  if (session === null) {
      hideDiv.toggleSignOutDiv()
}

  signOut.addEventListener("click", () => {
    hideDiv.signOut()
  } )

  newUsers.addEventListener("click", () => {
    signUser()

})

  existingUserButton.addEventListener("click", () => {
    loginUser()
    predixDom()
})

// subPredix.addEventListener("click", () => {
//   predixDom()
//   submitPredix()
//   eventListening.submitPredix()
// })

/* Making the predixForm appear */
let signUp = document.getElementById("signUpButton")
  signUp.addEventListener("click", () => {
    console.log("buttonClicked")
    appearForm()
})