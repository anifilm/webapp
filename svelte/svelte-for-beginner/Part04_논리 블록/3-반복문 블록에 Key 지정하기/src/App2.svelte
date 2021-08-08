<script>
	let list = [
    {id: 1, text: 'test1'},
    {id: 2, text: 'test2'},
    {id: 3, text: 'test3'},
  ];

  function addItem() {
    const id = Math.max(...list.map(x => x.id)) + 1;
    list = [...list, {id, text: `test${id}`}];
  }

  function removeItem() {
    list.shift();
    list = list;
  }
</script>

<main>
  <button on:click={addItem}>Add</button>
  <button on:click={removeItem}>Remove</button>

  <ul>
    {#each list as { id, text } (id)}
      <li>{id} - {text}</li>
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
