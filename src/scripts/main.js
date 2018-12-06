import signUser from "./Components/Login/signUser"
import hideDiv from "./Components/Login/hideAndShow";
import loginUser from "./Components/Login/loginUser"

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const logout = document.querySelector("#logout")

  logout.addEventListener("click", () => {
    hideDiv.logout()
})

  newUsers.addEventListener("click", () => {
    signUser()
})

  existingUserButton.addEventListener("click", () => {
    loginUser()
})