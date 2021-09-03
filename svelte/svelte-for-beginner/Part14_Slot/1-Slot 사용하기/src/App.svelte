<script>
  import Box from './Box.svelte';
</script>

<main>
  <Box>
    <h2>Hello!</h2>
    <p>This is a box. It can contain anything.</p>
  </Box>
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
