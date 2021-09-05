<script>
  let login = true;

  function handleClick() {
    login = !login;
  }
</script>

<main>
  <button on:click={handleClick}>호출</button>

  {#if login}
    <p>현재 login은 참입니다.</p>
  {:else}
    <p>현재 login은 거짓입니다.</p>
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
