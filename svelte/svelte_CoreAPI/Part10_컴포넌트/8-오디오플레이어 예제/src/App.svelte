<script>
	import AudioPlayer, { stopAll } from './AudioPlayer.svelte';

	let audioTracks = [
    'https://sveltejs.github.io/assets/music/strauss.mp3',
    'https://sveltejs.github.io/assets/music/holst.mp3',
    'https://sveltejs.github.io/assets/music/satie.mp3'
	];
</script>

<main>
	<button on:click={stopAll}>Stop all!</button>

	{#each audioTracks as src}
		<AudioPlayer src={src} />
	{/each}
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
