<script>
  import Child from './Child.svelte';

  let value = 12;
</script>

<main>
  <Child carryValue={value} />
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
