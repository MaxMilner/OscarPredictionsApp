import userAPIfunctions from "./fetching"
import hideDiv from "./hideAndShow"

let auth = {

loginUser() {
  sessionStorage.clear()
    let email = document.querySelector("#login")
    console.log(email.value)
      userAPIfunctions.getUser(email.value)
      .then((user) => {
        console.log(user)
       let validated = validatePassword(user)
        if (validated) {
          sessionStorage.setItem("user_id", user.id)
          sessionStorage.setItem("email", email.value)
          hideDiv.hideLoginDiv()
          hideDiv.hideSignUpDiv()
          hideDiv.toggleSignOutDiv()
            alert("YO DOG CHILI CHEESE")
        } else {
            alert("wrong")
        }
      })
},

registerLogin(user) {
    console.log(registerLogin(user))
    sessionStorage.clear()
    let validated = validatePassword(user)
    if (validated) {
    sessionStorage.setItem("user_id", user.id)
    sessionStorage.setItem("email", email.value)
    hideDiv.hideLoginDiv()
    hideDiv.hideSignUpDiv()
    hideDiv.toggleSignOutDiv()
      alert("YO DOG CHILI CHEESE")
  } else {
      alert("wrong")
  }
},

validatePassword(user) {
  const passwordValue = document.querySelector("#passwordLogin")
    console.log(passwordValue.value)
    if (user.password === passwordValue.value) {
      return true
    } else {
      return false
    }
}

}

export default auth