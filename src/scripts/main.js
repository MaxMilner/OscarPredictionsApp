import signUser from "./Components/Login/signUser"
import hideDiv from "./Components/Login/hideAndShow"
import loginUser from "./Components/Login/loginUser"
// import eventListening from "./Components/Predix/eventListening"
// import predixDom from "./Components/Predix/displayPredix"

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
let signOut = document.querySelector(".signOut")
// let predix = document.querySelector("#predixDiv")

const session = sessionStorage.getItem("user_id")
  if (session === null) {
      hideDiv.toggleSignOutDiv()
}

  signOut.addEventListener("click", () => {
    hideDiv.signOut()
  } )

  newUsers.addEventListener("click", () => {
    signUser()
    // hideDiv.hideSignUpDiv()
    // hideDiv.hideLoginDiv()
})

  existingUserButton.addEventListener("click", () => {
    loginUser()
    // hideDiv.hideLoginDiv()
})

  // predix.addEventListener("click", () => {
  //   predixDom()
  //   eventListening.submitPredix()
  //   eventListening.deletePredix()
  // })