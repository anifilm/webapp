<script>
	import { tick } from 'svelte';

	let name = 'world';

	async function handler() {
		name = 'Heropy';

		await tick();
		const h1 = document.querySelector('h1');
		console.log(h1.innerText);
	}
</script>

<main>
	<h1 on:click={handler}>Hello {name}!</h1>
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
