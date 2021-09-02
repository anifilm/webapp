<script>
  import { fade, fly } from 'svelte/transition';

  let visible = true;
</script>

<main>
  <label>
    <input type="checkbox" bind:checked={visible} />
    visible
  </label>

  {#if visible}
    <p in:fly={{ y: 200, duration: 2000 }} out:fade>
      Flies in, fades out
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
