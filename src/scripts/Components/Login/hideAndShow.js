const hideDiv = {

hideLoginDiv() {
    const login = document.getElementById("loginBox")
    login.classList.toggle("hide")
  },

  hideNavBarDiv() {
    const navBar = document.getElementById("navBar")
    navBar.classList.toggle("hide")
  },

  logOut() {
    sessionStorage.clear()
    document.querySelector(".domEntry").innerHTML = ""
      const login = document.getElementById("signUpBox")
        login.classList.toggle("hide")
      const navBar = document.getElementById("navBar")
        navBar.classList.toggle("hide")
  }
}

export default hideDiv