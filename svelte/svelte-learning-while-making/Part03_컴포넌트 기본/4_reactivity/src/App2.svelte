<script>
  let count = 0;

  function handleClick() {
    // 이벤트 코드
    count += 1;
  }
</script>

<main>
  <button on:click={handleClick}>
    클릭수 {count} {count === 1 ? 'time' : 'times'}
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
