<script>
	import Heropy from './Heropy.svelte';
	import Neo from './Neo.svelte';

	let components = [
		{ name: 'Heropy' },
		{ name: 'Neo' }
	];
	let selected;
</script>

<main>
	{#each components as {name} (name)}
		<label>
			<input type="radio" value={name} bind:group={selected} />
			{name}
		</label>
	{/each}

	{#if selected === 'Heropy'}
		<Heropy />
	{:else if selected === 'Neo'}
		<Neo />
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
