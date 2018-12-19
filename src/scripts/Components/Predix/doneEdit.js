import predixAPIfunctions from "./fetching"
import predixDiv from "./displayPredix";

function doneEditPredix(predixId) {
  let user_idValue = sessionStorage.getItem("user_id")
  let pictureValue = document.querySelector("#editPicture").value
  let directorValue = document.querySelector("#editDirector").value
  let leadActorValue = document.querySelector("#editLeadActor").value
  let leadActressValue = document.querySelector("#editLeadActress").value
  let supActorValue = document.querySelector("#editSupActor").value
  let supActressValue = document.querySelector("#editSupActress").value
  let originalValue = document.querySelector("#editOriginal").value
  let adaptedValue = document.querySelector("#editAdapted").value
  let popularValue = document.querySelector("#editPopular").value
  let animatedValue = document.querySelector("#editAnimated").value
  let foreignValue = document.querySelector("#editForeign").value
  let docValue = document.querySelector("#editDoc").value
  let docShortValue = document.querySelector("#editDocShort").value
  let liveShortValue = document.querySelector("#editLiveShort").value
  let aniShortValue = document.querySelector("#editAniShort").value
  let scoreValue = document.querySelector("#editScore").value
  let songValue = document.querySelector("#editSong").value
  let soundEdValue = document.querySelector("#editSoundEd").value
  let soundMixValue = document.querySelector("#editSoundMix").value
  let productionValue = document.querySelector("#editProduction").value
  let cineValue = document.querySelector("#editCine").value
  let makeupValue = document.querySelector("#editMakeup").value
  let costumeValue = document.querySelector("#editCostume").value
  let editingValue = document.querySelector("#editEditing").value
  let vfxValue = document.querySelector("#editVfx").value

  let userNewPredix = {
    user_id: user_idValue,
    picture: pictureValue,
    director: directorValue,
    leadActor: leadActorValue,
    leadActress: leadActressValue,
    supActor: supActorValue,
    supActress: supActressValue,
    original: originalValue,
    adapted: adaptedValue,
    popular: popularValue,
    animated: animatedValue,
    foreign: foreignValue,
    doc: docValue,
    docShort: docShortValue,
    liveShort: liveShortValue,
    aniShort: aniShortValue,
    score: scoreValue,
    song: songValue,
    soundEd: soundEdValue,
    soundMix: soundMixValue,
    production: productionValue,
    cine: cineValue,
    makeup: makeupValue,
    costume: costumeValue,
    editing: editingValue,
    vfx: vfxValue
  }
predixAPIfunctions.putPredix(userNewPredix, predixId)
.then(() =>
  predixDiv())
}

export default doneEditPredix