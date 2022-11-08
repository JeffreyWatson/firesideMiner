import { appState } from "../AppState";

class SlimeService {

  mine() {
    appState.slime++
  }
}

export const slimeService = new SlimeService();