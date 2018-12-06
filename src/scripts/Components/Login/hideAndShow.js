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
    const signOut = document.querySelector("#signOut")
    signOut.classList.toggle("hide")
  },

  signOut() {
    sessionStorage.clear()
    document.querySelector(".domEntry").innerHTML = ""
      const login = document.getElementById("loginBox")
        login.classList.toggle("hide")
      const signUp = document.getElementById("signUpBox")
        signUp.classList.toggle("hide")
        this.toggleSignOutDiv()
  }
}

export default hideDiv