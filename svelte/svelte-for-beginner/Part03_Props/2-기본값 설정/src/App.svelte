<script>
  import Child from "./Child.svelte";
</script>

<main>
	<Child name="Beomy" />
	<Child />
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
