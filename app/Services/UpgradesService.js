import { appState } from "../AppState.js";

class UpgradesService {
  purchaseUpgrade(upgradeName) {
    let found = appState.upgrades.find(u => u.name == upgradeName)
    if (appState.slime >= found?.price) {
      appState.slime -= found?.price
      // @ts-ignore
      found.price += found?.price
      // @ts-ignore
      found.quantity++
      appState.purchased.push(found)
      appState.purchased = appState.purchased
    }
  }

}
export const upgradesService = new UpgradesService();