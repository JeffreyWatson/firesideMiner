export class Upgrade {
  constructor(name, price, quantity, multiplier, img) {
    this.name = name
    this.price = price
    this.quantity = quantity
    this.multiplier = multiplier
    this.img = img
  }

  get purchasedTemplate() {
    return /*html*/ `
    <div class="card d-flex align-items-center p-3 m-1 transparent slime">
      <img class="upgrades rounded elevation-3" src="${this.img}" alt="">
      <h6>Name:${this.name}</h6>
      <p>Price:${this.price}</p>
      <p>Quantity:${this.quantity}</p>
      <p>Multiplier:${this.multiplier}</p>
    </div>
    `
  }
}