<script>
  import Card from './Card.svelte';
</script>

<main>
  <Card>
    <div slot="age">85</div>
    <h2 slot="name">Heropy</h2>
    <div slot="email">thesecon@gmail.com</div>
  </Card>
  <Card>
    <span slot="email">neo@abc.com</span>
    <h3 slot="name">Neo</h3>
  </Card>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h3 {
    color: red;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
