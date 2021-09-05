<script>
  import First from './First.svelte';

  let value = 0;

  function handleValueAdd(event) {
    value += event.detail.value;
  }
</script>

<main>
  <p>value: {value}</p>
  <First on:add={handleValueAdd} />
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
