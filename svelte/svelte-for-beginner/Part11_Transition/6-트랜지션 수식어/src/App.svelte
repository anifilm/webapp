<script>
  import { slide } from 'svelte/transition';

  let showItems = true;
  let i = 5;
  let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
</script>

<main>
  <label>
    <input type="checkbox" bind:checked={showItems} />
    show list
  </label>

  <label>
    <input type="range" bind:value={i} max="10" />
  </label>

  {#if showItems}
    {#each items.slice(0, i) as item, index (index)}
      <div transition:slide|local>
        {item}
      </div>
    {/each}
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  div {
    padding: 0.5em 0;
    border-top: 1px solid #eee;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
