<script>
	let count = 0;

	// 선언
	$: double = count * 2;

	// 블록
	$: {
		console.log('block:');
		console.log(count);
		console.log(double);
	}

	// 함수 실행
	$: count, log();

	// 즉시 실행 함수(IIFE)
	$: count, (() => {
		console.log('IIFE: Heropy');
	})();

	// 조건문(if)
	$: if (count > 0) {
		console.log('if: ', double);
	}

	// 반복문(for)
	$: for (let i = 0; i < 3; i++) {
		count;
		console.log('for: ', i);
	}

	// 조건문(switch)
	$: switch (count) {
		case 1:
			console.log('switch: 1');
			break;
		default:
			console.log('switch: defaut');
	}

	// 유효범위
	$: {
		function scope1() {
			console.log('scope1');
			function scope2() {
				console.log('scope2');
				function scope3() {
					console.log('scope3', count);
				}
				scope3();
			}
			scope2();
		}
		scope1();
	}

	function log() {
		console.log('fn: Heropy!');
	}

	function assign() {
		count += 1;
	}
</script>

<main>
	<button on:click={assign}>Assign!</button>
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
