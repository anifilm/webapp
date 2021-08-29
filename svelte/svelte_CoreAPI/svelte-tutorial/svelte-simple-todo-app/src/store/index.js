import { writable, get } from 'svelte/store';

export const storeTodos = writable([]);

export function saveStorage() {
  window.localStorage.setItem('todos', JSON.stringify(get(storeTodos)));
}
