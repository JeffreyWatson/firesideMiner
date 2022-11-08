import { appState } from "../AppState.js";
import { Upgrade } from "../Models/Upgrade.js";
import { upgradesService } from "../Services/UpgradesService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawUpgrades() {
  let template = ''
  appState.upgrades.forEach(u => {
    template += /*html*/ `
    <button class="btn btn-success" onclick="app.upgradesController.purchaseUpgrade('${u.name}')">${u.name}-${u.price}</button>
    `
  })
  // @ts-ignore
  document.getElementById('upgrades').innerHTML = template
}

function _drawPurchased() {
  let mine = appState.upgrades
  let template = ''
  mine.forEach(m => template += m.purchasedTemplate)
  setHTML('purchased', template)
}

export class UpgradesController {
  constructor() {
    appState.on("upgrades", _drawUpgrades)
    appState.on("upgrades", _drawPurchased)
    _drawUpgrades()
    _drawPurchased()
  }

  purchaseUpgrade(upgradeName) {
    upgradesService.purchaseUpgrade(upgradeName)
    console.log(upgradeName);
  }
}