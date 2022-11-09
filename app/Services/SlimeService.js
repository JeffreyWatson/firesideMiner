import { appState } from "../AppState.js";

class SlimeService {

  mine() {
    appState.slime++
    appState.upgrades.forEach(u => {
      if (u.quantity > 0) {
        appState.slime += (u.multiplier * u.quantity)
      }
    })
  }
}

export const slimeService = new SlimeService();