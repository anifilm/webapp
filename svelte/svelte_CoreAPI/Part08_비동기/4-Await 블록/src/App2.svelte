<script>
  let promise;

  function fetchName() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Heropy');
      }, 2000);
    });
  }
</script>

<main>
  <button
    on:click={async () => {
      promise = fetchName();
			promise.then((res) => {
				console.log(res);
			})
    }}
  >
    Fetch name!
  </button>
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
