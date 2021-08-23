<script>
	import Heropy from './Heropy.svelte';

  let heropy;

  function handler() {
    console.log(heropy);
    console.log(heropy.name);
    console.log(heropy.getAge());
  }
</script>

<main>
  <button on:click={handler}>Toggle!</button>

  <Heropy bind:this={heropy} />
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
