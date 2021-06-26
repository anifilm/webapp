import Controller from "./Controller";
import Store from "./store";
import storage from './storage';

document.addEventListener('DOMContentLoaded', main);

function main() {
  const store = new Store(storage);

  const views = {
    // TODO
  };

  new Controller(store, views);
}
