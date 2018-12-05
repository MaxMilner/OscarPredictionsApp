import userAPIfunctions from "./fetching"
import loginUser from "./loginUser"

function signUser() {
  let login = document.querySelector("#login")
  let password = document.querySelector("#password")
  let obj={
       email:"",
       password:""
   }
   obj.email = (login.value)
   obj.password = (password.value)
    userAPIfunctions.postUser(obj)
    .then((response) => response.json()
    .then((user) => loginUser(user))
    )
}

export default signUser