import { appState } from "../AppState.js";
import { Upgrade } from "../Models/Upgrade.js";
import { upgradesService } from "../Services/UpgradesService.js";

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

export class UpgradesController {
  constructor() {
    appState.on("purchased", _drawUpgrades)
    _drawUpgrades()
  }

  purchaseUpgrade(upgradeName) {
    upgradesService.purchaseUpgrade(upgradeName)
    console.log(upgradeName);
  }
}