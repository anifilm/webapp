import { writable, get } from 'svelte/store';

const _fruits = writable([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' }
]);

export let fruits = {
  ..._fruits, // set, update, subscribe
  getList() {
    return get(_fruits).map((f) => {
      return f.name;
    });
  },
  setItem(name) {
    _fruits.update((f) => {
      f.push({
        id: f.length + 1,
        name: name
      });
      return f;
    });
  }
};
