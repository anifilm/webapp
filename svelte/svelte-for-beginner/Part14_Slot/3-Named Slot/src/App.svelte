<script>
  import ContactCard from './ContactCard.svelte';
</script>

<main>
  <ContactCard>
    <span slot="name">P. Sherman</span>
    <span slot="address">42 Wallaby Way<br>Sydney</span>
  </ContactCard>
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
