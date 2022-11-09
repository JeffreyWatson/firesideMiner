import { appState } from "../AppState.js";

class UpgradesService {
  purchaseUpgrade(upgradeName) {
    let found = appState.upgrades.find(u => u.name == upgradeName)
    if (!found) { return }
    if (found.price <= appState.slime) {
      appState.slime -= found.price
      found.quantity++
      found.price *= 2
      // The line below is what we do to trick the listener and alternatively we can use appState.emit('arrayName') like on line 13.
      // appState.upgrades = appState.upgrades
      appState.emit('upgrades')
    }
  }

}
export const upgradesService = new UpgradesService();