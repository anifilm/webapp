<script>
  let m = {
    x: 0,
    y: 0
  };
  let isEnter = false;

  function handleMousemove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
  function handleMouseenter() {
    isEnter = true;
  }
  function handleMouseleave() {
    isEnter = false;
  }
</script>

<div on:mousemove={handleMousemove}>
  마우스 위치: {m.x}, {m.y}
  <div
    class="box"
    on:mouseenter={handleMouseenter}
    on:mouseleave={handleMouseleave}
  >
    {isEnter ? 'Enter' : 'Leave'}
  </div>
</div>

<style>
  div {
    text-align: center;
    width: 100%;
    height: 100%;
    border: 1px solid black;
  }
  .box {
    margin: 100px;
    width: 200px;
    height: 100px;
    background-color: blue;
    color: white;
  }
</style>
