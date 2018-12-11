function predixDiv(predix) {
  console.log(predix)
  let userPredix =
  `<div id=${predix.id} class="predixDiv">
    <p>BEST PICTURE:</p>
    <p>${predix.picture}</p>
    <input type="button" id="editPick" class=${predix.id} value="Edit">
    <p>BEST DIRECTOR:</p>
    <p>${predix.director}</p>
    <p>BEST LEADING ACTOR:</p>
    <p>${predix.leadActor}</p>
    <p>BEST LEADING ACTRESS:</p>
    <p>${predix.leadActress}</p>
    <p>BEST SUPPORTING ACTOR:</p>
    <p>${predix.supActor}</p>
    <p>BEST SUPPORTINGACTRESS:</p>
    <p>${predix.supActress}</p>
    <p>BEST ORIGINAL SCREENPLAY:</p>
    <p>${predix.original}</p>
    <p>BEST ADAPTED SCREENPLAY:</p>
    <p>${predix.adapted}</p>
    <p>BEST OUTSTANDING POPULAR FILM:</p>
    <p>${predix.popular}</p>
    <p>BEST ANIMATED FEATURE:</p>
    <p>${predix.animated}</p>
    <p>BEST FOREIGN LANGUAGE FILM:</p>
    <p>${predix.foreign}</p>
    <p>BEST DOCUMENTARY FEATURE:</p>
    <p>${predix.doc}</p>
    <p>BEST DOCUMENTARY SHORT:</p>
    <p>${predix.docShort}</p>
    <p>BEST LIVE ACTION SHORT:</p>
    <p>${predix.liveShort}</p>
    <p>BEST ANIMATED SHORT:</p>
    <p>${predix.aniShort}</p>
    <p>BEST ORIGINAL SCORE:</p>
    <p>${predix.score}</p>
    <p>BEST ORIGINAL SONG:</p>
    <p>${predix.song}</p>
    <p>BEST SOUND EDITING:</p>
    <p>${predix.soundEd}</p>
    <p>BEST SOUND MIXING:</p>
    <p>${predix.soundMix}</p>
    <p>BEST PRODUCTION DESIGN:</p>
    <p>${predix.production}</p>
    <p>BEST CINEMATOGRAPHY:</p>
    <p>${predix.cine}</p>
    <p>BEST MAKEUP & HAIRSTYLING:</p>
    <p>${predix.makeup}</p>
    <p>BEST COSTUME DESIGN:</p>
    <p>${predix.costume}</p>
    <p>BEST FILM EDITING:</p>
    <p>${predix.editing}</p>
    <p>BEST VISUAL EFFECTS:</p>
    <p>${predix.vfx}</p>
    <input type="button" id="delPredix" class="delPredix" value="Delete">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>`
return userPredix
}

export default predixDiv