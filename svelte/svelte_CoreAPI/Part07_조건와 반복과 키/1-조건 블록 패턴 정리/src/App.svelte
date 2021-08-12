<script>
	let count = 0;
</script>

<main>
	<h2>{count}</h2>
	<button on:click={() => {count += 1}}>증가</button>
	<button on:click={() => {count -= 1}}>감소</button>

	<section>
		<h2>if</h2>
		{#if count > 3}
			<div>count &gt; 3</div>
		{/if}
		{#if count <= 3}
			<div style="color: white">_</div>
		{/if}
	</section>

	<section>
		<h2>if ~ else</h2>
		{#if count > 3}
			<div>count &gt; 3</div>
		{:else}
			<div>count &lt;= 3</div>
		{/if}
	</section>

	<section>
		<h2>if ~ else if ~</h2>
		{#if count > 3}
			<div>count &gt; 3</div>
		{:else if count === 3}
			<div>count == 3</div>
		{:else}
			<div>count &lt; 3</div>
		{/if}
	</section>

	<section>
		<h2>다중 블록</h2>
		{#if count > 3}
			{#if count === 5}
				<div>count == 5</div>
			{:else}
				<div>count &gt; 3</div>
			{/if}
		{:else}
			<div style="color: white">_</div>
		{/if}
	</section>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	section {
		text-align: left;
		margin: 10px;
		padding: 0px 0px 30px 30px;
		border: 2px solid orange;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
