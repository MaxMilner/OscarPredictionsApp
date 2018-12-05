import userAPIfunctions from "./fetching"
// import loginUser from "./loginUser"

function signUser() {
  let user = {
      username: document.querySelector("#username").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value
   }
  userAPIfunctions.postUser(user)
    .then((response) => response.json()
    )
}

export default signUser