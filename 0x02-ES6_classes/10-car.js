export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.carclone]() {
    return this;
  }

  cloneCar() {
    const CarClone = this.constructor[Symbol.carclone];
    return new CarClone(this._brand, this._motor, this._color);
  }
}
