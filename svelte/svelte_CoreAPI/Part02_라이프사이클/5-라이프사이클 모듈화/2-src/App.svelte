<script>
  import { lifecycle, delayRender } from './lifecycle.js';
	import Something from './Something.svelte';

  let done = delayRender();
  lifecycle();
</script>

<main>
  {#if $done}
    <h1>Hello Lifecycle!</h1>
  {/if}
	<Something />
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
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
