const hideDiv = {

  hideLoginDiv() {
    const login = document.getElementById("loginBox")
    login.classList.toggle("hide")
  },

  hideSignUpDiv() {
    const signUp = document.getElementById("signUpBox")
    signUp.classList.toggle("hide")
  },

logout() {
    sessionStorage.clear()
    document.querySelector(".domEntry").innerHTML = ""
      const login = document.getElementById("loginBox")
        login.classList.toggle("hide")
      const signUp = document.getElementById("signUpBox")
        signUp.classList.toggle("hide")
  }
}

export default hideDiv