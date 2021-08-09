<script>
  import { beforeUpdate, afterUpdate, onMount } from 'svelte';

  let num = 0;
  let p;

  beforeUpdate(() => {
    console.log('beforeUpdate', p && p.innerText);
  });

  onMount(() => {
    console.log('onMount');
  });

  afterUpdate(() => {
    console.log('afterUpdate', p.innerText);
  });
</script>

<main>
  <p bind:this={p}>{num}</p>
  <button on:click={() => num += 1}>Add</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
