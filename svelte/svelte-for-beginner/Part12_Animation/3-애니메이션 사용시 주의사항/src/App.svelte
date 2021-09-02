<script>
  import { flip } from 'svelte/animate';

	let items = [1];

  function addItem() {
    items.unshift(Math.max(...items) + 1);
    items = items;
  }
  function removeItem() {
    if (items.length === 1) {
      return;
    }
    items.shift();
    items = items;
  }
</script>

<main>
  <button on:click={addItem}>Add</button>
  <button on:click={removeItem}>Remove</button>

  <ul>
    {#each items as item (item)}
      <div animate:flip>{item}</div>
    {/each}
  </ul>
</main>

<style>
  main {
    /*text-align: center;*/
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
