<script>
  import Child from './Child.svelte';

  let condition = true;
</script>

<main>
  {#if condition}
    <Child />
  {/if}

  <button
    on:click={() => {
      condition = !condition;
    }}
  >
    Toggle
  </button>
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
