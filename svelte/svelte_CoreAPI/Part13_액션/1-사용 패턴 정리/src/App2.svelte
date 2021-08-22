<script>
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
  }
</script>

<main>
  <div use:hello></div>
  <div
    use:hello={{
      width: '200px',
      height: '70px',
      color: 'royalblue'
    }}
  />
</main>
