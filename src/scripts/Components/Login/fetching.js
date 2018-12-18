const userAPIfunctions = {
  getUsers(){
      return fetch("http://localhost:3000/users")
      .then(users => users.json())
      .then(parsedUsers => parsedUsers)
  },
  getUser(username) {
    console.log(username)
      return fetch(`http://localhost:3000/users?username=${username}`)
      .then(user => user.json())
      .then(parsedUser => parsedUser[0])
  },
  postUser(user){
      return fetch("http://localhost:3000/users?users" , {
      method:"POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  })}
}

export default userAPIfunctions