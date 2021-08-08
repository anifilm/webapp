<script>
  let div;

  function handleClick() {
    console.log(div);
  }
</script>

<main>
  <button on:click={handleClick}>This 로그 보기</button>
  <div bind:this={div}>DIV</div>
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
