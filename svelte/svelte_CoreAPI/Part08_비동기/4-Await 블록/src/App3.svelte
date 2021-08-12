<script>
	let isError = false;
  //let promise = new Promise(resolve => resolve('Hmm...'));
  let promise = Promise.resolve('Hmm...');

  function fetchName() {
    return new Promise((resolve, reject) => {
			if (isError) {
				reject(new Error('Sorry...'));
			}
      setTimeout(() => {
        resolve('Heropy');
      }, 2000);
    });
  }
</script>

<main>
  <button
    on:click={() => {
      promise = fetchName();
    }}
  >
    Fetch name!
  </button>

	{#await promise}
		<!-- 대기(Pending) -->
		<h1>Loading...</h1>
	{:then name}
		<!-- 이행(Fulfilled) -->
		<h1>{name}</h1>
	{:catch error}
		<!-- 거부(Rejected) -->
		<h1>{error.message}</h1>
	{/await}
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
