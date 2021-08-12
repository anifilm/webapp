<script>
  import axios from 'axios';

  let apikey = '8fd5eae9';
  let title = '';
  let promise = Promise.resolve([]);

  function searchMovies() {
    title = title.trim();
    if (!title) {
      title = '';
      return;
    }
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=${apikey}&s=${title}`);
        resolve(res.data.Search);
      } catch (err) {
        reject(err);
      } finally {
        console.log('Done!');
      }
    });
  }
</script>

<main>
  <form>
    <input type="text" bind:value={title} />
    <button
      on:click|preventDefault={() => {
        promise = searchMovies();
      }}>검색</button
    >
  </form>

  {#await promise}
    <p style="color: royalblue">Loading...</p>
  {:then movies}
    <ul>
      {#each movies as movie}
        <li>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Title}</p>
        </li>
      {/each}
    </ul>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}

  <!--
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
	-->
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  input {
    width: 500px;
  }
  li {
    list-style: none;
    width: 300px;
    display: inline-block;
    margin: 0 20px 50px 0;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
