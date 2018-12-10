import predixFormDiv from "./formPredix"
import hideDiv from "../Login/hideAndShow";

function appearForm() {
  domEntry.innerHTML=""
  domEntry.innerHTML = predixFormDiv()
  hideDiv.hideLoginDiv()
  hideDiv.hideSignUpDiv()
  hideDiv.toggleSignOutDiv()
}

export default appearForm