import predixAPIfunctions from "./fetching"
import predixDom from "./displayPredix";

function submitPredix() {
  let user_idValue = sessionStorage.user_id
  let pictureValue = document.querySelector("#picture").value
  let directorValue = document.querySelector("#director").value
  let leadActorValue = document.querySelector("#leadActor").value
  let leadActressValue = document.querySelector("#leadActress").value
  let supActorValue = document.querySelector("#supActor").value
  let supActressValue = document.querySelector("#supActress").value
  let originalValue = document.querySelector("#original").value
  let adaptedValue = document.querySelector("#adapted").value
  let popularValue = document.querySelector("#popular").value
  let animatedValue = document.querySelector("#animated").value
  let foreignValue = document.querySelector("#foreign").value
  let docValue = document.querySelector("#doc").value
  let docShortValue = document.querySelector("#docShort").value
  let liveShortValue = document.querySelector("#liveShort").value
  let aniShortValue = document.querySelector("#aniShort").value
  let scoreValue = document.querySelector("#score").value
  let songValue = document.querySelector("#song").value
  let soundEdValue = document.querySelector("#soundEd").value
  let soundMixValue = document.querySelector("#soundMix").value
  let productionValue = document.querySelector("#production").value
  let cineValue = document.querySelector("#cine").value
  let makeupValue = document.querySelector("#makeup").value
  let costumeValue = document.querySelector("#costume").value
  let editingValue = document.querySelector("#editing").value
  let vfxValue = document.querySelector("#vfx").value

  let userPredix = {
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
predixAPIfunctions.postPredix(userPredix)
.then(() =>
  predixDom())
}

export default submitPredix