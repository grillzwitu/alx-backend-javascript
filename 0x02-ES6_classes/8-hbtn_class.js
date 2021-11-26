export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](attr) {
    if (attr === 'number') return this._size;
    return this._location;
  }
}
