<script>
	import Fruit, { count } from "./Fruits.svelte";

	let fruits = [
		'Apple',
		'Banana',
		'Cherry',
		'Mango',
		'Orange'
	]
</script>

<main>
	<button on:click={() => {console.log('Total count: ' + count)}}>
		Total count log!
	</button>

	{#each fruits as fruit}
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
