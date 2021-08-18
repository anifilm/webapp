import { writable, readable, derived } from 'svelte/store';

export let count = writable(1);
export let double = derived(count, ($count) => $count * 2);
export let user = readable({
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com'
});
