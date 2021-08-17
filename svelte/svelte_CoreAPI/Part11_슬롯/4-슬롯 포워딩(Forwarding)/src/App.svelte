<script>
	import Parent from './Parent.svelte';
</script>

<main>
  <Parent let:scoped>
    <h2>Default slot..</h2>
    <h3 slot="named">Named slot..</h3>
    <h1 slot="scoped">Scoped slot.. {scoped}</h1>
  </Parent>
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
