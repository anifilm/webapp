<script>
	import WritableMethods from './WritableMethods.svelte';

  let toggle = true;
</script>

<main>
  <button on:click={() => {toggle = !toggle}}>Toggle</button>

  {#if toggle}
    <WritableMethods />
  {/if}
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
