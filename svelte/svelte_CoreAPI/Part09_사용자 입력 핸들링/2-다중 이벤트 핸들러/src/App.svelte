<script>
  let count = 0;

  function increase() {
    count += 1;
  }
  function current(e) {
    console.log(e.currentTarget);
  }
</script>

<main>
  <h1>{count}</h1>

  <button
    on:click={increase}
    on:click={current}
    on:click={() => {console.log('click!')}}
  >
    Click me!
  </button>
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
