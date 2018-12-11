function signOutCreate() {
  sessionStorage.clear()
  let signOutButton =
  `<article id="signOut" class="signOut">
    <div id="signOutBox" class="signOutBox hide">
      <input type="button" id="signOutButton" class="signOutButton" value="Sign Out">
    </div>
   </article>`
  return signOutButton
}

export default signOutCreate