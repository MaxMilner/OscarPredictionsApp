function validatePassword(user) {
  const password = document.querySelector("#password")
  const passwordValue = document.querySelector("#passwordLogin")
  console.log(password.value)
    if (user.password === passwordValue.value || user.password === password.value) {
      return true
    } else {
      return false
    }
}

export default validatePassword