<script>
	let name = 'world';
	let age = 85;

	function assign() {
		name = 'anifilm';
		age = 44;
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2 class={age < 85 ? 'active' : ''}>your age: {age}</h2>
	<img src="" alt={name} /><br />
	<!-- bind:value={ ... } (양방향 바인딩) -->
	<input type="text" bind:value={name} />
	<button on:click={assign}>Assign</button>
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
	.active {
		color: blue;
	}
	img {
		margin-bottom: 20px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
