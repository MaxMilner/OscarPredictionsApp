function predixDiv(predix) {
  console.log(predix)
  let userPredix =
  `<div id="predixDiv" class="predixDiv">
        <button id="editPick" class=${predix.id}>Edit</button>
        <button id="donePick" class="donePick" predictionsId=${predix.id}>Done</button>
        <input type="button" id="delPredix" class="delPredix" value="Delete All">
    <p>BEST PICTURE:</p>
    <p id="predixPicture" class="predixPicture">${predix.picture}</p>
        <div id=${predix.id} class="editDiv">
          <input type="text" id="editPicture" class=${predix.id} value="${predix.picture}">
        </div>
    <p>BEST DIRECTOR:</p>
    <p id="predixDirector" class="predixDirector">${predix.director}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editDirector" class=${predix.id} value="${predix.director}">
        </div>
    <p>BEST LEADING ACTOR:</p>
    <p id="predixLeadActor" class="predixLeadActor">${predix.leadActor}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editLeadActor" class=${predix.id} value="${predix.leadActor}">
        </div>
    <p>BEST LEADING ACTRESS:</p>
    <p id="predixLeadActress" class="predixLeadActress">${predix.leadActress}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editLeadActress" class=${predix.id} value="${predix.leadActress}">
        </div>
    <p>BEST SUPPORTING ACTOR:</p>
    <p id="predixSupActor" class="predixSupActor">${predix.supActor}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editSupActor" class=${predix.id} value="${predix.supActor}">
        </div>
    <p>BEST SUPPORTING ACTRESS:</p>
    <p id="predixSupActress" class="predixSupActress">${predix.supActress}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editSupActress" class=${predix.id} value="${predix.supActress}">
        </div>
    <p>BEST ORIGINAL SCREENPLAY:</p>
    <p id="predixOriginal" class="predixOriginal">${predix.original}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editOriginal" class=${predix.id} value="${predix.original}">
        </div>
    <p>BEST ADAPTED SCREENPLAY:</p>
    <p id="predixAdapted" class="predixAdapted">${predix.adapted}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editAdapted" class=${predix.id} value="${predix.adapted}">
      </div>
    <p>BEST OUTSTANDING POPULAR FILM:</p>
    <p id="predixPopular" class="predixPopular">${predix.popular}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editPopular" class=${predix.id} value="${predix.popular}">
      </div>
    <p>BEST ANIMATED FEATURE:</p>
    <p id="predixAnimated" class="predixAnimated">${predix.animated}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editAnimated" class=${predix.id} value="${predix.animated}">
        </div>
    <p>BEST FOREIGN LANGUAGE FILM:</p>
    <p id="predixForeign" class="predixForeign">${predix.foreign}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editForeign" class=${predix.id} value="${predix.foreign}">
        </div>
    <p>BEST DOCUMENTARY FEATURE:</p>
    <p id="predixDoc" class="predixDoc">${predix.doc}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editDoc" class=${predix.id} value="${predix.doc}">
        </div>
    <p>BEST DOCUMENTARY SHORT:</p>
    <p id="predixDocShort" class="predixDocShort">${predix.docShort}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editDocShort" class=${predix.id} value="${predix.docShort}">
        </div>
    <p>BEST LIVE ACTION SHORT:</p>
    <p id="predixLiveShort" class="predixLiveShort">${predix.liveShort}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editLiveShort" class=${predix.id} value="${predix.liveShort}">
        </div>
    <p>BEST ANIMATED SHORT:</p>
    <p id="predixAniShort" class="predixAniShort">${predix.aniShort}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editAniShort" class=${predix.id} value="${predix.aniShort}">
        </div>
    <p>BEST ORIGINAL SCORE:</p>
    <p id="predixScore" class="predixScore">${predix.score}</p>
        <div id="editDiv" class="editDiv">
        <input type="text" id="editScore" class=${predix.id} value="${predix.score}">
      </div>
    <p>BEST ORIGINAL SONG:</p>
    <p id="predixSong" class="predixSong">${predix.song}</p>
        <div id="editDiv" class="editDiv">
        <input type="text" id="editSong" class=${predix.id} value="${predix.song}">
      </div>
    <p>BEST SOUND EDITING:</p>
    <p id="predixSoundEd" class="predixSoundEd">${predix.soundEd}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editSoundEd" class=${predix.id} value="${predix.soundEd}">
        </div>
    <p>BEST SOUND MIXING:</p>
    <p id="predixSoundMix" class="predixSoundMix">${predix.soundMix}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editSoundMix" class=${predix.id} value="${predix.soundMix}">
        </div>
    <p>BEST PRODUCTION DESIGN:</p>
    <p id="predixProduction" class="predixProduction">${predix.production}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editProduction" class=${predix.id} value="${predix.production}">
        </div>
    <p>BEST CINEMATOGRAPHY:</p>
    <p id="predixCine" class="predixCine">${predix.cine}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editCine" class=${predix.id} value="${predix.cine}">
        </div>
    <p>BEST MAKEUP & HAIRSTYLING:</p>
    <p id="predixMakeup" class="predixMakeup">${predix.makeup}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editMakeup" class=${predix.id} value="${predix.makeup}">
        </div>
    <p>BEST COSTUME DESIGN:</p>
    <p id="predixCostume" class="predixCostume">${predix.costume}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editCostume" class=${predix.id} value="${predix.costume}">
        </div>
    <p>BEST FILM EDITING:</p>
    <p id="predixEditing" class="predixEditing">${predix.editing}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editEditing" class=${predix.id} value="${predix.editing}">
        </div>
    <p>BEST VISUAL EFFECTS:</p>
    <p id="predixVfx" class="predixVfx">${predix.vfx}</p>
        <div id="editDiv" class="editDiv">
          <input type="text" id="editVfx" class=${predix.id} value="${predix.vfx}">
        </div>
    <button id="editPick" class=${predix.id}>Edit</button><button id="donePick" class="donePick" predictionsId=${predix.id}>Done</button>
    <input type="button" id="delPredix" class="delPredix" value="Delete All">
  </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>`
return userPredix
}

export default predixDiv