import predixAPIfunctions from "./fetching"
import predixDiv from "./displayPredix";

function doneEditPredix() {
  let user_idValue = sessionStorage.user_id
  let pictureValue = document.querySelector("#editPredixPicture").value
  let directorValue = document.querySelector("#editPredixDirector").value
  let leadActorValue = document.querySelector("#editPredixLeadActor").value
  let leadActressValue = document.querySelector("#editPredixLeadActress").value
  let supActorValue = document.querySelector("#editPredixSupActor").value
  let supActressValue = document.querySelector("#editPredixSupActress").value
  let originalValue = document.querySelector("#editPredixOriginal").value
  let adaptedValue = document.querySelector("#editPredixAdapted").value
  let popularValue = document.querySelector("#editPredixPopular").value
  let animatedValue = document.querySelector("#editPredixAnimated").value
  let foreignValue = document.querySelector("#editPredixForeign").value
  let docValue = document.querySelector("#editPredixDoc").value
  let docShortValue = document.querySelector("#editPredixDocShort").value
  let liveShortValue = document.querySelector("#editPredixLiveShort").value
  let aniShortValue = document.querySelector("#editPredixAniShort").value
  let scoreValue = document.querySelector("#editPredixScore").value
  let songValue = document.querySelector("#editPredixSong").value
  let soundEdValue = document.querySelector("#editPredixSoundEd").value
  let soundMixValue = document.querySelector("#editPredixSoundMix").value
  let productionValue = document.querySelector("#editPredixProduction").value
  let cineValue = document.querySelector("#editPredixCine").value
  let makeupValue = document.querySelector("#editPredixMakeup").value
  let costumeValue = document.querySelector("#editPredixCostume").value
  let editingValue = document.querySelector("#editPredixEditing").value
  let vfxValue = document.querySelector("#editPredixVfx").value

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
predixAPIfunctions.patchPredix(userNewPredix)
.then(() =>
  predixDiv())
}

export default doneEditPredix