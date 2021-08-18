<script>
  import { fruits } from './fruits.js';

  let value;
</script>

<main>
  <input type="text" bind:value />
  <button
    on:click={() => {
      fruits.setItem(value);
      value = '';
    }}
  >
    Add fruit!
  </button>
  <button
    on:click={() => {
      console.log(fruits.getList());
    }}
  >
    Log fruit list!
  </button>

  <ul>
    {#each $fruits as { id, name } (id)}
      <li>{id} - {name}</li>
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
  li {
    list-style: none;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
