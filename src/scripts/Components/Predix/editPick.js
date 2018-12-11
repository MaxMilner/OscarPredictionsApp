function editPick(edit) {
  let editForm =
  `<div id="editDiv" class="editDiv">
  <input type="text" id="newPick" class=${edit.id} value="">
  <button id="editPick" class="editPick"></button>
  </div>`
  return editForm
}

export default editPick