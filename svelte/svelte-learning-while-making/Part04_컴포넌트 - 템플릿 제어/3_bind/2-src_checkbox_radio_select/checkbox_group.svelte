<script>
  let numbers = ['one', 'two', 'three'];

  let getNumbers = [];
</script>

<main>
  <p>체크박스 그룹 예제</p>
  {#each numbers as number}
    <label>
      <input type="checkbox" bind:group={getNumbers} value={number} />
      {number}
    </label>
  {/each}
  <br />

  {getNumbers}
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
