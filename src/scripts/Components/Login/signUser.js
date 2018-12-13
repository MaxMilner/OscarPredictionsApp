import userAPIfunctions from "./fetching"
import hideDiv from "./hideAndShow";
import auth from "./loginUser"

function signUser() {
  sessionStorage.clear()
  let user = {
      username: document.querySelector("#username").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value
   }
  userAPIfunctions.postUser(user)
    .then((response) => response.json()
    .then((user) => auth.registerLogin(user))
    )
    hideDiv.hideLoginDiv()
    hideDiv.hideSignUpDiv()
    hideDiv.toggleSignOutDiv()
    // sessionStorage.setItem("user_id")
    // sessionStorage.setItem("email")
}

export default signUser