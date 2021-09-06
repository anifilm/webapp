<script>
  function handleClick() {
    alert('호출');
  }
</script>

<main>
  <button on:click={handleClick}>클릭</button>
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
