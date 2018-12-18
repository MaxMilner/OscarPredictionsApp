import userAPIfunctions from "./fetching"
import hideDiv from "./hideAndShow"
import newLoginUser from "./newLogin"

function signUser() {
  sessionStorage.clear()
  let user = {
      username: document.querySelector("#username").value,
      password: document.querySelector("#password").value
  }
  userAPIfunctions.postUser(user)
    .then((response) => response.json())
    .then((user) => newLoginUser(user))
    hideDiv.hideLoginDiv()
    hideDiv.hideSignUpDiv()
    hideDiv.toggleSignOutDiv()
}

export default signUser