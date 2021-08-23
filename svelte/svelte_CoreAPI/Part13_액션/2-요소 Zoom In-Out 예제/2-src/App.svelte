<script>
  import { zoom } from './zoom.js';
</script>

<main>
  <div use:zoom></div>
  <div use:zoom={0.7}></div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
  div {
    width: 100px;
    height: 100px;
    margin: 50px;
    background-color: tomato;
  }
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
