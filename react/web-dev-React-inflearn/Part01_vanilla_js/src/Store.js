const tag = '[store]';

export default class Store {
  constructor(storage) {
    console.log(tag, "constructor");

    if (!storage) throw 'no storage';

    this.storage = storage;
  }
}
