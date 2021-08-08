<script>
	import Child from './Child.svelte';
</script>

<main>
	<h2>This is Parent.</h2>
	<Child />
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
