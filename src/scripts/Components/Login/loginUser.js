import userAPIfunctions from "./fetching"
import hideDiv from "./hideAndShow"

function loginUser() {
  sessionStorage.clear()
    let email = document.querySelector("#login")
      userAPIfunctions.getUser(email.value)
      .then((user) => {
       let validated = validatePassword(user)
        if (validated) {
          sessionStorage.setItem("user_id", user.id)
          sessionStorage.setItem("email", email.value)
          hideDiv.hideLoginDiv()
          hideDiv.hideNavBarDiv()
            alert("YO DOG CHILI CHEESE")
        } else {
            alert("iNcOrReCt PaSsWoRd")
          }
      })
}

function validatePassword(user) {
  const passwordValue = document.querySelector("#passwordLogin")
    console.log(passwordValue.value)
    if (user.password === passwordValue.value) {
      return true
    } else {
      return false
    }
}

export default loginUser