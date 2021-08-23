<script>
	import Address from './Address.svelte';

	let address = {
		label: '대한민국',
		children: [
			{
				label: '경기도',
				children: [
					{ label: '수원' },
					{ label: '성남' }
				]
			},
			{
				label: '강원도',
				children: [
					{ label: '강릉' },
					{ label: '속초' }
				]
			}
		]
	}
</script>

<main>
	<Address {address} />
</main>

<style>
	main {
		/*text-align: center;*/
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
