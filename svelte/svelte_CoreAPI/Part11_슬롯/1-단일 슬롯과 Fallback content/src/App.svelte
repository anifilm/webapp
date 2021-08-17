<script>
  import Btn from './Btn.svelte';
</script>

<main>
  <Btn />
  <Btn>Submit!</Btn>
  <Btn block>Submit!</Btn>
  <Btn color="royalblue">Submit!</Btn>
  <Btn block color="red">Danger!</Btn>
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
