<script>
  let numbers = ['own', 'two', 'three'];

  let getNumbers = [];
</script>

<main>
  <p>다중 선택 예제</p>
  <select multiple bind:value={getNumbers}>
    {#each numbers as number}
      <option value={number}>
        {number}
      </option>
    {/each}
  </select>

  <p>{getNumbers}</p>
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
