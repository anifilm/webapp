<script>
  import Heropy from './Heropy.svelte';
  import Neo from './Neo.svelte';
  import Anderson from './Anderson.svelte';

  let components = [
    { name: 'Heropy', comp: Heropy },
    { name: 'Neo', comp: Neo },
    { name: 'Anderson', comp: Anderson }
  ];
  let index = 1;
  let selected = components[index - 1].comp;
</script>

<main>
  {#each components as { name, comp }, i (name)}
    <label>
      <input
        type="radio"
        value={comp}
        bind:group={selected}
        on:change={() => {index = i + 1}}
      />
      {name}
    </label>
  {/each}

  <!--
	{#if selected === 'Heropy'}
		<Heropy />
	{:else if selected === 'Neo'}
		<Neo />
	{/if} -->
  <svelte:component this={selected} index={index} />
  <div>{selected}</div>
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
