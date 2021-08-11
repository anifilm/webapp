<script>
  let href = 'https://heropy.blog';
  let name = 'Heropy';
  let value = 'New input value!';
  let isUpperCase = false;
</script>

<main>
  <a href={href}>{name}</a>

  <input type="text" value={value} on:input={e => value = e.target.value} />
	<input type="text" bind:value={value} />

	<div>{isUpperCase ? 'DIV' : 'div'}</div>
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
