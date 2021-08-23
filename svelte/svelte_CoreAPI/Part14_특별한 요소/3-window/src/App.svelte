<script>
  let key = '';
  let innerWidth;
  let innerHeight;
  let outerWidth;
  let outerHeight;
  let online;
  let scrollX;
  let scrollY;

  //window.addEventListener('keydown', (event) => {
  //  key = event.key;
  //});
</script>

<svelte:window
  on:keydown={(event) => {key = event.key}}
  bind:innerWidth={innerWidth}
  bind:innerHeight={innerHeight}
  bind:outerWidth={outerWidth}
  bind:outerHeight={outerHeight}
  bind:online={online}
  bind:scrollX={scrollX}
  bind:scrollY={scrollY}
/>

<main>
  <h1>{key}</h1>
  <div>innerWidth: {innerWidth}</div>
  <div>innerHeight: {innerHeight}</div>
  <div>outerWidth: {outerWidth}</div>
  <div>outerHeight: {outerHeight}</div>
  <div>online: {online}</div>
  <div class="fixed">
    <input type="number" bind:value={scrollX} />
    <input type="number" bind:value={scrollY} />
  </div>
  <div class="for-scroll"></div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
  .fixed {
    position: fixed;
    top: 10px;
    right: 10px;
  }
  .for-scroll {
    width: 2000px;
    height: 2000px;
  }
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
