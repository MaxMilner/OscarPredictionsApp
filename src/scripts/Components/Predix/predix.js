function predixDiv(predix) {
  console.log(predix)
  let userPredix =
  `<div id="predixDiv" class="predixDiv">
    <p>Best Picture: ${predix.picture}</p>
    <p>Best Director: ${predix.director}</p>
    <p>Best Leading Actor: ${predix.actor}</p>
    <p>Best Leading Actress: ${predix.actress}</p>
    <p>Best Supporting Actor: ${predix.supActor}</p>
    <p>Best Supporting Actress: ${predix.supActress}</p>
    <p>Best Original Screenplay: ${predix.original}</p>
    <p>Best Adapted Screenplay: ${predix.adapted}</p>
    <p>Best Supporting Actress: ${predix.supActress}</p>
    <p>Best Outstanding Popular Film: ${predix.popular}</p>
    <p>Best Animated Feature: ${predix.animated}</p>
    <p>Best Foreign Language Film: ${predix.foreign}</p>
    <p>Best Documentary Feature: ${predix.doc}</p>
    <p>Best Documentary Short: ${predix.docShort}</p>
    <p>Best Live Action Short: ${predix.liveShort}</p>
    <p>Best Animated Short: ${predix.aniShort}</p>
    <p>Best Original Score: ${predix.score}</p>
    <p>Best Original Song: ${predix.song}</p>
    <p>Best Sound Editing: ${predix.soundEd}</p>
    <p>Best Sound Mixing: ${predix.soundMix}</p>
    <p>Best Production Design: ${predix.production}</p>
    <p>Best Cinematopgrahy: ${predix.cine}</p>
    <p>Best Makeup & Hairstyling: ${predix.makeup}</p>
    <p>Best Costume Design: ${predix.costume}</p>
    <p>Best Film Editing: ${predix.editinng}</p>
    <p>Best Visual Effects: ${predix.vfx}</p>
    <input type="button" id="delPredix" class=${predix.id} value="Delete">
  </div>`
return userPredix
}

export default predixDiv