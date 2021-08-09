<script>
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte';

  let name = 'Something..';
  let h1;

  function moreDot() {
    name += '.';
  }

  beforeUpdate(() => {
    console.log('Before update!');
    console.log(h1 && h1.innerText);
  })

  afterUpdate(() => {
    console.log('After update!');
    console.log(h1.innerText);
  })

  onMount(() => {
    console.log('Mounted!');
    h1 = document.querySelector('h1');
  });

  onDestroy(() => {
    console.log('Destroyed!');
  });
</script>

<h1 on:click={moreDot}>{name}</h1>
