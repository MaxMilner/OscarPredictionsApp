import userAPIfunctions from "./fetching";
import hideDiv from "./hideAndShow";
import validatePassword from "./valPwd"
import predixDom from "../Predix/displayPredix";

function loginUser() {
  sessionStorage.clear()
    let email = document.querySelector("#login")
    console.log(email)
  userAPIfunctions.getUser(email.value)
  .then((user) => {
    console.log(user)
    let validated = validatePassword(user);
      if (validated) {
        sessionStorage.setItem("user_id", user.id)
        sessionStorage.setItem("email", email.value)
        hideDiv.hideLoginDiv()
        hideDiv.hideSignUpDiv()
        hideDiv.toggleSignOutDiv()
        predixDom()
          alert("YO DOG CHILI CHEESE")
      } else {
          alert("wrong");
      }
  })
}

export default loginUser