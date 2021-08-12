<script>
	let fruits = [
		{ id: 1, name: 'Apple' },
		{ id: 2, name: 'Banana' },
		{ id: 3, name: 'Cherry' },
		{ id: 4, name: 'Apple' },
		{ id: 5, name: 'Orange' }
	];
	let todos = [];
	let fruits2D = [
		[1, 'Apple'],
		[2, 'Banana'],
		[3, 'Cherry'],
		[4, 'Orange']
	];
	let user = {
		name: 'Heropy',
		age: 85,
		email: 'thesecon@gamil.com'
	};
</script>

<main>
	<section>
		<h2>기본</h2>
		<ul>
 <!-- {#each 배열 as 속성} ... {/each} -->
			{#each fruits as fruit}
				<li>{fruit.name}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>순서 (index)</h2>
		<ul>
 <!-- {#each 배열 as 속성, 순서} ... {/each} -->
			{#each fruits as fruit, index}
				<li>{index} / {fruit.name}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>아이템 고유화 (key)</h2>
		<ul>
 <!-- {#each 배열 as 속성 (키)} ... {/each} -->
			{#each fruits as fruit (fruit.id)}
				<li>{fruit.id} / {fruit.name}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>빈 배열 처리 (else)</h2>
		<ul>
 <!-- {#each} ... {:else} ... {/each} -->
			{#each todos as todo (todo.id)}
				<li>{todo.name}</li>
			{:else}
				<div>아이템이 없어요!</div>
			{/each}
		</ul>
	</section>

	<section>
		<h2>구조 분해 (destructuring)</h2>
		<ul>
 <!-- {#each 배열 as {id, name} (id)} ... {/each} -->
			{#each fruits as {id, name} (id)}
				<li>{id} / {name}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>2차원 배열</h2>
		<ul>
 <!-- {#each 배열 as [id, name] (id)} ... {/each} -->
			{#each fruits2D as [id, name] (id)}
				<li>{id} / {name}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>나머지 연산자 (rest)</h2>
		<ul>
 <!-- {#each 배열 as {id, ...rest} (id)} ... {/each} -->
			{#each fruits as {id, ...rest} (id)}
				<li>{id} / {rest.name}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>객체 데이터</h2>
		<ul>
			{#each Object.entries(user) as [key, value] (key)}
				<li>{key} / {value}</li>
			{/each}
		</ul>
	</section>
</main>

<style>
	main {
		/*text-align: center;*/
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	section {
		text-align: left;
		margin: 10px;
		padding: 0px 0px 0px 30px;
		border: 2px solid orange;
	}
	ul {
		list-style: none;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
