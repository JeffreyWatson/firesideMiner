import { appState } from "../AppState.js";

class UpgradesService {
  purchaseUpgrade(upgradeName) {
    let found = appState.upgrades.find(u => u.name == upgradeName)
    if (!found) { return }
    if (found.price <= appState.slime) {
      appState.slime -= found.price
      found.quantity++
      found.price *= 2
      found.multiplier++
      appState.emit('upgrades')
    }
  }

}
export const upgradesService = new UpgradesService();