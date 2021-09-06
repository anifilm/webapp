<script>
  let m = { x: 0, y: 0 };

  function handleMousemove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  };
</script>

<main>
  <div on:mousemove={handleMousemove}>
    The mouse position is {m.x} x {m.y}
  </div>
</main>

<style>
  div {
    width: 100%;
    height: 500px;
    border: 1px solid black;
  }
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
