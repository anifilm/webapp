import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte';
import { writable } from 'svelte/store';

export function lifecycle() {
  beforeUpdate(() => {
    console.log('Before update!');
  });

  afterUpdate(() => {
    console.log('After update!');
  });

  onMount(() => {
    console.log('Mounted!');
  });

  onDestroy(() => {
    console.log('Destroyed!');
  });
}

export function delayRender(delay = 3000) { // ms
  let render = writable(false);
  onMount(() => {
    setTimeout(() => {
      //$render = true;
      console.log(render);
      render.set(true);
    }, delay);
  });
  return render;
}
