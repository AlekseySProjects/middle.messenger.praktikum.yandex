export default class Route {
  _slug;
  _callback;
  _name;

  constructor(name, slug, callback) {
    // TODO: validate values
    this._name = name;
    this._slug = slug;
    this._callback = callback;
  }

  get name() {
    return this._name;
  }

  set name(string) { // может ли у маршрута динамически меняться name и slug?
    if (!isString(string)) {
      const givenType = typeof string;
      throw new Error(`String expected. ${givenType} given.
      toString or valueOf are not allowed`);
    }
  }
  get slug() {
    return this._slug;
  }

  set slug(string) {
    if (!isString(string)) {
      const givenType = typeof string;
      throw new Error(`String expected as slug value. ${givenType} given.
      toString or valueOf are not allowed`);
    }
    this._slug = string;
  }

  get handler() {
    return this._callback;
  }

  set handler(func) {
    if (!isFunction(func)) {
      const givenType = typeof func;
      throw new Error(`Function expected. ${givenType} given.`);
    }
  }
}

function isString(str) {
  return typeof str === 'string';
}

function isFunction(func) {
  return typeof func === 'function';
}
