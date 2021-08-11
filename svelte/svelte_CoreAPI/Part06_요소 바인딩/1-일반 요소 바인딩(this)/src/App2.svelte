<script>
	import { tick } from 'svelte';

	let label = 'Hello, world!';
	let isShow = false;
	let inputEl;

	async function toggle() {
		isShow = !isShow;

		await tick();
		//const inputEl = document.querySelector('input');
		inputEl && inputEl.focus();
	}
</script>

<main>
	<p>{label}</p>
	<button on:click={toggle}>Edit!</button>
	{#if isShow}
		<input type="text" bind:this={inputEl} bind:value={label} />
	{/if}
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
