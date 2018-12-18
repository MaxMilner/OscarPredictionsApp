import userAPIfunctions from "./fetching";
import hideDiv from "./hideAndShow";
import validatePassword from "./valPwd"
import predixDom from "../Predix/displayPredix";

function loginUser() {
  sessionStorage.clear()
    let username = document.querySelector("#login")
    console.log(username)
  userAPIfunctions.getUser(username.value)
  .then((user) => {
    console.log(user)
    let validated = validatePassword(user);
      if (validated) {
        sessionStorage.setItem("user_id", user.id)
        sessionStorage.setItem("username", username.value)
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