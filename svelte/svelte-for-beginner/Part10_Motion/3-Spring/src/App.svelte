<script>
  import { spring } from 'svelte/motion';

  const coords = spring(
    {
      x: 50,
      y: 50
    },
    {
      stiffness: 0.1,
      damping: 0.25
    }
  );

  const size = spring(10);
</script>

<main>
  <div style="position: absolute; right: 3em">
    <label>
      <h3>stiffness ({coords.stiffness})</h3>
      <input bind:value={coords.stiffness} type="range" min="0" max="1" step="0.01" />
    </label>
    <label>
      <h3>damping ({coords.damping})</h3>
      <input bind:value={coords.damping} type="range" min="0" max="1" step="0.01" />
    </label>
  </div>

  <svg
    on:mousemove={(e) => {
      coords.set({ x: e.clientX, y: e.clientY });
    }}
    on:mousedown={() => {
      size.set(30);
    }}
    on:mouseup={() => {
      size.set(10);
    }}
  >
    <circle cx={$coords.x} cy={$coords.y} r={$size} />
  </svg>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  svg {
    width: 100%;
    height: 500px;
    border: 1px solid black;
  }
  circle {
    fill: #ff3e00;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
