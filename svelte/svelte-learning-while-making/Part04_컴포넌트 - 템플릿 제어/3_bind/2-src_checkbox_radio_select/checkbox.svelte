<script>
  let boxChecked = false;
</script>

<main>
  <label>
    <input type="checkbox" bind:checked={boxChecked} />
    체크 박스 예제
  </label>

  <button disabled={!boxChecked}>전송</button>
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
