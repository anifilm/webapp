<script>
	let name = 'world';
	let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango'];

	function deleteFruit() {
		fruits = fruits.slice(1);
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<ul>
		{#each fruits as fruit}
			<li>{fruit}</li>
		{/each}
	</ul>
	<button on:click={deleteFruit}>Eat it!</button>
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
	button {
		margin-top: 20px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
