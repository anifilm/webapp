<script>
  import Child from "./Child.svelte";

  let name = 'Beomy';
  let job = 'developer';
  let website = 'https://beomy.github.io';
</script>

<main>
	<Child
    name={name}
    job={job}
    website={website}
  />
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
