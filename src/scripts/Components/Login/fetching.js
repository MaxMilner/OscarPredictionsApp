const userAPIfunctions = {
  getUsers(){
      return fetch("http://localhost:8088/users")
      .then(users => users.json())
      .then(parsedUsers => parsedUsers)
  },
  getUser(email){
      return fetch(`http://localhost:8088/users?email=${email}`)
      .then(user => user.json())
      .then(parsedUser => parsedUser[0])
  },
  postUser(user){
      return fetch("http://localhost:8088/users?users" ,{
      method:"POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  })}
}

export default userAPIfunctions