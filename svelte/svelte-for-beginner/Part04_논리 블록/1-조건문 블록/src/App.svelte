<script>
	let x = 0;

  function handleAddX() {
    x += 1;
  }
</script>

<main>
  {#if x > 10}
  <p>{x}는 10보다 큽니다.</p>
  {:else if x > 5}
  <p>{x}는 5보다 큽니다.</p>
  {:else}
  <p>{x}는 5보다 작습니다.</p>
  {/if}

	<button on:click={handleAddX}>Click</button>
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
