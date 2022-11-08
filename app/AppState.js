import { Upgrade } from "./Models/Upgrade.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])
  upgrades = [new Upgrade('shovel', 20, 0, 1, 'https://images.unsplash.com/photo-1598851418241-f52c34b6e4c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'), new Upgrade('pickaxe', 50, 0, 5, 'https://images.unsplash.com/photo-1620216533243-755244d986df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlja2F4ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'), new Upgrade('multitool', 500, 0, 10, 'https://images.unsplash.com/photo-1632408541881-6f80338299d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVsdGklMjB0b29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'), new Upgrade('slimerig', 5000, 0, 100, 'https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwcmlnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60')]

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
