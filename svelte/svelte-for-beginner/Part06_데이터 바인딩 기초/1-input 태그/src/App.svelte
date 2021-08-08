<script>
  let name = 'Beomy';
  let a = 1;
  let yes = false;
  let picked = 'one';
  const names = ['Beomy', 'World', 'Test'];
  let checkedNames = ['Beomy'];
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
  <label>
    <input type="checkbox" bind:checked={yes} /> check
  </label>

  <h1>{picked}</h1>
  <label>
    <input type="radio" value="one" bind:group={picked} /> one
  </label>
  <label>
    <input type="radio" value="two" bind:group={picked} /> two
  </label>

  <h1>{checkedNames}</h1>
  {#each names as name, index (index)}
    <label>
      <input type="checkbox" value={name} bind:group={checkedNames} /> {name}
    </label>
  {/each}
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
