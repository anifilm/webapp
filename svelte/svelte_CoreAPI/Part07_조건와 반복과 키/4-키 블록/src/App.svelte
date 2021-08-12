<script>
	import Count from './Count.svelte';

	let reset = false;
</script>

<main>
	{#key reset}
		<Count />
	{/key}

	<button on:click={() => reset = !reset}>Reset!</button>
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
