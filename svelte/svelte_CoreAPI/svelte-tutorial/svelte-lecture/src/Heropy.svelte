<script>
  let age = 85;
  export let name = 'Heropy';

  export function getAge() {
    console.log(age);
  }
</script>

<svelte:options accessors={true} />

<h1 on:click={getAge}>{name}!</h1>
