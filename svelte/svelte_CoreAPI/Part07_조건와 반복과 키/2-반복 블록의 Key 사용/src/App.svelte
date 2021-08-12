<script>
	//let fruits = ['Apple', 'Banana', 'Cherry', 'Orange'];
	let fruits = [
		{ id: 1, name: 'Apple' },
		{ id: 2, name: 'Banana' },
		{ id: 3, name: 'Cherry' },
		{ id: 4, name: 'Apple' }
	];

	function deleteFirst() {
		fruits.shift();
		fruits = fruits;
	}
</script>

<main>
	<button on:click={deleteFirst}>Delete first fruits!</button>

	<ul>
		{#each fruits as fruit (fruit.id)}
			<li>{fruit.name}</li>
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
