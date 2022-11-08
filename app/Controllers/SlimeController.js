import { appState } from "../AppState";
import { slimeService } from "../Services/SlimeService";

function _drawSlime() {
  // @ts-ignore
  document.getElementById("slime-count").innerHTML = /*html*/ `
  <h1>Slime Count: ${appState.slime}</h1>
  `
}

export class SlimeController {
  constructor() {
    appState.on("slime", _drawSlime)
    _drawSlime()
  }

  mine() {
    slimeService.mine()
    _drawSlime()
    console.log("Am I working?");
  }
}