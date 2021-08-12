<script>
  import { onMount } from 'svelte';

  import Heropy from "./Heropy.svelte";
  import Footer from "./Footer.svelte";

  let title = 'Hello, world!';
  let heropy;

  onMount(() => {
    console.log(heropy);
    //console.log(heropy.title);
  })
</script>

<main>
  <Heropy title={title} bind:this={heropy} />
  <Footer />
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
