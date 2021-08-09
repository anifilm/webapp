<script>
  import Something from './Something.svelte';

  let toggle = false;
</script>

<main>
  {#if toggle}
    <Something />
  {/if}

  <button
    on:click={() => {
      toggle = !toggle;
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
