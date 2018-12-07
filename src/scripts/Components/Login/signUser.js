import userAPIfunctions from "./fetching"
import hideDiv from "./hideAndShow";
// import loginUser from "./loginUser"

function signUser() {
  sessionStorage.clear()
  let user = {
      username: document.querySelector("#username").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value
   }
  userAPIfunctions.postUser(user)
    .then((response) => response.json()
    )
    hideDiv.hideLoginDiv()
    hideDiv.hideSignUpDiv()
    hideDiv.toggleSignOutDiv()
}

export default signUser