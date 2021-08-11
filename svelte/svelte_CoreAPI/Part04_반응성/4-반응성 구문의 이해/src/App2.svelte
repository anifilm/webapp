<script>
	import { tick } from 'svelte';

	let count = 0;
	let double = 0;
	$: {
		double = count * 2;
		console.log('double');
	}
	//$: double = count * 2;

	async function assign() {
		count += 1;

		console.time('timer');
		await tick();
		console.timeEnd('timer');
		console.log(double);
	}
</script>

<main>
	<h2>{count}</h2>
	<h2>{double}</h2>

	<button on:click={assign}>Assign!</button>
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
