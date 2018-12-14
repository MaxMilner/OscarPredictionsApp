import validatePassword from "./valPwd";

function newLoginUser(user) {
  sessionStorage.clear()
  let validated = validatePassword(user);
  if (validated) {
    sessionStorage.setItem("user_id", user.id)
    sessionStorage.setItem("email", user.email)
      alert("YO DOG CHILI CHEESE")
  } else {
      alert("wrong");
  }
}

export default newLoginUser