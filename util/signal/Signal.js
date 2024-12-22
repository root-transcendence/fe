class Signal {
  constructor() {
    this._listeners = new Map();
  }

  add(name, listener) {
    this._listeners.set(name, listener);
  }

  remove(name) {
    this._listeners.delete(name);
  }

  dispatch(...args) {
    this._listeners.forEach(listener => {
      listener(...args);
    });
  }
}

export default Signal;