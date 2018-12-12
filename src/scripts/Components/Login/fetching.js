const userAPIfunctions = {
  getUsers(){
      return fetch("http://localhost:3000/users")
      .then(users => users.json())
      .then(parsedUsers => parsedUsers)
  },
  getUser(email){
      return fetch(`http://localhost:3000/users?email=${email}`)
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