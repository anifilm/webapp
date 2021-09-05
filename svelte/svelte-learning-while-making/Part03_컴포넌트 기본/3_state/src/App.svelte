<script>
  let value = '안녕하세요. svelte 강좌 입니다.';
  let active = false;
</script>

<main>
  <p>{value}</p>
  <input type="checkbox" bind:checked={active} /> {active}
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
