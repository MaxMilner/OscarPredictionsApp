const hideDiv = {

  hideLoginDiv() {
    const login = document.getElementById("loginBox")
    login.classList.toggle("hide")
  },

  hideSignUpDiv() {
    const signUp = document.getElementById("signUpBox")
    signUp.classList.toggle("hide")
  },

  toggleSignOutDiv() {
    console.log("toggle working?")
    const signOut = document.getElementById("signOut")
    signOut.classList.toggle("hide")
  },

  hidePredixFormDiv() {
    // console.log(newPredix)
    const predixForm = document.getElementById("predixFormBox")
    // predixForm.classList.toggle("hide")
    predixForm.innerHTML = ""
    // console.log(predixForm)
  },

  signOut() {
    sessionStorage.clear()
      const login = document.getElementById("loginBox")
        login.classList.toggle("hide")
      const signUp = document.getElementById("signUpBox")
        signUp.classList.toggle("hide")
        this.toggleSignOutDiv()
  }
}

export default hideDiv