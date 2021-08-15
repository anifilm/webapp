<script>
	// Getter & Setter
	// getContext & setContext
	import { getContext } from 'svelte';

	import Heropy from "./Heropy.svelte";
	import Lewis from './Lewis.svelte';
	import Evan from './Evan.svelte';

	const pocketMoney = getContext('heropy'); // undefined
</script>

<main>
  <h1>App({pocketMoney})</h1>
	<div>
		<Heropy />
		<Lewis />
		<Evan />
	</div>
</main>

<style>
	main {
		/*text-align: center;*/
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		font-size: 50px;
	}
	div {
		padding-left: 50px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
