<script>
  let count = 0;

  function handleClick() {
		console.log('clicked!');
    count += 1;
  }

  function handleMouseEnter() {
    console.log('mouseEnter');
  }

  function handleMouseLeave() {
    console.log('mouseLeave');
  }
</script>

<main>
  <button on:click={handleClick}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}>Clicked {count}</button>
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
