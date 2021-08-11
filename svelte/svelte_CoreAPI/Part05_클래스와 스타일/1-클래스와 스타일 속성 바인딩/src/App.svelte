<script>
  let active = false;
	let color = 'tomato';
	let white = 'white';
	let colorObj = {
		t: 'tomato',
		w: 'white'
	};
	let letterSpacing = 'letter-spacing: 5px';
</script>

<main>
  <!--
	<div class={active ? 'hello' : ''}>Hello</div> -->
	<div class:hello={active}>Hello</div>

  <button on:click={() => {active = !active}}>Toggle!</button>

	<h2 style="background: {color}; color: {white}; {letterSpacing}">Heropy!</h2>
	<h2 style="background: {colorObj.t}; color: {colorObj.w};{letterSpacing}">Heropy!</h2>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  div {
    width: 120px;
    height: 200px;
    background: royalblue;
    border-radius: 10px;
    display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 20px;
		transition: .4s;
  }
	.hello {
		width: 350px;
		background: tomato;
	}
	@media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
