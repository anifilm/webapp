<script>
  const list = [
    { id: 1, text: 'A' },
    { id: 2, text: 'B' },
    { id: 3, text: 'C' }
  ];
  let selected = [];
  $: console.log(selected);
</script>

<main>
  <p>선택함: {selected.length !== 0 ? selected.map(x => x.id).join(', ') : '기다리는 중...'}</p>
  <select bind:value={selected} multiple>
    {#each list as item}
      <option value={item}>{item.text}</option>
    {/each}
  </select>
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
