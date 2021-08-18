<script>
  import { count } from './count.js';
</script>

<main>
  <h1>{$count}</h1>
  <button on:click={count.increment}>+</button>
  <button on:click={count.decrement}>-</button>
  <button on:click={count.reset}>reset</button>
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
