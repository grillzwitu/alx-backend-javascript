// eslint-disable-next-line import/extensions
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    if (currency instanceof Currency) this._currency = currency;
  }

  set amount(Amount) {
    this._amount = Amount;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(nCurrency) {
    this._currency = nCurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
