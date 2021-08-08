<script>
  let w;
  let h;
  let size = 42;
  let text = 'Hello Beomy';
</script>

<main>
  <input type="range" bind:value={size} />
  <p>너비: {w}, 높이: {h}</p>
  <div bind:clientWidth={w} bind:clientHeight={h}>
    <span style="font-size: {size}px">{text}</span>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  div {
    display: inline-block;
    border: 1px solid lightgray;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
