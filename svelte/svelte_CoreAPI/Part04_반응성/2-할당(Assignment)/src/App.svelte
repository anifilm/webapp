<script>
	let name = 'Heropy';
	let fruits = ['Apple', 'Banana', 'Cherry'];
	let user = {
		name: 'Heropy',
		depth: {
			a: 'a'
		},
		numbers: [1, 2]
	};
	let numbers = user.numbers;

	function assign() {
		name = 'Neo';

		//fruits.push('Orange');
		//fruits = fruits;
		fruits = [...fruits, 'Orange'];

		user.name = 'Neo';
		user.depth.a = 'b';
		user.numbers.push(3);

		numbers = numbers;
	}
</script>

<main>
	<h2>name: {name}</h2>
	<h2>fruits: {fruits}</h2>
	<h2>user name: {user.name}</h2>
	<h2>user depth a: {user.depth.a}</h2>
	<h2>user numbers: {user.numbers}</h2>
	<h2>numbers: {numbers}</h2>

	<button on:click|once={assign}>Assign!</button>
</main>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h2 {
		/*color: #ff3e00;*/
		/*text-transform: uppercase;*/
		font-size: 2em;
		font-weight: 400;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
