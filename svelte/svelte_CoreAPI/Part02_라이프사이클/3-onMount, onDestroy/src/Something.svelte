<script>
  import { onDestroy, onMount } from 'svelte';

  //const h1 = document.querySelector('h1');
  //console.log(h1.innerText);

  onMount(() => {
    console.log('Mounted!');

    const h1 = document.querySelector('h1');
    console.log(h1.innerText);

    return () => {
      console.log('Destroy in mount');
    };
  });

  onDestroy(() => {
    console.log('Destroyed!');

    const h1 = document.querySelector('h1');
    console.log(h1.innerText);
  });
</script>

<h1>Something</h1>
