import { SlimeController } from "./Controllers/SlimeController.js";
import { UpgradesController } from "./Controllers/UpgradesController.js";

class App {
  // valuesController = new ValuesController();
  slimeController = new SlimeController();
  upgradesController = new UpgradesController();
}

window["app"] = new App();
