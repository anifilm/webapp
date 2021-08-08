<script>
	let src = 'https://beomy.github.io/assets/img/logo.png';
	let alt = 'Beomy';
</script>

<main>
	<img class:active={alt === 'Beomy' ? 'Beomy' : ''} src={src} alt={alt} />
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
