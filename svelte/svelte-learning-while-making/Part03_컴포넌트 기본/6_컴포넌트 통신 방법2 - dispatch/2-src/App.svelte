<script>
  import PanelComponent from './PanelComponent.svelte';

  let count = 0;

  function incrementCount(event) {
    console.log(event.detail.message);
    count += 1;
  }
</script>

<main>
  <PanelComponent {count} on:increment={incrementCount} />
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
