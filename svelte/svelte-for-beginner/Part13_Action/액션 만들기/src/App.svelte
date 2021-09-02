<script>
  import { longpress } from './longpress.js';

  let pressed = false;
  let duration = 1000;
</script>

<main>
  <label>
    <input type="range" bind:value={duration} max={2000} step={100} />
    {duration}ms
  </label>

  <button
    use:longpress={duration}
    on:longpress={() => {
      pressed = true;
    }}
    on:mouseenter={() => {
      pressed = false;
    }}
  >
    press and hold
  </button>

  {#if pressed}
    <p>congratulations, you pressed and held for {duration}ms</p>
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
