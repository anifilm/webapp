<script>
  let m = {
    x: 0,
    y: 0
  };
</script>

<div on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
  마우스 위치: {m.x}, {m.y}
</div>

<style>
  div {
    text-align: center;
    width: 100%;
    height: 100%;
    border: 1px solid black;
  }
</style>
