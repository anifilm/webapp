<script>
  // Props
  export let fruits;
</script>

<h2>Fruits</h2>
<ul>
  {#each fruits as fruit}
    <li>{fruit}</li>
  {/each}
</ul>

<style>
  ul {
		list-style: none;
    width: 94%;
	}
</style>
