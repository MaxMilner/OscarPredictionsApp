import hideDiv from "./hideAndShow"

  sessionStorage.clear();
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