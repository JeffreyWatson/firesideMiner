import { appState } from "../AppState.js";
import { slimeService } from "../Services/SlimeService.js";

function _drawSlime() {
  // @ts-ignore
  document.getElementById("slime-count").innerHTML = /*html*/ `
  <h4>Slime: ${appState.slime}</h4>
  `
}

function _drawMultiplier() {
  let multiplier = 0
  appState.upgrades.forEach(u => {
    if (u.quantity > 0) {
      multiplier += u.multiplier
    }
  })
  // @ts-ignore
  document.getElementById('multiplier').innerHTML = /*html*/ `
  <h4>Current Multiplier: ${multiplier}</h4>
  `
}

export class SlimeController {
  constructor() {
    appState.on("slime", _drawSlime)
    appState.on("upgrades", _drawMultiplier)
    _drawMultiplier()
    _drawSlime()
  }

  mine() {
    slimeService.mine()
    // _drawSlime()
    console.log("Am I working?");
  }
}