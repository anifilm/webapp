<script>
  import Child from './Child.svelte';

  let value = 0;

  function handleValueAdd(event, param) {
    //console.log(event);
    value += param;
  }
</script>

<main>
  <p>value: {value}</p>

  <Child {handleValueAdd} />
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
