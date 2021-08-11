<script>
	// Svelte가 아닌, JavaScript 문법입니다.
	loop1:
	for (let i = 1; i < 4; i++) {
		loop2:
		for (let j = 1; j < 4; j++) {
			if (i === 2) break loop1;
			console.log(`${i} - ${j}`);
		}
		console.log('--------');
	}

	heropy: {
		console.log('a');
		break heropy;
		console.log('b');
	}

	// Svelte 반응성 구문
	let count = 0;
	$: {
		console.log(count);
	}
</script>

<main>

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
