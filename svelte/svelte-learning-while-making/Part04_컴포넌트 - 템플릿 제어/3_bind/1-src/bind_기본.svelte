<script>
  let textValue = '';
  let textEl;

  function clearText() {
    textValue = '';
    textEl && textEl.focus();
  }
</script>

<main>
  <p>입력값: {textValue}</p>
  <input
    type="text"
    bind:value={textValue}
    bind:this={textEl}
  />
  <button on:click={clearText}>지우기</button>
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
