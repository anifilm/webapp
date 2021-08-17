<script>
  import TextField from './TextField.svelte';

  let id = '';
  let pw = '';

  function submit() {
    if (id && pw) {
      console.log(id);
      console.log(pw);
      id = '';
      pw = '';
    }
  }
</script>

<main>
  <TextField
		bind:value={id}
		color="yellowgreen"
		type="email"
		placeholder="ID"
		maxlenght="10"
		required
	/>
  <TextField
		bind:value={pw}
		color="red"
		type="password"
		placeholder="PW"
		required
	/>
  <button on:click={submit}>Submit!</button>
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
