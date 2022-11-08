import { Upgrade } from "./Models/Upgrade.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])
  upgrades = [new Upgrade('shovel', 20, 0, 1), new Upgrade('pickaxe', 50, 0, 5), new Upgrade('multitool', 500, 0, 10), new Upgrade('slimerig', 5000, 0, 100)]
  purchased = []
  slime = 0

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
