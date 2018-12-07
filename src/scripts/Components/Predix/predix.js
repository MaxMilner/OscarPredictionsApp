function predixDiv(predix) {
  console.log(predix)
  let userPredix =
  `<div id="predixDiv" class="predixDiv">
    <p>Best Picture: ${predix.picture}</p>
    <p>Best Director: ${predix.director}</p>
    <p>Best Leading Actor: ${predix.actor}</p>
    <p>Best Leading Actress: ${predix.actress}</p>
    <input type="button" id="delPredix" class=${predix.id} value="Delete">
  </div>`
return userPredix
}

export default predixDiv