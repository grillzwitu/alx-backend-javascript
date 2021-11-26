// eslint-disable-next-line import/extensions
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  set sqft(Sqft) {
    this._sqft = Sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set floors(Floors) {
    this._floors = Floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
