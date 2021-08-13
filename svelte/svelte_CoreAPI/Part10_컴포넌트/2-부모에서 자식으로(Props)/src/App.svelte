<script>
  import User from './User.svelte';

  let users = [
    {
      name: 'Neo',
      age: 85,
      email: 'neo@abc.com'
    },
    {
      name: 'Lewis',
      age: 30,
      email: 'lewis@abc.com'
    },
    {
      name: 'Evan',
      age: 52
    }
  ];
</script>

<main>
  <section>
    {#each users as user}
      <User name={user.name} age={user.age} email={user.email} />
    {/each}
  </section>

  <section>
    {#each users as {name, age, email}}
      <User name={name} age={age} email={email} />
    {/each}
  </section>

  <section>
    {#each users as user}
      <User {...user} />
    {/each}
  </section>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  section {
    text-align: left;
    margin: 10px;
    padding: 20px;
    border: 2px solid orange;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
