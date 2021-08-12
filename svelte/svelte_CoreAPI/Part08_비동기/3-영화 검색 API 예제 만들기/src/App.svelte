<script>
	import axios from 'axios';

	let apikey = '8fd5eae9';
	let title = '';
	let movies = null;
	let error = null;
	let loading = false;

	async function searchMovies() {
		title = title.trim();
		if (!title || loading) {
			title = '';
			return;
		}
		loading = true;
		try {
			const res = await axios.get(`https://www.omdbapi.com/?apikey=${apikey}&s=${title}`);
			movies = res.data.Search;
		} catch (err) {
			//console.log(err.message);
			error = err;
		} finally {
			loading = false;
			console.log('Done!');
		}
	}
</script>

<main>
	<form>
		<input type="text" bind:value={title} />
		<button on:click|preventDefault={searchMovies}>검색</button>
	</form>

	{#if loading}
		<p style="color: royalblue">Loading...</p>
	{:else if movies}
		<ul>
			{#each movies as movie}
				<li>{movie.Title}</li>
			{/each}
		</ul>
	{:else if error}
		<p style="color: red">{error.message}</p>
	{/if}
</main>

<style>
	main {
		/*text-align: center;*/
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	input {
		width: 500px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
