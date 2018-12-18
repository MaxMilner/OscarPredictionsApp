import validatePassword from "./valPwd";

function newLoginUser(user) {
  sessionStorage.clear()
  let validated = validatePassword(user);
  if (validated) {
    sessionStorage.setItem("user_id", user.id)
    sessionStorage.setItem("username", user.username)
      alert("YO DOG CHILI CHEESE")
  } else {
      alert("wrong");
  }
}

export default newLoginUser