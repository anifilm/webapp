<script>
  import { onDestroy } from 'svelte';
  import { count } from './store.js';

  import Incrementer from './Incrementer.svelte';
  import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

  let count_value;

  const unsubscribe = count.subscribe((value) => {
    count_value = value;
  })

  onDestroy(() => {
    unsubscribe();
  });
</script>

<main>
  <h1>The count is {count_value}</h1>
  <Incrementer />
  <Decrementer />
  <Resetter />
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
