import signUser from "./Components/Login/signUser"
import hideDiv from "./Components/Login/hideAndShow"
import loginUser from "./Components/Login/loginUser"
import appearForm from "./Components/Predix/appearForm"
import predixDom from "./Components/Predix/displayPredix"
import submitPredix from "./Components/Predix/submitPredix"

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
let signOut = document.getElementById("signOut")
// const predixFormDiv = document.getElementById("predixFormBox")



const session = sessionStorage.getItem("user_id")
  if (session === null) {
      hideDiv.toggleSignOutDiv()
  }

  signOut.addEventListener("click", () => {
    console.log("sign out")
    hideDiv.signOut()
  })

/* After signing up, Predictions form appears */
  newUsers.addEventListener("click", () => {
    console.log("signed up")
    signUser()
    appearForm()
/* Making Submit event listener */
    let submit = document.getElementById("subPredix")
    submit.addEventListener("click", () => {
      console.log("submitted")
      submitPredix()
      predixDom()
      hideDiv.hidePredixFormDiv()
    })
  })

/* Upon login the user can see their predictions */
  existingUserButton.addEventListener("click", () => {
    loginUser()
    predixDom()
  })