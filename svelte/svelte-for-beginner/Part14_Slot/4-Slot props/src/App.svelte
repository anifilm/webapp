<script>
  import Hoverable from './Hoverable.svelte';
</script>

<main>
  <Hoverable let:hovering={active}>
    <div class:active={active}>
      {#if active}
        <p>I am being hovered upon.</p>
      {:else}
        <p>Hover over me!</p>
      {/if}
    </div>
  </Hoverable>

  <Hoverable let:hovering={active}>
    <div class:active={active}>
      {#if active}
        <p>I am being hovered upon.</p>
      {:else}
        <p>Hover over me!</p>
      {/if}
    </div>
  </Hoverable>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  div {
    padding: 1em;
    margin: 0 0 1em 0;
    background-color: #eee;
  }
  .active {
    background-color: #ff3e00;
    color: white;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
