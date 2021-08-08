<script>
	let list = [
    {id: 1, text: 'test1'},
    {id: 2, text: 'test2'},
    {id: 3, text: 'test3'},
  ];
</script>

<main>
	<ul>
    {#each list as item, i}
      <li>{i}: {item.id} - {item.text}</li>
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
