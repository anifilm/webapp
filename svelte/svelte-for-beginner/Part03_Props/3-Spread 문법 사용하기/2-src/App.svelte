<script>
  import Child from "./Child.svelte";

  let info = {
    name: 'Beomy',
    job: 'developer',
    website: 'https://beomy.github.io'
  };
</script>

<main>
	<Child {...info} />
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
