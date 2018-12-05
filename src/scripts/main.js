import signUser from "./Components/Login/signUser"
import loginUser from "./Components/Login/loginUser"
import hideDiv from "./Components/Login/hideAndShow";

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const logout = document.querySelector("#logOutNav")

  logout.addEventListener("click", () => {
    hideDiv.LogOut()
})

  newUsers.addEventListener("click", () => {
    signUser()
})

  existingUserButton.addEventListener("click", () => {
    loginUser()
})