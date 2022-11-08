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
  appState.purchased.forEach(p => {
    multiplier += p.multiplier
  })
  // @ts-ignore
  document.getElementById('multiplier').innerHTML = /*html*/ `
  <h4>Current Multiplier: ${multiplier}</h4>
  `
}

function _drawQuantity() {
  let quantity = 0
  appState.purchased.forEach(p => {
    quantity += p.quantity
  })
  // @ts-ignore
  document.getElementById('quantity').innerHTML = /*html*/ `
  <h4>Quantity: ${quantity}</h4>
  `
}

export class SlimeController {
  constructor() {
    appState.on("slime", _drawSlime)
    appState.on("purchased", _drawMultiplier)
    appState.on("purchased", _drawQuantity)
    _drawMultiplier()
    _drawSlime()
    _drawQuantity()
  }

  mine() {
    slimeService.mine()
    // _drawSlime()
    console.log("Am I working?");
  }
}