import { appState } from "../AppState.js";

class SlimeService {

  mine() {
    appState.slime++
  }
}

export const slimeService = new SlimeService();