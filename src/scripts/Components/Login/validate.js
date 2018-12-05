// function validateSignUp() {

//   const email = document.getElementById("#email");
//   const username = document.getElementById("#username");
//   const password = document.getElementById("#password");
//     console.log(email.value);
//     removeErrorMessage();
//     const valid = true;
//     if (email.value.legnth = 0) {
//       email.className=".wrong-input";
//       email.nextElementSibling.innerHTML="Please insert your email";
//       valid = false
//     }
//     if (username.value.legnth < 5) {
//       username.className=".wrong-input";
//       username.nextElementSibling.innerHTML="Username gotta be longer than 5 characters";
//       valid = false
//     }
//     if (password.value.legnth < 5) {
//       password.className=".wrong-input";
//       password.nextElementSibling.innerHTML="Password gotta be longer than 5 characters";
//       valid = false
//     }
//     return valid;
// }
// function removeErrorMessage() {
//   const errorinput = document.querySelectorAll(".wrong-input");
//   [].forEach.call(errorinput, function(element) {
//     element.classList.remove(".wrong-input")
//   });
//   const errorpara = document.querySelectorAll(".error");
//   [].forEach.call(errorpara, function(element) {
//     element.innerHTML="";
//   })
// }
