<script>
  import Child from './Child.svelte';

  let div;
  let child;

  function handleClick() {
    console.log(div);
    console.log(child);
  }
</script>

<main>
  <button on:click={handleClick}>This 로그 보기</button>
  <div bind:this={div}>DIV</div>
  <Child bind:this={child} />
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
