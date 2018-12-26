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
    const signOut = document.getElementById("signOut")
    signOut.classList.toggle("hide")
  },

  hidePredixFormDiv() {
    console.log("predix form hide?")
    const predixForm = document.getElementById("predixFormBox")
    predixForm.innerHTML = ""
  },

  signOut() {
    sessionStorage.clear()
    domEntry.innerHTML = ""
      const login = document.getElementById("loginBox")
        login.classList.toggle("hide")
      const signUp = document.getElementById("signUpBox")
        signUp.classList.toggle("hide")
        this.toggleSignOutDiv()
  },

  hideShowEdits() {
    pickChange = document.getElementById("editDiv")
      if (pickChange.display === "none") {
        pickChange.style.display = "block"
      } else {
        pickChange.style.display = "none";
      }
  }

}

export default hideDiv