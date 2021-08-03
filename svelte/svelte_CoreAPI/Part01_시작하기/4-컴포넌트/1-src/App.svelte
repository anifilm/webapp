<script>
	let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango'];
</script>

<main>
	<h2>Fruits</h2>
	<ul>
		{#each fruits as fruit}
			<li>{fruit}</li>
		{/each}
	</ul>

	<h2>Fruits reverse</h2>
	<ul>
		{#each [...fruits].reverse() as fruit}
			<li>{fruit}</li>
		{/each}
	</ul>

	<h2>Fruits slice - 2</h2>
	<ul>
		{#each fruits.slice(-2) as fruit}
			<li>{fruit}</li>
		{/each}
	</ul>
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
	ul {
		list-style: none;
    width: 94%;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
