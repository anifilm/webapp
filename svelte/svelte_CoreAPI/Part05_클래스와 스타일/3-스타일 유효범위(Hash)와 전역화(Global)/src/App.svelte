<script>
	import Fruits from './Fruits.svelte';
</script>

<main>
	<h2>App.svelte</h2>
	<ul class="fruits">
		<li>Apple</li>
		<li>Banana</li>
		<li>Cherry</li>
	</ul>

	<Fruits />
</main>

<style>
	main {
		/*text-align: center;*/
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	:global(.fruits) {
		color: red;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
