<script>
  import Bottom from './Bottom.svelte';
  import Content from './Content.svelte';
  import Header from './Header.svelte';
</script>

<main>
  <Header />
  <Content />
  <Bottom />
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
