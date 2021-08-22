<script>
	function hello(node, color) {
		console.log(node);
		node.style.width = '100px';
		node.style.height = '100px';
		node.style.backgroundColor = color || 'tomato';
	}
</script>

<main>
	<div use:hello></div>
	<div use:hello={'royalblue'}></div>
</main>
