<script>
  import Fruit from './Fruit.svelte';

  let fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 5, name: 'Mango' },
    { id: 4, name: 'Orange' }
  ];
</script>

<main>
  <button
    on:click={() => {
      fruits[0] = { id: 1, name: 'Apple' };
      fruits = fruits;
    }}
	>
		Update!
	</button>

	{#each fruits as fruit (fruit.id)}
		<Fruit fruit={fruit} />
	{/each}
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
