<script>
	let active = true;
	let valid = false;
	let camelCase = true;

	function multi() {
		return 'active multiple-class';
	}
</script>

<main>
	<div class="active">클래스 지정 - 첫번째</div>
	<div class={'active'}>클래스 지정 - 두번째</div>
	<div class={active ? 'active' : ''}>3항 연산자 보간</div>

	<div class:active={active}>Class 지시어(Directive) 바인딩</div>

	<div class:active>Class 지시어 바인딩 단축 형태</div>

	<div
		clsas:active
		class:valid
		class:camelCase
		class:camel-case={camelCase}
	>
		다중(Multiple) Class 지시어 바인딩
	</div>

	<div class={multi()}>함수 실행</div>
</main>

<style>
	div {
		color: gray;
	}
	.active {
		color: black;
	}
	.camel-case {
		text-transform: uppercase;
	}
</style>
