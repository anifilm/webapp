<script>
  import { setContext } from 'svelte';

  import PanelComponent from './PanelComponent.svelte';

  let count = 0;

  function incrementCount() {
    count += 1;
  }

  setContext('incrementCount', incrementCount);
  //setContext('count', count);
</script>

<main>
  <PanelComponent {count} />
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
