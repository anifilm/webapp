<script>
  import Card from './card.svelte';
</script>

<main>
  <Card>
    <span slot="name">P. Sherman</span>

    <span slot="address">
      42 Wallaby Way<br />
      Sydney
    </span>
  </Card>
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
