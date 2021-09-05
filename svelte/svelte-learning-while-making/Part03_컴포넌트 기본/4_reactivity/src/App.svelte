<script>
  // state 생성
  let active = false;
</script>

<main>
  <span><input type="checkbox" bind:checked={active} /> 상태</span>
  <br />
  <p class:view={!active}>active is {active}</p>
</main>

<style>
  .view {
    display: none;
  }
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
