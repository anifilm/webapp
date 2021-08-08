<script>
  let name = 'Beomy';
  let a = 1;
  let yes = false;
</script>

<main>
  <h1>{name}</h1>
  <input type="text" bind:value={name} />
  <h1>{a}</h1>
  <input type="number" bind:value={a} min="0" max="10" />
  <input type="range" bind:value={a} min="0" max="10" />
  {#if yes}
    <h1>YES</h1>
  {:else}
    <h1>NO</h1>
  {/if}
  <input type="checkbox" bind:checked={yes} /> check
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
