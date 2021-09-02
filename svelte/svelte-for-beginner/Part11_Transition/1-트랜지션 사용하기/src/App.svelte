<script>
  import { fade } from 'svelte/transition';

  let visible = true;
</script>

<main>
  <label>
    <input type="checkbox" bind:checked={visible} />
    visible
  </label>

  {#if visible}
    <p transition:fade={{ delay: 500, duration: 1000 }}>
      Fades in and out
    </p>
  {/if}
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
