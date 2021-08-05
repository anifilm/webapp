<script>
  import App from "../../Part03_Props/1-정의 방법/src/App.svelte";
import AppOrig from "./App-orig.svelte";
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
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
