import { appState } from "../AppState.js";
import { upgradesService } from "../Services/UpgradesService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawUpgrades() {
  let template = ''
  appState.upgrades.forEach(u => {
    // es6-string-html is the extension you can download to convert text outside of your index to the html format.
    template += /*html*/ `
    <div class="row m-2">
    <button class="btn btn-success m-2 text-center" onclick="app.upgradesController.purchaseUpgrade('${u.name}')">${u.name}-${u.price}</button>
    </div>
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