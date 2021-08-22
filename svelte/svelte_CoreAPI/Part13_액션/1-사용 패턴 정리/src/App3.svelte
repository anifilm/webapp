<script>
  let toggle = true;
  let width = 200;

  function hello(node, options = {}) {
    const {
      width = '100px',
      height = '100px',
      color = 'tomato'
    } = options;
    console.log(node);
    node.style.width = width;
    node.style.height = height;
    node.style.backgroundColor = color;

    return {
      update(opts) {
        console.log('update!', opts);
        node.style.width = opts.width;
      },
      destroy() {
        console.log('destroy!');
      }
    }
  }
</script>

<main>
  <button on:click={() => {toggle = !toggle}}>Toggle!</button>
  <button on:click={() => {return width += 20}}>Size up!</button>

  <div use:hello></div>
  {#if toggle}
    <div
      use:hello={{
        width: `${width}px`,
        height: '70px',
        color: 'royalblue'
      }}
    >
    </div>
  {/if}
</main>
