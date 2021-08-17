<script>
  import UserCard from './UserCard.svelte';
</script>

<main>
  <UserCard>
    <h2 slot="name">Heropy</h2>
		<div slot="age">85</div>
		<div slot="email">thesecon@gmail.com</div>
  </UserCard>

	<UserCard>
		<h2 slot="name">Neo</h2>
		<div slot="email">neo@abc.com</div>
	</UserCard>

	<UserCard>
		<h2 slot="name">Evan</h2>
	</UserCard>
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
